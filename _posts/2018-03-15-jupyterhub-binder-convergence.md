---
layout: post
author: Nicolas M. Thiéry
title: Toward versatile JupyterHub deployments, with the Binder and JupyterHub convergence
tags:
    - blogpost
    - jupyter
    - binder
    - emerging-technologies
    - user-interface
    - teaching
    - cloud
---

# About this document 

Nowadays, many institutions run a [JupyterHub](http://jupyterhub.org)
server, providing their members with easy access to [Jupyter](http://jupyter.org)-based
virtual environments (a.k.a. notebook servers), preinstalled with a
stack of computational software, tailored to the typical needs of the
institution's members. Meanwhile, since a few years ago,
[Binder](http://mybinder.org) lets any user on the internet define,
run, and share temporary virtual environments equipped with an
arbitrary software stack ([examples](https://jupyter.org/try)).

In Fall 2017, Binder was revamped as BinderHub, a lightweight layer on
top of JupyterHub. The next step in this convergence is to bring
together the best of both worlds: think persistent authenticated
[Binder](http://mybinder.org); or
[repo2docker](https://github.com/jupyter/repo2docker) enabled
[JupyterHub](http://jupyterhub.org). For now, let's call them *versatile
JupyterHub deployments*.

This document brainstorms this convergence process: it sets up the
ground with a scenario and assumptions for a typical institution-wide
JupyterHub deployment, proposes specifications from a user perspective,
and describes some typical use cases that would be enabled by such
specifications. It further discusses security aspects and what remains
to be implemented, before concluding with more advanced features and
open questions.

This document started as a collection of notes of Nicolas M. Thiéry,
reflecting on in-development
[JupyterHub deployment at Paris-Saclay](http://jupytercloud.lal.in2p3.fr/)
 and [EGI](https://jupyterhub.fedcloud-tf.fedcloud.eu/) respectively, with [some additional contributions](https://github.com/OpenDreamKit/OpenDreamKit.github.io/commits/master/_posts/2018-03-15-jupyterhub-binder-convergence.md).
They were largely informed by many discussions at
March 2018's JupyterHub coding sprint in Orsay that involved dev-ops
of those deployments and two of the main JupyterHub and BinderHub
devs: Min Ragan Kelley and Chris Holdgraf. It was also inspired by
some of [cocalc](https://cocalc.com) features. Thank you all!!!

This document is meant for brainstorming; please
[hop in and edit](https://github.com/OpenDreamKit/OpenDreamKit.github.io/tree/master/_posts/2018-03-15-jupyterhub-binder-convergence.md).

# Typical scenario

An institution -- typically a university, a national lab, a
transnational research infrastructure such [European
XFEL](http://xfel.eu), or transational infrastructure provider like
[EGI](http://egi.eu) -- wishes to provide its members and users with a
Jupyter service.

The service lets user spawn and access personal or collaborative
virtual environments: namely a web interface to a light weight virtual
machine, in which they can use Jupyter notebooks, run calculations,
etc. In the remainder of this document we will use JupyterHub's
terminology and call such
virtual environments *notebook servers*.

To cater for a large variety of use cases in teaching and research,
the main aim of the upcoming specifications is to make the service as
versatile as possible. In particular, it should empower the users to
customize the service (available software stack, storage setup, ...),
without a need for administrator intervention.

# Assumptions

The institution has access to:

- An authentication service (Single Sign-On)

  Examples: Paris-Sud' Adonis internal SSO, the federated "Recherche
  et Enseignement Supérieur" authentication service of Renater, EGI
  CheckIn, ...

- Computing resources

  Examples: a local cluster, access to a externalized cloud (GC, AWS,
  Azure, ...)

- A shared volume service using the above authentication service

  E.g. a local NextCloud service, or ...

- (Optional) a forge

  Examples: a local gitlab service, github, ... if private
  repositories are needed, the forge presumably will need the same
  authentication service


# Specifications / User Story

## Main page of the service

After authentication, the user faces a page that is similar to
binder's main page:

- A form to describe and launch the desired persistent notebook
  server.

  For the sake of simplicity, the form could optionally start hidden,
  and be replaced by two items: "Choose preconfigured notebook server"
  / "Create my own notebook server".

- Links to documentation

- Warnings about potential security concerns, to inform the user
  choices.

  Alternatively, such warnings could be displayed in a later security
  confirmation dialog "with the given configuration, a malicious
  image/collaborator could ...; do you trust it? Proceed/Edit
  Configuration/Cancel/Don't ask again"

- Institutional credits (service provided by ...)

The form consists of:

- The usual binder items:

    - the description of the computing environment: a repo-to-docker-style git repo+branch+...

    - the file/url to open on startup

    - ...

    - a UI to get a URL/badge referencing the machine

- Persistence and access options:

    - server_name: name to give to the server

      If server_name is not specified, create a random server name?

    - mount options: [[mount point, volume url], [...]]

      This assumes that the user has appropriate credentials to access
      the given volumes through the authentication service

    - collaborators=[....]: (optional) a white list of other users of this jupyterhub that can access this server

    - a flag allowing public 'read-only' access [read-only meaning that the container and all changes are thrown away at the end of the session; and that any 'mounted' data sources are read-only during the session]

    - credentials: whether to pass the user credentials into the container (as environment variable, or file)

    - resources scaling (optional): memory, number of processors,
      duration (time or time of inactivity after which the server will
      be automatically stopped / destroyed)

## Behavior upon clicking Launch:

- If a notebook server with the given name already exists and the
   parameters are not changed (or not set): connect to that server,
   restarting it if needed

- If the parameters have been changed, update the existing server when
  possible? Or should the user just delete the server?

- Otherwise, create and launch

## Behavior upon following a server URL/badge:

-  Display the authentication page (if not yet authenticated)

-  Display a security confirmation dialog as above (if origin is not within the
    jupyterhub), with a description of the configuration and origin.

-  As above after clicking "Launch"

# Some use cases

## Local binder (better name? [Binder@home?])

Scenario: Luc, a researcher, discovered a nice computing environment
on Binder. Maybe a notebook demonstrating an interesting workflow to
analyze data. He wants to use it more intensively on his own data.

Setup: Luc recreates the same environment on his local server by just
changing the server name in the binder URL.

## Easy sharing of computational environments

Scenarios:

- Sarah, a power user, is using some specialized stack of software on
  a daily basis; maybe she authored some of it. She wants her
  colleagues in her lab to try out that software.

- Paul organizes a training session for his colleagues.

- Alice has authored notebooks that she wants to share with her
  colleagues. Maybe the notebooks automatize some complicated
  processes and present them in the form of interactive web
  applications built using [Jupyter widgets](http://jupyter.org/widgets)
  ([demo](https://mybinder.org/v2/gh/binder-examples/appmode/master?urlpath=apps%2Findex.ipynb)).
  Think of a wizard to setup parameters and data, run a computation,
  and visualize the results.

Setup:

They prepare a notebook server with the appropriate software stack
installed configured and access to the user's shared home directory.
Maybe they provide some document. They then just have to share the URL
with their colleagues. No lengthy software installation. The
colleagues can then start working right away, in their own
environment, using their own data, saving their work in their home
directory.

In all cases, the explicit description of the computing environment
(and the use of open source software!) eases:
- the publication of the same computational environment / notebooks
  elsewhere, e.g. on a public Binder;
- the installation the same software on the user's personal computer.

## Collaboration

Scenario: Alice and Bob want to collaborate on some data analysis.

Setup:

They create a shared volume. Then either:

- They set up each their own notebook server, and let them share the
  same volume.

- Alice sets up a single server, with Bob as collaborator. Within the
  server, they are considered as the same user.

At this stage, they should not edit the same notebook simultaneously.
However the stable version of JupyterLab, due sometime in 2018, should
enable real-time collaboration in both setups, thanks to
a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)
file format for notebooks.

## Class management

Scenario: using the server for a class' computer labs and assignments

Desired features:
- Full customizability of the computing environment by the teacher
- Support for live manipulation of the class notes
- Support for submission, collection and auto-grading of assignments
- Access from the computer labs or from home
- Possibility to use either the labs local computers or the server

Prerequisites:
- A JupyterHub instance, configured as above, accessible from the teachers and students;
- A forge such as gitlab or github, accessible from JupyterHub
- A shared drive service (e.g. next cloud/nsf/...), serving home directories,
  and letting teachers setup shared volumes
- A shared authentication (e.g. SSO), so that notebook servers in JupyterHub can access
  the shared drive.
- Some web server

Procedure for the teacher(s):
- Set up a shared volume for the whole class
- Prepare a computing environment in a git repository on the forge
  Typically includes: computational software, [nbgrader] + configuration, ...
- Prepare the course material typically in a git repository on the forge
  (the same one or another)
- Use JupyterHub's form UI to setup (and test) a full description of the student's
  notebook servers, with mounting of the home directory (or subdirectory thereof?) and shared volume.
  Possibly add the teacher(s) as collaborator(s) ???
  Get the corresponding URL.
- Possibly prepare a variant thereof for teachers of the class.
- Set up a web page for the class, with hyperlink(s) to the above URL
  There can typically be an hyperlink for each session pointing directly
  to the exercises for that particular session.

Fetching the class material:
- Option 1: manually download from the web (wget in the terminal, or web upload, ...) or shared volume
- Option 2: use [nbgitpuller](https://github.com/data-8/nbgitpuller) from the command line
- Option 3: use [nbgrader](https://github.com/jupyter/nbgrader), either from the command line or with the UI to get the files from the shared volume
- Option 4: automatize the above using a notebook server extension such as that for nbgitpuller

Submitting assignments:
- Use nbgrader, either from the command line or with the UI to push the files to the shared volume

To explore: integration with local e-learning platforms like Moodle,
typically using [LTI](https://www.imsglobal.org/activity/learning-tools-interoperability),
in particular for class management and grades reporting.
There already exists an [LTI authenticator for Jupyter](https://github.com/jupyterhub/ltiauthenticator).

# Security concerns

A malicious image description, image, or collaborator can:

- Take any action within the image being built or within the notebook server

- Waste computing resources (cpu/memory);

- With internet: connect to any website, without specific priviledges
  (e.g. participate to a DOS attack); abuse computing resources, e.g.
  for bitcoining. The image building almost certainly needs internet
  access.

- With persistent storage and internet access: access and leak
  information from the storage; e.g. private information from the user;

- With read-write persistent storage: corrupt the storage (e.g. the user's home directory)

- With credentials: take any action on behalf of the user in any
  service that use the same authentication..

# Implementation status

Most of the features are already there. Here are some of the missing steps:

- Extending binder's form as described above;

- Implementing the logic to mount shared volumes;

- Instructions / scripts for setting up a local docker registry;

  The current Binder installation tutorial assumes that a docker
  registry is already available; e.g. that provided by google cloud
  services.

  For a smaller setup using the same host for both building images and
  running notebook servers, no docker registry is needed. In this
  case, JupyterHub could just run repo2docker locally before launching
  the notebook server. repo2docker however does not implement image
  caching; so a simplified version of the image cache mechanism of
  Binder needs to be implemented.

# Alternatives

It should be noted that there is basically no coupling between
JupyterHub/Binder and Jupyter. The former is merely a general purpose
web service for provisioning web-based virtual environments. For
example, JupyterHub/Binder has also been used to serve R-Studio based
virtual environments. Reciprocally, there are alternative services to
do such provisioning from which to get inspiration, like
[Simulagora](https://www.simulagora.com/).

# Advanced features & open questions

## Redirection

The main form could contain an additional item:

- URL input / dropdown menu to choose another jupyterhub instances to
  redirect to.

Use cases:

-   A user finds a nice image on binder; he wants to customize it to
    run it on his institution's jupyterhub; possibly adding persistent
    storage to it. Or reciprocally: a user wants to share on binder a
    local image of his.

-   An institution wants to advertise other jupyterhub instances; this
    could e.g. be used by a single entry point for federating a
    collection of instances (e.g. all French academic JupyterHub's).

## Marketplace of images

With the URL mechanism, any (power) user can prepare a dedicated image
and share it with his collaborators. Images can be more or less
specific: from just a computing environment to a fully specified
machine, with mount points, ...

Thanks to the above there is no need for a tightly coupled Marketplace.
Nevertheless it may be useful to have one location (or more) for
collecting and publicizing links to popular images. Some minimal
coupling may be needed if one would want to sort the images according
to their popularity.

Note: at this stage, a user cannot produce an image by setting up a
machine "by hand" and save its state. The construction must be fully
scripted. On the plus side, this encourages users to script their
images, making them more reproducible.

## Default volume configuration

- Choose good defaults, if at all possible compatible with binder.
  Main question: where should the files provided by the binder
  environment be copied? In a subdirectory of the persistent home? In
  the home directory, with the persistent home being mounted in a
  subdirectory thereof?

## Intensive use and resource management / accounting

The above has been written with casual use in mind. For extensive use,
some form of accounting of the resources used would be needed. For
example, for LAL's cloud we may want to have some form of bridge
between the OpenStack dashboard and the hub. UI to be designed. Could
the user provision a machine using the dashboard, and then specify on
JupyterHub that the container shall be run on that machine?
