---
layout: slides
title: "Progress report for CNRS"
theme: white
transition: none
author: Vincent Delecroix
period: Reporting period from Sept. 2015 to February 2017
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}

{{ page.period }}

---

## Financial and administrative setup

- Everything on rails: money arrived, first expenses done,
  we were even allowed to use some of the overhead.

- Going back and forth between laboratory administration and
  CNRS is a bit of a nightmare. But with patience, things
  get done.

---
## Hiring

- **Vincent Klein** from march 1st 2017
  - Former engineer at Bordeaux
  - Will work on packaging, Sage architecture and combinatorics

- **Sébastien Labbé** was recruited as a CNRS Chargé de Recherche
  and will become part of the ODK team in Bordeaux

---
## Achievements

- T2.5 Sage school during DIMACOS school in Alger (Nov 2015)

- T2.3 [PARI/GP days in Grenoble (Jan 2016)](http://pari.math.u-bordeaux.fr/Events/PARI2016/)

- T2.5 [Sage day in Monastir (Mar 2016)](http://www.edsf.fss.rnu.tn/Colloque1/colloque3.html)

- T2.5 [Sage days 73 in Oaxaca (May 2016)](http://wiki.sagemath.org/days73)

- WP5 [50 Sage tickets](https://trac.sagemath.org/query?author=~Vincent+Delecroix&or&author=~Adrien+Boussicault&max=500&col=id&col=summary&col=status&col=milestone&col=component&desc=1&order=milestone) about algebra, arithmetic, combinatorics and core functionalities.

- [PARI/GP port in javascript](http://pari.math.u-bordeaux.fr/gp.html) including graphics!

- Pari ateliers
  - [2016 in Grenoble](http://pari.math.u-bordeaux.fr/Events/PARI2016/)
  - [2017 in Lyon](http://pari.math.u-bordeaux.fr/Events/PARI2017/)

- PARI/GP releases, see http://pari.math.u-bordeaux.fr/timeline.html. The last stable release 2.9.1 (Dec 1 2016) includes includes the achievment of [D5.10 generic parallelisation engine for PARI](https://github.com/OpenDreamKit/OpenDreamKit/issues/108)

- Progress on [cypari2](https://github.com/defeo/cypari2): now installs as a Python library with both Python2 and Python3

---
## Main upcoming tasks and deliverables

- [T5.6: HPC infrastructure for combinatorics](https://github.com/OpenDreamKit/OpenDreamKit/issues/104)
  We already have a prototype for the C library. And two functions got already
  included in PARI/GP (iteration over permutations and subsets).

- [workshop on polytopes](https://wiki.sagemath.org/days84)

</section>
