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
cool kid in the block. Everyone knows [Jupyter
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
of Versailles](http://www.uvsq.fr/) for the whole science faculty. It
is used both for teaching and research. You can find the full
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
compose](https://docs.docker.com/compose/). Docker compose uses a
single YAML file, typically named `docker-compose.yml`, to configure
all containers (*services*, in compose jargon), and associated
*volumes* and *networks*. This file will look like this:

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

We now explain the configuration of each service in detail.


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

The second one, is to let Traefik access your server TLS credentials,
for https. This assumes that you have put in `/etc/certs` on your host
machine a `server.crt` and a `server.key` file, containing your server
certificate and private key.

Now we are ready to write the `traefik.toml` configuration file. We
want to:

- redirect all http requests to https, configure TLS certificates,
- activate automatic discovery of running Docker containers,
- activate the Traefik *dashboard*.

This is done, respectively, in the `[entrypoints]`, `[docker]`, and
`[api]` sections:

```toml
debug = false

logLevel = "ERROR"
defaultEntryPoints = ["https","http"]

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

[docker]
domain = "docker.local"
watch = true

[api]
```


## The Hub

```yaml
  jupyterhub:
    build: jupyterhub
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      DOCKER_JUPYTER_CONTAINER: jupyterlab_img
      DOCKER_NETWORK_NAME: jupyterhub_net
      HUB_IP: jupyterhub
    labels:
      - "traefik.enable=true"
      - "traefik.hub.frontend.rule=Host:jupyter.example.com"
```

## Authentication


## The Jupyter notebook servers

```yaml
  jupyterlab:
    build:
      context: jupyterlab
      target: jupyterlab_img
    command: echo
```

## Data persistence

## Block networking
