---
layout: slides
title: "Progress report for Logilab"
theme: white
transition: none
author: Florent Cayré, David Douard, Julien Cristau
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}

---

## Financial and administrative setup

- Everything OK
- Expenses: mainly salaries, a bit for workshop participations (Kick-off meeting, Sage days 77, Bremen)

---

## Achievements (1/2)

- T3.1 Pythran port to Windows and Conda integration
  See http://pythonhosted.org/pythran/#windows and http://pythonhosted.org/pythran/#using-conda

- T5.7 Pythran type inference improvements - Aliasing analysis
  See http://serge-sans-paille.github.io/pythran-stories/identifier-binding-computation.html

---

## Achievements (2/2)

- T4.8 3D mesh visualization components based on X3DOM
  See http://yuanxiangfranck.github.io/x3dom-plugins-API/

- T3.3 Debian packaging of recent IPython and Jupyter

  [ipython 4.1](https://packages.qa.debian.org/i/ipython.html),
  [ipykernel 4.3](https://packages.qa.debian.org/i/ipykernel.html),
  [jupyter-core 4.1](https://packages.qa.debian.org/j/jupyter-core.html),
  [jupyter-client 4.2](https://packages.qa.debian.org/j/jupyter-client.html)

- T4.6 Active SAGE documentation prototype using Jupyter notebook via [Thebe.js](https://github.com/oreillymedia/thebe)
  See http://trac.sagemath.org/ticket/20690

---

## Main upcoming tasks and deliverables

- T4.8 Make the current 3D mesh visualizer work in Jupyter notebooks and extend its toolset to CFD/ electromagnetics

- T4.6 Have SAGE active Jupyter-based documentation improved and integrated into SAGE code base; contribute to Thebe.js

- T3.3 Package more and more SAGE components into Debian

</section>
