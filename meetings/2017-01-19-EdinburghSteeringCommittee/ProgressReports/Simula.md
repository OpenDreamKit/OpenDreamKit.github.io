---
layout: slides
title: "Progress report for Simula"
theme: white
transition: none
author: Martin Alnæs, Min RK, Vidar Tonaas Fauske
period: Reporting period from Sept. 2015 to February 2017
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}

{{ page.period }}

---
## People involved
-   Vidar Tonaas Fauske, Postdoctoral Fellow
    - 100%, May 1st 2016 - May 1st 2018
-   Min Ragan-Kelley, Postdoctoral Fellow
    - 20%, WP4 lead
-   Martin Sandve Alnæs, Senior Research Engineer, Site leader
    - ~0% Q1 2017, ~100% from April 1st 2017

---
## Deliverables completed

- [D4.6: Tools for collaborating on notebooks via version-control](https://github.com/OpenDreamKit/OpenDreamKit/issues/95)
  - [nbdime](https://github.com/jupyter/nbdime) has been released as a Jupyter project
  - implements diff and merge of Jupyter notebooks
  - web GUI for diff display and merge conflict resolution
  - integrates with git as a driver and/or mergetool

---
## Deliverables due in February 2017

- [D4.8: Facilities for running notebooks as verification tests](https://github.com/OpenDreamKit/OpenDreamKit/issues/98)
  - adding improvements to the already functional [nbval](https://github.com/computationalmodelling/nbval/)
  - reusing functionality from nbdime in nbval
  - this will be the main focus from Simula until end of February, mainly by Vidar Fauske

---
## Deliverables due in August 2017

- [D4.12: Jupyter extension for 3D visualisation](https://github.com/OpenDreamKit/OpenDreamKit/issues/86)
- Some existing work (first two by OpenDreamKit partners):
  - [SciviJS](https://demo.logilab.fr/SciviJS/) by Martin Renou at LogiLab (ODK)
  - [K3D-Jupyter](https://github.com/K3D-tools/K3D-jupyter) by Marcin Kostur at U. Silesia (ODK)
  - [a three.js backend for 3d plotting in SageMath](https://trac.sagemath.org/ticket/12402)
  - [Jupyter support in mayavi](https://github.com/enthought/mayavi/pull/415)
  - [pythreejs is a Python/ThreeJS bridge utilizing the Jupyter widget infrastructure](https://github.com/jovyan/pythreejs)
  - [FEniCS has x3dom plotting in Jupyter notebooks](http://nbviewer.jupyter.org/github/garth-wells/fenics-x3dom/blob/master/DOLFIN_X3DOM.ipynb)
- Simula will focus on this after the nbval deliverable:
  we need to communicate with other involved parties now and decide where to place our efforts.

</section>
