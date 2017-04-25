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

## User Interfaces for OpenDreamKit

Goal: Provide unified interfaces for OpenDreamKit VREs

Three main areas of work:

- Notebook interfaces
- Interactive documentation
- Applications of notebooks


---
## Background: Jupyter Notebooks

Document with  code, prose, maths, visualisation

<img src="../wp4-notebook.png", style="height: 55vh;">


---
## Background: Jupyter Notebooks

Web-based interactive computing environment

<img src="../jupyter-diagram.png", style="height: 340px;">

Language-agnostic protocol for computation

---
## Background: JupyterHub

Extensible VRE built around Jupyter

<img src="../jupyterhub-diagram.png", style="height: 50vh;">

---
## Background: tmpnb

VRE for anonymous, ephemeral environments

<img src="../tmpnb-diagram.png", style="height: 40vh;">

Also: mybinder.org, SageMathCloud, more


---
## Notebook Interfaces

T4.1: Uniform notebook interface for all interactive components

- Jupyter kernels for ODK components **Delivered: D4.4**
- Unify Sage/Jupyter notebooks for sustainability **Delivered: D4.5**

T4.12: Python/Cython bindings for PARI

- Implemented and integrated into Sage **Delivered: D4.1**

---
## Highlight: ODK component integration

Jupyter kernels for GAP, PARI/GP, Sage, Singular (**D4.4**)

<img src="../pari-jupyter.png", style="height: 40vh;">

--
## Highlight: ODK component integration

- Collaboration between Sage & Jupyter on interactive widgets
- Migration tools for Sage → Jupyter notebooks


<img src="../interact-jupyter.png", style="height: 35vh;">

---
## Notebook Interfaces

T4.2: Notebook improvements for collaboration

 - High latency (diff & merge) **Delivered: D4.6**
 - Real-time (GDocs-style, already in SageMathCloud)
 
T4.3: Reproducible notebooks
 
- Notebook validation for reproducibility **Delivered: D4.8**

---
## Highlight: Notebook collaboration

New package: **nbdime**: improve keeping notebooks in version control (**D4.6**)

<img src="../nbdiff-web.png", style="height: 40vh;">


---
## Highlight: Reproducible notebooks

New package: **nbval**: testing and validating notebooks (**D4.8**)

<img src="../nbval.png", style="height: 40vh;">

---
## Interactive Documentation

T4.4 Refactor Sage's Sphinx documentation system

Sage's documentation system has been greatly improved in collaboration
with the Sage developer community **Delivered: D4.13**

---
## Interactive Documentation

T4.6: Structured Documents

- Report on active documents state of the art **Delivered: D4.2**
- In-place computation of active documents **Delivered: D4.9**

T4.7: Active Documents Portal

- Active Documentation with Notebooks
- Application for discovering and displaying documentation
- Active Document Hub/Portal (MathHub)
  - Collaboratie, versioned  editing **Delivered: D4.3**


---
## Highlight: Active Documents

MathHub.info is a portal for active mathematical documents

Enables versioned, collaborative editing via GitLab (**D4.3**)

<img src="../mathhub-architecture.png", style="height: 40vh;">

---
## Highlight: Active Documents

in-place computation added to MathHub.info (**D4.9**)

<img src="../compman.png", style="height: 40vh;">

---
## Applications

- 3D visualisation in notebooks (T4.8)
- Fluid dynamics notebook visualisation (T4.9)
- Micromagnetics:
   - Notebook examples (T4.11, T4.13)
   - VRE for micromagnetics non-notebook web application (T4.14)

---
## Highlight: Micromagnetics VRE

JOOMMF: Interactive Micromagnetic simulation in Jupyter

<img src="../joommf-screenshot.png", style="height: 50vh;">

---
## Deliverables

{% include deliverables_slides.html %}

{{ delivs | size }} deliverables were submitted.

{% assign delivs_first = delivs | slice: 0, 4 %}
{% assign delivs_second = delivs | slice: 4, 8 %}

{% for d in delivs_first %}
- {{ d }}
{% endfor %}

--
## Deliverables

{% for d in delivs_second %}
- {{ d }}
{% endfor %}


---
## Upcoming work

- Interactive 3D visualisation in notebooks (T4.8)
- Workshop on live structured documents (T4.6)
- Micromagnetics applications

</section>


