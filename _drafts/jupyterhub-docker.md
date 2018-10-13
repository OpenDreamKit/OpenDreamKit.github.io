---
layout: post
author: Luca De Feo
title: Deploying a containerized JupyterHub server with Docker
image: jupyterhub.png
tags:
  - blogpost
  - blogpost-technical
  - front-page
  - jupyter
  - teaching
  - cloud
  - emerging-technologies
---

## Medium-scale JupyterHub deployments

[JupyterHub](https://jupyterhub.readthedocs.io/en/stable/) is the new
cool kid on the block. Everyone knows [Jupyter
notebooks](https://jupyter.org/try) and how much they have
revolutionized the workflows of scientists and students alike.
Whereas Jupyter is meant to run on a personal computer, JupyterHub is
the solution that brings Jupyter to your own cloud, be it your team's,
your university's or your company's cloud.

Not all clouds are born equal, though. The [official JupyterHub
documentation](https://zero-to-jupyterhub.readthedocs.io/en/stable/)
targets very large clouds with multiple nodes, managed through
[Kubernetes](https://kubernetes.io/). This kind of deployment is
adapted for very large structures, such as universities, large
companies etc.

["The littlest
JupyterHub"](https://the-littlest-jupyterhub.readthedocs.io/en/latest/)
adheres to a different philosophy: a JupyterHub deployment on a single
server, with no virtualization or containerization technology. This
kind of deployment is perfect for your small team, where one
administrator can manually create accounts, and users can share data.

So far, no documentation seems to have addressed the *medium-scale*
deployment, e.g., the one adapted for your university department, or
for your company with hundreds of employees. The goal of this tutorial
is to present a complete solution to deploy a JupyterHub server with
delegated authentication and containerized environments, based on
[Docker](https://www.docker.com/). If you have a powerful server lying
underused in your organization's racks, chances are you will find this
deployment to your liking.

The set-up described in this tutorial has been deployed at [Univeristy
of Versailles](http://www.uvsq.fr/) for the whole faculty of science.
It is used both for teaching and research. You can find the full
configuration scripts here:
<https://github.com/defeo/jupyterhub-docker/>. I will be glad to
receive your comments, suggestions, bug reports and help requests via
the [GitHub Issues](https://github.com/defeo/jupyterhub-docker/issues)
section.


## The architecture of JupyterHub

A JupyterHub deployment has several components. Processes first:

- A configurable *Proxy*, responsible for receiving all web requests
  and dispatching them to the appropriate component.

- A *Hub*, responsible for handling authentication, *spawning*
  single-user Jupyter notebook servers, and configuring the Proxy.
  
- Single-user Jupyter servers. These are nothing else than the Jupyter
  notebook servers you are used to run on your personal computer,
  however they are started and stopped on demand by the Hub as users
  come and go.
  
More details can be found on the [official JupyterHub
documentation](https://jupyterhub.readthedocs.io/en/stable/).  In our
deployment, we will put the Proxy and the Hub in the same container,
and the single-user server in another one.

Although JupyterHub can be directly exposed to the web without any
intermediary, and even handle TLS certificates for https, it will be
convenient for us to put it behind a reverse proxy, for efficiency,
security, and other reasons that will be apparent later. Typical
choices for a reverse proxy are [Apache
2](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) and
[Nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/);
however in this tutorial we chose to use
[Traefik](https://traefik.io/), for its ease of use and nice
integration with Docker.

Thus, we will in total have to handle three container (images): one
for the Proxy+Hub, one for the reverse proxy, and one for the
single-use servers. To simplify the management, and automatizing the
deployment, we will use [Docker
compose](https://docs.docker.com/compose/).  All the configuration
will be kept in a single folder, with the following structure:

```
./
+-- .env
+-- docker-compose.yml
+-- jupyterhub/
|   +-- Dockerfile
|   +-- jupyter-config.py
+-- jupyterlab/
|   +-- Dockerfile
+-- reverse-proxy/
    +-- traefik.toml
```

The main configuration file for Docker compose is
`docker-compose.yml`: it configures all containers (*services*, in
compose jargon), and associated *volumes* and *networks*. It will look
like this:

```yaml
version: '3'

services:
  # Configuration for Hub+Proxy
  jupyterhub:
    ...
  
  # Configuration for reverse proxy
  reverse-proxy:
    ...
	
  # Configuration for the single-user servers
  jupyterlab:
    ...
	
volumes:
  ...
  
networks:
  ...
```

We now explain the configuration of each service, and the contents of
each file in detail.


## The reverse proxy

This is the simplest one, since most of the configuration is pushed
into the other services. Traefik uses a single file for configuration,
named `traefik.toml`. The [recommended
way](https://docs.traefik.io/#the-trfik-quickstart-using-docker) to
use it is to bind-mount it inside the default docker container. Using
`docker-compose.yml`:

```yaml
  reverse-proxy:
    image: traefik
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    volumes:
      - ./reverse-proxy/traefik.toml:/etc/traefik/traefik.toml
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/certs:/etc/certs
```

Notice that we also bound some internet ports: ports 80 and 443 are
for http and https, while port 8080 is for the Traefik *dashboard*,
useful for analytics and debugging. You probably want to block access
to the 8080 port from outside your local network (e.g., via iptables
or some other firewall technology).

We also mounted two other *volumes* in the container. The first one,
`docker.sock`, is to let Traefik access the Docker server, this will
let it *automagically* configure routing web requests to other service
as they are started by Docker.

The second one is to let Traefik access your server TLS credentials,
for https. This assumes that you have put in `/etc/certs` on your host
machine a `server.crt` and a `server.key` file, containing your server
certificate and private key.

Now we are ready to write the `traefik.toml` configuration file. We
want to:

- redirect all http requests to https, configure TLS certificates,
- activate automatic discovery of running Docker containers,
- activate the Traefik *dashboard*.

```toml
debug = false

logLevel = "ERROR"
defaultEntryPoints = ["https","http"]

# Redirect HTTP -> HTTPS, install certificates
[entryPoints]
  [entryPoints.http]
  address = ":80"
    [entryPoints.http.redirect]
    entryPoint = "https"
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
      [[entryPoints.https.tls.certificates]]
      certFile = "/etc/certs/server.crt"
      keyFile = "/etc/certs/server.key"

# Activate docker API
[docker]
domain = "docker.local"
watch = true

# Activate Traefik dashboard
[api]
```

This is all that's needed. You may be wondering why `traefik.toml`
contains no configuration specific to JupyterHub. This is because the
JupyterHub components will communicate with Traefik via the Docker
api.


## The Hub

The Hub is the centerpiece of our setup. When a user first lands on
our JupyterHub instance, it is directed to the Hub, which then:

1. Authenticates the user by any of the configured methods (see
   [below](#authentication));
2. *Spawns* a single-user Jupyter notebook server for the user (in our
   case, this will run in a Docker container);
3. Redirects the user to the single-user server.

We will start from the [official JupyterHub
container](https://hub.docker.com/r/jupyterhub/jupyterhub/), and build
our own Hub on top of it.  We'll put all the configuration files in
the folder named `jupyterhub`, and we'll tell compose to build and
configure the container:

```yaml
  jupyterhub:
    build: jupyterhub                # Build the container from this folder.
    container_name: jupyterhub_hub   # The service will use this container name.
    volumes:                         # Give access to Docker socket.
      - /var/run/docker.sock:/var/run/docker.sock
    environment:                     # Env variables passed to the Hub process.
      DOCKER_JUPYTER_CONTAINER: jupyterlab_img
      DOCKER_NETWORK_NAME: ${COMPOSE_PROJECT_NAME}_default
      HUB_IP: jupyterhub_hub
    labels:                          # Traefik configuration.
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:jupyter.example.com"
```

Here's some highlights from the compose configuration:

- We mount the Docker socket inside the container, so that it will be
  able to spawn containers for the single-user Jupyter servers.

- We set some environment variables for the Hub process, they will be
  used in the Hub configuration file `jupyterhub_config.py`:

  - `DOCKER_JUPYTER_CONTAINER` is the name of the container for the
    single-user servers (see [below](#the-jupyter-notebook-servers)).

  - `DOCKER_NETWORK_NAME` is the name of the Docker network used by
    the services; normally, this network gets an automatic name from
    Docker compose, but the Hub needs to know this name to connect the
    single-user servers to it. To control the name we thus pass an
    environment variable `COMPOSE_PROJECT_NAME` to Docker compose, and
    the network name is obtained by appending `_default` to
    it. `COMPOSE_PROJECT_NAME` can be passed either via the shell, or
    by adding a `.env` file next to `docker-compose.yml`, with the
    following content
	
	```bash
	# Name of our Docker compose project
	COMPOSE_PROJECT_NAME=my_hub
	```
	
  - `HUB_IP` is the IP address of the Hub service within the docker
    network.  By using the `container_name` compose directive, we can
    set an alias for the IP, and use the same for `HUB_IP`.

- We set *labels* for configuring Traefik. These have no effect on
  Docker, but are used by Traefik for configuring routing. In this
  example, we are activating the Traefik API, and we are asking to
  redirect all requests for `jupyter.example.com` to the Hub service.

We can now move to the configuration of the container itself. We start
with the `Dockerfile`:

```docker
# Do not forget to pin down the version
FROM jupyterhub/jupyterhub:0.9.3

# Copy the JupyterHub configuration in the container
COPY jupyterhub_config.py .

# Download script to automatically stop idle single-user servers
RUN wget https://raw.githubusercontent.com/jupyterhub/jupyterhub/0.9.3/examples/cull-idle/cull_idle_servers.py

# Install dependencies (for advanced authentication and spawning)
RUN pip install \
    dockerspawner==0.10.0 \
    oauthenticator==0.8.0
```

It is important that we explicitly pin down a version of JupyterHub
(0.9.3 in the example), indeed the containers for the Hub and for the
single user servers must use the same version of JupyterHub.

Next to `Dockerfile`, we have `jupyterhub_config.py` to configure the
Hub.  This plain Python file contains many different sections.  We
start with the configuration of the *spawner*: we use the class
`DockerSpawner` that spawns single-user servers in a separate Docker
container.  We see that we use here the environment variables that we
have set in `docker-compose.yml`:

```python
import os

c.JupyterHub.spawner_class = 'dockerspawner.DockerSpawner'
c.DockerSpawner.image = os.environ['DOCKER_JUPYTER_CONTAINER']
c.DockerSpawner.network_name = os.environ['DOCKER_NETWORK_NAME']
c.JupyterHub.hub_ip = os.environ['HUB_IP']
```

Optionally, we may want to stop the single-user servers after a
certain amount of idle time.  To this end, we register a JupyterHub
*service* as follows:

```python
# See https://github.com/jupyterhub/jupyterhub/blob/master/examples/cull-idle
c.JupyterHub.services = [
    {
        'name': 'cull_idle',
        'admin': True,
        'command': 'python /srv/jupyterhub/cull_idle_servers.py --timeout=3600'.split(),
    },
]
```

For a complete list of all available configuration options, you can
**TODO: what?**.


### Authentication

For the Hub configuration to be complete, we have to configure an
authentication method.  By default, JupyterHub authenticates users
with the local system (more precisely, via
[PAM](https://en.wikipedia.org/wiki/Linux_PAM)), but this is not
useful for us.

The quickest way to get a JupyterHub server running with a working
authentication, is to delegate to an authentication service such as
GitLab's.  This requires adding only two lines to
`jupyterhub-config.py`:

```python
## Configure authentication (delagated to GitLab)
from oauthenticator.gitlab import GitLabOAuthenticator
c.JupyterHub.authenticator_class = GitLabOAuthenticator
```

Other preconfigured third party services are documented
[here](https://github.com/jupyterhub/oauthenticator).  In principle,
any OAuth2 server can be used as third party authentication server.
If you are lucky enough to have such a server in your institution[^1],
you can use it like thus:

[^1]: If you are unlucky like me, you have neither an OAuht2, nor an
	LDAP server.  Instead, you may have access to some old
	University-world central authentication service such as [Jasig's
	CAS](https://www.apereo.org/projects/cas).  In this case, you may
	be interested in [this project of
	mine](https://github.com/defeo/cas2oauth2bridge), which implements
	a OAuth2 server using Jasig's CAS as an authentication backend.

```python
from oauthenticator.oauth2 import OAuthLoginHandler
from oauthenticator.generic import GenericOAuthenticator
from tornado.auth import OAuth2Mixin

# OAuth2 endpoints
class MyOAuthMixin(OAuth2Mixin):
    _OAUTH_AUTHORIZE_URL = 'https://oauth2.example.com/login'
    _OAUTH_ACCESS_TOKEN_URL = 'https://oauth2.example.com/token'

class MyOAuthLoginHandler(OAuthLoginHandler, MyOAuthMixin):
    pass

# Authenticator configuration
class MyOAuthAuthenticator(GenericOAuthenticator):
    login_service = 'Example'
    login_handler = MyOAuthLoginHandler
    userdata_url = 'https://oauth2.example.com/userdata'
    token_url = 'https://oauth2.example.com/token'
    oauth_callback_url = 'https://jupyter.example.com/hub/oauth_callback'
    client_id = '...'      # Your client ID and secret, as provided to you
    client_secret = '...'  # by the OAuth2 service.

c.JupyterHub.authenticator_class = MyOAuthAuthenticator
```

**TODO: this conf is longer than needed; report bugs and simplify.**

Alternatively, your institution may have an LDAP server, in which case
you can use the `LDAPAuthenticator` with the configuration described
[here](https://github.com/jupyterhub/ldapauthenticator): modify
`Dockerfile` to install `jupyterhub-ldapauthenticator`, then add (at
least) these lines to `jupyterhub_config.py`:

```python
c.LDAPAuthenticator.server_address = 'ldap.example.com'
c.LDAPAuthenticator.bind_dn_template = []
c.JupyterHub.authenticator_class = 'ldapauthenticator.LDAPAuthenticator'
```


## The Jupyter notebook servers

```yaml
  jupyterlab:
    build:
      context: jupyterlab
      target: jupyterlab_img
    command: echo
```

```python
# Redirect to JupyterLab, instead of the old Jupyter notebook
c.Spawner.default_url = '/lab'
```


## Data persistence

```python
# user data persistence
# see https://github.com/jupyterhub/dockerspawner#data-persistence-and-dockerspawner
notebook_dir = os.environ.get('DOCKER_NOTEBOOK_DIR') or '/home/jovyan'
c.DockerSpawner.notebook_dir = notebook_dir
c.DockerSpawner.volumes = { 'jupyterhub-user-{username}': notebook_dir }
```

## Block networking

