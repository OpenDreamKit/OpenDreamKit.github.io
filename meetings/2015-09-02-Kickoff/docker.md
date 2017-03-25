---
layout: page
title: "Kickoff meeting: docker containers for all components"
---

# Goal

Build a collection of consistent docker containers for the various
software components involved in OpenDreamKit, making it possible to
focus on writing small chunks of docker files and composing them to
get various docker images and have basic dependency management.

# Difficulty

Docker allows to stack image, but does not support "multiple
inheritance".

## Possible trick: use CPP and include guards

Mock example:

GAP_core.docker:

        #include "base"
        ... installation instructions for gap ...

GAP_full.docker: (GAP + packages + dependencies)

        #include "GAP_core.docker"
        #include "Singular.docker"
        #include "...

## Alternative: using a ppa / debian package

Vincent Néri (from LRI) suggested an alternative approach which might
make much sense. Namely, rather than somehow reinventing a dummy
packaging system with dependencies, using the standard debian package
system (or that of whatever base distribution), and create a private
ppa (source or binary). And then have our docker file just request the
appropriate packages, knowing that dependencies will be taken care
automatically.

That might actually not be too much additional work, given that:

- We will be able to focus on a specific version of a specific
  distribution

- We can afford, in a first step, to create not-so-kosher packages
  (e.g. a huge sage package), and to select specific versions of each
  packages.

And this opens the door, in the longer run, for joining forces with
the tasks about creating packages for all distributions. In fact,
maybe we could right now join forces with ppa:aims/sagemath handled by
Jan Groenewald.

    https://launchpad.net/~aims/+archive/ubuntu/sagemath

We could also get help from our debian specialist Julien (Logilab).

# Single use or multiple use docker image?

Option 1: For each collection of software, build one multiple-use
docker image (to be used as jupyter server, or jupyter kernel, or web
service, or interactive terminal)

Option 2: Have separate images for each of those use cases

# One docker container per component, or multiple component containers?

To be further discussed ...

Separate container would be nice for modularity; software as a
service. We would need to define some conventions for how the various
components would call each other. However if two components need to
communicate at C-level (libGAP, ...), they need to be in the same
container.

# List of docker chunks we want to build:

- PARI/GP
- Singular
- 4ti2
- polymake
- flint
- normaliz
- xcas
- maxima
- Core GAP
- Full GAP:
- Sage
- Libraries: Linbox? MPIR?
- Axiom
- Jupyter
- LaTeX
- ???

# Potential base docker images:

- ubuntu + build_essentials & the like (400Mb)

- Core/OS
- archlinux

Always using the same base docker image would make it easier to reduce
resource consumption and composability.

# Bare containers or containers with a kernel?

Do we want separate containers for MacOS / Windows, or use the same
for all platforms, at the cost of embbedding a kernel that wont be
used? The overhead is probably reasonably negligible.

# Potential thing we may want to standardize

- Each snippet should put a Jupyter kernel description (when there is such a kernel) in a standard location
  (see the jupyter configuration for which location we want to pick)

- Standard default docker image starter with two optional parameters:
  - How the image is going to be used:
    - as jupyter kernel (open an appropriate port)
    - as notebook server?
    - as text-based interpreter
  - What software to start (when relevant): GAP, Singular, ...
  This could be snippet

# Existing docker images
- Dockerimage of the SPP Computeralgebra, contains GAP, Normaliz, Polymake, Singular, 4ti2: [sebasguts/sppdocker](https://hub.docker.com/r/sebasguts/sppdocker/)
- Dockerimage for GAP and dependencies, contains GAP, PARI/GP, Polymake, Singular, 4ti2: [gapsystem/gap-docker](https://hub.docker.com/r/gapsystem/gap-docker/)
- Official Dockerimage for Sage: [sagemath/sage](https://hub.docker.com/r/sagemath/sage/)
- Dockerimage for Sage: [cornu/docker-sage](https://hub.docker.com/r/cornu/docker-sage/)
- Dockerimage for Sage: [swenson/sage](https://hub.docker.com/r/swenson/sage/)
