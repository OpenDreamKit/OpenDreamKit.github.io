---
layout: activity
title: "JupyterDay: discover the tools available in the Jupyter environment"
author: Benoît PILORGET
type: blogpost
date: 2016/11/04
---
#SUBSCRIPTIONS ARE CLOSED

The LoOPS network, DevLog and OpenDreamKit are organising a day for the various tools available in the [Jupyter environment](http://jupyter.org/).
Notebooks are more and more used among research communities thanks to their ease of use and their interactivity. They allow
an easy access to class documentation and appealing practical exercises for students, to share ideas between colleagues and
to initiate a reflexion to allow reproducible research works.

- Where: Room 1-2-3 of the [Institut d'Astrophysique Spatiale](http://www.ias.u-psud.fr/), Orsay, France
- When: 6th of December 2016
- Who: four core developers of Jupyter tools will be present (S. Corlay, A, Darian, T. Kluyver, B. Ragan-Kelley) and V. Pons who is working on SageMathCloud.
- Event organisation: Loïc Gouarin 

[Subscriptions](https://indico.lal.in2p3.fr/event/3319/registration/register#/register) are free but mandatory. Most of
talks and workshops will be given in English. You may need to bring your own training materials, in which case we will
warn you in advance.


## Agenda:

- 9h15-9h45: Welcome
- 9h45-12h45 Presentations
  - A. Darian et S. Corlay : JupyterLab and third-party extensions, featuring ipywidgets: the next generation of Jupyter notebooks.
  - B. Ragan-Kelley : JupyterHub: Deploying Jupyter Notebooks for students and researchers.
  - B. Ragan-Kelley : nbdime: diffing and merging notebooks.
  - V. Pons : the SageMathCloud platform

- 12h45-14h00 Buffet
- 14h00-14h30 T. Kluyver: Nbconvert: make things from notebooks
- 14h30-17h30 Workshops run in parallel


## Presentations:
1) A. Darian et S. Corlay : JupyterLab and third-party extensions, featuring ipywidgets: the next generation of Jupyter notebooks

This talk will consist of an architectural overview and the current state of affairs of the new JupyterLab and ipywidgets.
It will feature demos of the master branch of these projects, reflecting the latest developments
     
2) B. Ragan-Kelley : JupyterHub: Deploying Jupyter Notebooks for students and researchers

Since the Jupyter notebook is a web-based environment, the notebook server can be run remotely, not just on your local
machine. JupyterHub is a multi-user server, aimed at helping research groups and instructors host notebook servers for
their users or students. By default, JupyterHub uses the local system users and PAM authentication, but it can be
customized to use any authentication system, including GitHub, CILogon, Shibboleth, and more. The way single-user
servers are spawned can also be customized to use services such as Docker, Kubernetes, or HPC cluster queuing systems.
The tutorial will cover a basic deployment of JupyterHub on a single machine, then extending it to use docker and GitHub
authentication, as well as general best practices for JupyterHub deployment.
     
3) B. Ragan-Kelley : nbdime: diffing and merging notebooks

Jupyter notebooks are JSON documents containing a combination of code, prose, and output. These outputs may be rich
media, such as HTML or images. The use of JSON and including output can present challenges when working with version
control systems and code review. The JSON structure significantly impedes the readability of diffs, and simple line-based
merge tools can produce invalid results. nbdime aims to provide diff and merge tools specifically for notebooks. For diffs,
nbdime shows rendered diffs of notebooks, so that the content can be compared efficiently, rather than the raw JSON. Merges
performed with nbdime will guarantee a valid notebook as a result, even in the event of conflicts. nbdime integrates with
existing tools, such as git, so you shouldn't need to change how you work.
     
4) V. Pons : the SageMathCloud platform

We will present the open-source interactive platform SageMathCloud and its many useful aspects for research collaboration
and teaching:

- creation of a collaborative project;
- sharing files and worksheets;
- using Jupyter in SageMathCloud;
- multi-user real time editing;
- course management with Jupyter and SageMathCloud
     
5) T. Kluyver : Nbconvert: make things from notebooks

Nbconvert is a set of tools to convert notebooks to other file types, such as HTML,
Latex, or executable scripts. We'll cover how to use it at the command line and in the
notebook interface, along with an overview of how it works. Nbconvert is also designed to be highly extensible,
and we'll describe some of the things that can be done by building on nbconvert, such as extra converters, reports
based on input, and cross-linking between converted notebooks.
