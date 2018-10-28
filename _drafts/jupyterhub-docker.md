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
[Kubernetes](https://kubernetes.io/).[^2] This kind of deployment is
adapted for very large structures, such as universities, large
companies etc.

[^2]: See also
    <https://blog.jupyter.org/how-to-deploy-jupyterhub-with-kubernetes-on-openstack-f8f6120d4b1>
    for a Kubernetes deployment of JupyterHub on OpenStack.

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
      DOCKER_JUPYTER_IMAGE: jupyterlab_img
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

  - `DOCKER_JUPYTER_IMAGE` is the name of the Docker image for the
    single-user servers; this must match the image configured in the
    `jupyterlab` section of `docker-compose.yml` (see
    [below](#the-jupyter-notebook-servers)).

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
`DockerSpawner` to spawn single-user servers in a separate Docker
container.  We use here the environment variables that we have set in
`docker-compose.yml`:

```python
import os

c.JupyterHub.spawner_class = 'dockerspawner.DockerSpawner'
c.DockerSpawner.image = os.environ['DOCKER_JUPYTER_IMAGE']
c.DockerSpawner.network_name = os.environ['DOCKER_NETWORK_NAME']
c.JupyterHub.hub_ip = os.environ['HUB_IP']
```

Optionally, we may want to stop the single-user servers after a
certain amount of idle time.  Following [this
example](https://github.com/jupyterhub/jupyterhub/blob/master/examples/cull-idle),
we register a JupyterHub *service* like this:

```python
c.JupyterHub.services = [
    {
        'name': 'cull_idle',
        'admin': True,
        'command': 'python /srv/jupyterhub/cull_idle_servers.py --timeout=3600'.split(),
    },
]
```

For a complete list of all available configuration options, you can
run the following command (answer `y` to the question):

```
docker-compose run --rm jupyterhub jupyterhub --generate-config -f /dev/stdout
```


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
you can use it like this:

[^1]: If you are unlucky like me, you have neither an OAuht2, nor an
	LDAP server.  Instead, you may have access to some stinky
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

The last component of our setup is the single-user Jupyter server.
This is the more versatile and configurable part, as it defines the
environment where your users are going to work.

The simplest way to get started, is to use one of the pre-packaged
[Jupyter Docker
stacks](https://jupyter-docker-stacks.readthedocs.io/en/latest/).
This only requires one line in `docker-compose.yml`:

```yaml
  jupyterlab:
    image: jupyterlab/scipy-notebook:1145fb1198b2
    command: echo
```

The extra line `command: echo` is there so that, when Docker compose
starts the service, it terminates immediately.  Indeed this image is
meant to be loaded by the Hub, not by compose. Do not forget to edit
the `jupyterhub` section of `docker-compose.yml`, so that the
`DOCKER_JUPYTER_IMAGE` env variable matches this one.

```yaml
  jupyterhub:
    environment:
      DOCKER_JUPYTER_IMAGE: jupyterlab/scipy-notebook:1145fb1198b2
```

Alternatively, you can use any of [OpenDreamKit's pre-built images](#todo).

Finally, you can build your own image: the only requirement is that it
contains the `jupyterhub` Python package (and possibly some Jupyter
kernels, to make it interesting).  I recommend starting from one of
the Jupyter Docker stacks images: create a file
`jupyterlab/Dockerfile` with, e.g., the following contents:

```docker
FROM jupyter/scipy-notebook:1145fb1198b2

RUN conda install --quiet --yes \
    'r-base=3.4.1' \
    'r-irkernel=0.8*'&& \
    conda clean -tipsy
```

then modify `docker-compose.yml` as follows:

```yaml
  jupyterlab:
    build: jupyterlab
    image: jupyterlab_img
    command: echo
```

It is recommended that you test your image alone, before starting
JupyterHub.  You can do so by building it with compose:

```bash
docker-compose build jupyterlab
```

then running a test server (adapt the ports to your configuration),
with:

```bash
docker run --rm -p 8888:8888 jupyterlab_img
```

and copying in your browser the URL printed on the console (something
like <http://127.0.0.1:8888/?token=012...>).  You can stop the test
server hitting `Ctrl-C`.

If everything works normally, you can try out the excellent JupyterLab
interface by replacing <http://127.0.0.1:8888/user/.../tree> with
<http://127.0.0.1:8888/user/.../lab>.  You will not be disappointed,
[JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) is a game
changer: it transforms the old notebook interface in a full featured
IDE, with multiple split views, file explorer, Jupyter notebooks, and
much more, in a single browser window. 

If you want to user JupyterLab as the default interface for your
JupyterHub users, configure the Hub by adding this line to
`jupyterhub-config.py`:

```python
# Redirect to JupyterLab, instead of the plain Jupyter notebook
c.Spawner.default_url = '/lab'
```


## Running!

You are now ready to test your JupyterHub server. As superuser, or as
a user of the `docker` group, run

```
docker-compose build
docker-compose up
```

The JupyterHub server loads up and, if all is configured properly,
starts waiting for connections.  Test that authentication and starting
up single-user servers works properly, try playing with some
notebooks. When you are satisfied you can stop the server by hitting
`Ctrl-C`.

Be sure to read the documentation to [Docker
compose](https://docs.docker.com/compose/), and
[JupyterHub](https://jupyterhub.readthedocs.io/) before going into
production.  Customize the setup to your liking, then, when you are
ready to put the server online for good, launch it with

```
docker-compose up -d
```

You can stop and destroy the server with

```
docker-compose down
```

Note that single-user servers are not destroyed when they are
terminated: when a user returns JupyterHub will look for a Docker
container named `jupyter-`*`username`*, and will restart it with all
its data.  This means that, even if you update the JupyterLab image,
returning users will not see the changes until you destroy their old
containers. You can list all containers, including inactive ones, with

```
docker ps -a
```

and you can remove them individually with `docker rm`. To remove all
containers at once (after the JupyterHub server has been stopped), you
can run a command like this:

```
docker rm $(docker ps -qa -f "name=jupyter-")
```

Be wary that this command destroys all data associated with the users,
including their work. Use with care!


## Data persistence

With this configuration, our JupyterHub server is not persistent: all
user data is irremediably lost when the containers are destroyed.
This may be acceptable for some use cases, however it is not what is
typically wanted.

Using [Docker volumes](https://docs.docker.com/storage/volumes/), we
can make storage permanent.  Two kinds of data need to be stored: the
Hub data, containing information on administrators and existing users,
and the user's data for the single-user servers.

To persist the Hub data, simply modify `docker-compose.yml` by adding
a volume and mounting it inside the `jupyterhub` service:

```yaml
services:
  jupyterhub:
    volumes:
      - jupyterhub_data:/srv/jupyterhub

volumes:
  jupyterhub_data:
```

Be careful with this configuration: if you update
`jupyterhub_config.py` and rebuild the `jupyterhub` service, the
contents will not be updated inside the volume, unless you destroy it
first with `docker volume rm`.

The Hub takes care of handling volumes for the single-user servers.
We can configure data persistence by adding these lines to
`jupyterhub-config.py`:

```python
import os
# user data persistence
# see https://github.com/jupyterhub/dockerspawner#data-persistence-and-dockerspawner
notebook_dir = os.environ.get('DOCKER_NOTEBOOK_DIR') or '/home/jovyan'
c.DockerSpawner.notebook_dir = notebook_dir
c.DockerSpawner.volumes = { 'jupyterhub-user-{username}': notebook_dir }
```

This way, even if we update the `jupyterlab` image and destroy the
associated containers, the user data will not be lost.

Note that the level of control on the user data is rather minimal in
this configuration.  For example it is not possible to enforce
per-user disk quotas.  It would be interesting to explore more
advanced uses of Docker volumes enabling complex usage patterns.


## Block networking

In contexts where you do not trust your users, it may be useful to
restrict networking from inside single-user containers.  Indeed,
single-user servers are full fledged Unix servers, and can potentially
be used as relay nodes in network attacks.

A simple way to restrict networking is to ban any connection to the
outside world from single-user servers, letting them only communicate
with the Hub. This is easily accomplished using the [internal
flag](https://docs.docker.com/v17.09/engine/userguide/networking/work-with-networks/)
for Docker networks. Edit `docker-compose.yml` like this:

```yaml
services:
  jupyterhub:
    environment:
      DOCKER_NETWORK_NAME: ${COMPOSE_PROJECT_NAME}_jupyter
      HUB_IP: jupyterhub_hub
    networks:
      default:
      jupyter:
        aliases:
          - jupyterhub_hub
    labels:
      - "traefik.docker.network=${COMPOSE_PROJECT_NAME}_default"

networks:
  jupyter:
    internal: true
```

More complex filtering can be achieved with iptables.


## Conclusion

We have described a full setup for a JupyterHub + Jupyter/JupyterLab
server targeted to a medium sized institution, with external
authentication and containerized components.

This setup can reasonably run on a personal computer, but is really
ideal for powerful servers, such as those found in research labs at
many universities.

Thanks to Docker compose, the whole configuration fits in a few
hundred lines, and is very easy to maintain and replicate.

We have been running an experiment for one year already, using a
similar setup to teach a class in University of Versailles.  Since
September 2018 we are now running a larger scale deployment, used in
several classes. You can find the complete current configuration at
<https://github.com/defeo/jupyterhub-docker>.

For comments, questions and suggestions, feel free to [contact
me](https://defeo.lu/) directly.
