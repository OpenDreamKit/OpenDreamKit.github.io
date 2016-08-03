---
layout: activity
title: "Jupyter-GAP now available as Docker image"
author: Markus Pfeiffer
type: software
date: 2016/08/03
---

Yesterday Alexander Konovalov and Markus Pfeiffer created a [Docker](https://docker.com) image containing
[GAP](http://www.gap-system.org), and an early version of the [GAP-Jupyter](https://github.com/gap-packages/jupyter-gap)
interface for ease of access. It is available from [dockerhub](https://hub.docker.com/r/gapsystem/gap-docker-jupyter/).

If you have docker already installed on your system, it should be fairly easy to get yourself up and running with the
following commands

```
# docker pull gapsystem/gap-docker-jupyter
# docker run -t -i -p 8888:8888 --net="host" gapsystem/gap-docker-jupyter
# firefox http://localhost:8888
```

The above commands will start a docker container with jupyter and a complete GAP installation ready to use. Here's an
example of use:

![Jupyter/GAP/Docker](public/img/gap-docker-jupyter-demo.png){: .center-image }

Note that this is an early version, and the roadmap for the next release is already quite clearly laid out. Contributions
to GAP-Jupyter and the GAP system itself are very welcome. Please submit them through the appropriate trackers on github.
