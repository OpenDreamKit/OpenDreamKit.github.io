---
layout: post
title: "Jupyter-GAP now available as Docker image"
author: Markus Pfeiffer
type: release
date: 2016/08/03
redirect_from: "/activities/2016-08-03-gap-docker-jupyter/"
tags:
    - release
    - jupyter
    - GAP
    - docker
---

Yesterday Alexander Konovalov and Markus Pfeiffer created a [Docker](https://docker.com) image containing
[GAP](http://www.gap-system.org), and an early version of the [GAP-Jupyter](https://github.com/gap-packages/jupyter-gap)
interface for ease of access. It is available from [DockerHub](https://hub.docker.com/r/gapsystem/gap-docker-jupyter/).

If you have Docker already installed on your system, it should be fairly easy to get yourself up and running with the
following commands

```
# docker pull gapsystem/gap-docker-jupyter
# docker run -t -i -p 8888:8888 --net="host" gapsystem/gap-docker-jupyter
# firefox http://localhost:8888
```

The above commands will start a Docker container with Jupyter and a complete GAP installation ready to use. Here's an
example session:

![Jupyter/GAP/Docker](/public/img/gap-docker-jupyter-demo.png){: .center-image }

Note that this is an early version, and the roadmap for the next release is already quite
clearly laid out with many improvements. Contributions to [GAP-Jupyter](https://github.com/gap-packages/jupyter-gap),
and the [GAP system](https://github.com/gap-system/gap) itself are very welcome.

Please contact us through the appropriate trackers on [GitHub](https://github.com).
