---
layout: slides
title: "Progress report for Logilab"
theme: white
transition: none
author: Jérôme Benoît, Florent Cayré, Julien Cristau, David Douard, Serge Guelton
period: Reporting period from September 2015 to February 2017
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}


{{ page.period }}

---

## Financial and administrative setup

- Everything OK
- Expenses: mainly salaries, a bit for workshop participations (Kick-off meeting, Sage days 77, Bremen, Edinburgh)

---

## Achievements (1/2)

- T3.1 Pythran [port to Windows](http://pythonhosted.org/pythran/#windows)
  and [Conda integration](http://pythonhosted.org/pythran/#using-conda)

- T5.7 Pythran type inference improvements - Aliasing analysis

  See http://serge-sans-paille.github.io/pythran-stories/identifier-binding-computation.html

- T5.4 Make Pythran typing better to improve information error

  See http://serge-sans-paille.github.io/pythran-stories/from-pythran-import-typing.html

---

## Achievements (2/2)

- T4.6 A first version of an active SageMath documentation using Jupyter
  notebook via [Thebe.js](https://github.com/oreillymedia/thebe) was
  integrated into SageMath 7.4

- T4.8 SciviJS 3D mesh visualization components based on three.js with
  basic jupyter integration

  See https://www.logilab.org/blogentry/8541176

- T3.3 Debian packaging of SageMath should make it into upcoming stable release

  See https://wiki.debian.org/DebianScience/Sage

---

## Main upcoming tasks and deliverables

- T4.6 Find the best future-proof alternative to Thebe.js and use it
  to improve SageMath active documentation

  https://github.com/jupyterlab/services might be the right candidate

- T4.8 Improved Jupyter integration of SciviJS, add plugins, see if
  K3D or vispy can be used alongside SciviJS

- T3.4 Deploy upgraded Simulagora images with SageMath installed using
  Debian packages

</section>
