---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: B. Ragan-Kelley
period: 1st reporting period
wp: 4
---


<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">

### User Interfaces for OpenDreamKit

Goal: Provide unified interfaces for OpenDreamKit VREs

Main areas of work:

- Notebook interfaces
- Interactive documentation
- Applications of notebooks


---
### Background: Jupyter Notebooks

Document with  code, prose, maths, visualisation

<img src="../wp4-notebook.png", style="border: 1px solid #aaa;">


---
### Background: Jupyter Notebooks

Web-based interactive computing environment

<img src="../jupyter-diagram.png", style="height: 400px;">

Language-agnostic protocol for computation

---
### Background: JupyterHub

Extensible VRE built around Jupyter

<img src="../jupyterhub-diagram.png", style="height: 500px;">

---
### Background: tmpnb

VRE for anonymous, ephemeral environments

<img src="../tmpnb-diagram.png", style="height: 400px;">

Also: mybinder.org, SageMathCloud, more


---
## Notebook Interfaces

T4.1: Uniform notebook interface for all interactive components

- Jupyter kernels for ODK components **Delivered: D4.4**
- Unify SageMath/Jupyter notebooks for sustainability **Delivered: D4.5**

---
### Highlight: ODK component integration

- Migration tools for SageMath → Jupyter notebooks
- Collaboration with Jupyter on interactive widgets


<img src="../interact-jupyter.png", style="margin-top: -20px; border-right: 1px solid #aaa;">

---
### Highlight: ODK component integration

Jupyter kernels for GAP, PARI, SageMath, Singular (**D4.4**)

<img src="../pari-jupyter.png", style="border: 1px solid #aaa;">

---
### Highlight: PARI

T4.12: Python/Cython bindings for PARI

- Challenging project to separate Python PARI interface from SageMath due to deep integration
- Closed 50 tickets on SageMath

Results:

- New package `CyPari2` can be installed in a standard Python environment (**Delivered: D4.1**)
- New package `cysignals` used by CyPari2 and SageMath,
  already adopted by other Python wrappers of C libraries as a good example


---
## Notebook Interfaces

T4.2: Notebook improvements for collaboration

 - High latency (diff & merge) **Delivered: D4.6**
 - Real-time (GDocs-style, already in SageMathCloud)
 
T4.3: Reproducible notebooks
 
- Notebook validation for reproducibility **Delivered: D4.8**

---
### Highlight: Notebook collaboration

New package: **nbdime**: comparing notebooks (**D4.6**)

<img src="../nbdiff-before.png", style="max-width: 90%; border: 1px solid #aaa;">
<img src="../nbdiff-web.png", class="fragment" style=" border: 1px solid #aaa; margin-top: -1000px;">


---
### Highlight: Reproducible notebooks

New package: **nbval**: validating notebooks (**D4.8**)

<img src="../nbval.png", style="border: 1px solid #aaa;">

---
### Interactive Documentation

T4.4 Refactor SageMath's Sphinx documentation system

Significant progress towards sustainability of SageMath documentation
by refactoring to reduce the amount of custom software.

Highlights:

- Already improved Cython support in Sphinx documentation system itself


---
### Interactive Documentation

T4.6: Structured Documents

- Report on active documents state of the art **Delivered: D4.2**
- In-place computation of active documents **Delivered: D4.9**

T4.7: Active Documents Portal (MathHub)

- Collaborative, versioned  editing **Delivered: D4.3**
- Active Documents with Notebooks


---
### Highlight: Active Documents

MathHub.info portal for active mathematical documents

Versioned, collaborative editing via GitLab (**D4.3**)

<img src="../gitlab-edit.png", style="border: 1px solid #aaa;">

---
### Highlight: Active Documents

in-place computation added to MathHub.info (**D4.9**)

<img src="../compman.png", style="height: 55vh;">

---
## Applications

- 3D visualisation in notebooks (T4.8)
- Fluid dynamics notebook visualisation (T4.9)
- Micromagnetics:
   - Notebook examples (T4.11, T4.13)
   - VRE for micromagnetics non-notebook web application (T4.14)

---
### Highlight: Micromagnetics VRE

JOOMMF: Micromagnetic simulation in Jupyter

<img src="../joommf-screenshot.png", style="border: 1px solid #aaa;">


---
## Upcoming work

- Interactive 3D visualisation in notebooks (T4.8)
- Workshop on live structured documents (T4.6)
- Micromagnetics applications

</section>


