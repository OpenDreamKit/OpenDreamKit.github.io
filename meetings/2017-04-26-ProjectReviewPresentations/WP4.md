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

- Notebook interfaces
- Interactive documentation
- Applications of notebooks, widgets

---
## OpenDreamKit VRE Architecture

TODO: architecture diagram

```
User → JupyterHub | SMC → Jupyter → Sage → GAP, PARI, etc.
    |→ MathHub
                         |----------- Docker ------→
```

---
## Background: Jupyter Notebooks

Document format containing code, prose, maths, output

<img src="../wp4-notebook.png", style="height: 50vh;">


---
## Background: Jupyter Notebooks

Web-based interactive computing environment

<img src="../jupyter-diagram.png", style="height: 50vh;">

Language-agnostic protocol for computation

---
## Background: JupyterHub

<img src="../jupyterhub-diagram.png", style="height: 50vh;">

---
## Background: tmpnb

<img src="../tmpnb-diagram.png", style="height: 40vh;">

Also: mybinder.org, SageMathCloud, more


---
## Notebook Interfaces

- Implement Jupyter kernels **Delivered: D4.4**
- Unify notebooks (Sage/Jupyter) **Delivered: D4.5**
- Improve notebook collaboration
   - High latency (diff & merge) **Delivered: D4.6**
   - Real-time (GDocs-style, already in SageMathCloud)
- Notebook validation **Delivered: D4.8**

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
## Highlight: Reproducible notebooks

New package: **nbdime**: improve keeping notebooks in version control (**D4.6**)

<img src="../nbdiff-web.png", style="height: 40vh;">


---
## Highlight: Reproducible notebooks

New package: **nbval**: testing and validating notebooks (**D4.8**)

<img src="../nbval.png", style="height: 40vh;">

---
## Interactive Documentation

- Active Documentation with Notebooks
- Application for discovering and displaying documentation
- Active Document Hub/Portal (MathHub) **Delivered: D4.3, D4.9**
- Structured documents (books, articles)

---
## Highlight: Active Documents

MathHub.info is a portal for active mathematical documents

Enables versioned, collaborative editing via GitLab

<img src="../mathhub-architecture.png", style="height: 40vh;">

---
## Highlight: Active Documents

**D4.9** in-place computation added to MathHub.info

<img src="../compman.png", style="height: 40vh;">

---
## Applications

- Explore web-based 3D-vis in notebooks
- Fluid Dynamics notebook vis
- Micromagnetics:
   - Notebook examples
   - VRE for micromagnetics non-notebook web application

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

- Interactive 3D visualization in notebooks
- Workshop on live structured documents

</section>


