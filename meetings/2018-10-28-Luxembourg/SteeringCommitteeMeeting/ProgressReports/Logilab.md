---
layout: page
title: "Progress report for Logilab"
theme: white
transition: none
author: Olivier Cayrol
period: Reporting period from March 2017 to October 2018
---

# {{ page.title }}

{{ page.author }}


{{ page.period }}

---

## Finance and administration

* underspending for travel by planning on using the budget to do more work

---
## Hiring

* Julian Rüth that works on SageMath packaging and continuous integration.

---
## Achievements

Publication of a new version of the Pythran library that allows to
compile Python code into HPC-optimized high performance code. See
[Toward a simpler and faster Pythran compiler](http://serge-sans-paille.github.io/pythran-stories/toward-a-simpler-and-faster-pythran-compiler.html)

Publication of a new version of the SciViJS library for
post-processing and visualizing 3D datasets with a full javascript
library that can be used inside or outside Jupyter notebooks. This
version can use post-processing plugins written in javascript or in
C++ compiled with WebAssembly. See [Scivijs](https://hg.logilab.org/review/scivijs)

New version of simulagora.com virtual research environment that allows
users to prepare customized virtual machines embedding a set of softwares
and to deploy "tools" that can be described as micro web applications
that require very little development skills to set up, but make it easy
to make available complex simulations to users.

Packaging of SageMath 8.2 and 8.3 in Conda, Debian and Docker. Setting up a
continuous integration process to ease the packaging of new versions.

--
## Work in progress

Study of the impact of the use of the Pythran compiler inside SageMath
and SciPy where computational algorithms might benefit from a
HPC-optimized code.

Integration of Pythran into Cython in order to use Pythran optimized
code for some computational operations (NumPy or standard library).

JupyterLab extension for interacting with a set of training exercises.

Library for exporting code samples from Sphinx documents into a set of
Jupyter notebooks and for integrating back the code outputs computed
by Jupyter into the Sphinx documents.


---
## Workshops and dissemination activities

Participation to ODK's [Workshop on live structured
documents](https://github.com/OpenDreamKit/OpenDreamKit/issues/211)
October 16-20 of 2017, Oslo

Participation to ODK's [Workshop on interfacing (math) software
with low level libraries](https://github.com/OpenDreamKit/OpenDreamKit/issues/251)
April 30-May 4 of 2018, Cernay

Comic strips illustrating the ODK use cases.

