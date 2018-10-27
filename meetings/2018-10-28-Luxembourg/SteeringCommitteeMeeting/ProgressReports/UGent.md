---
layout: page
title: "Progress report for Ghent University"
theme: white
transition: none
author: Jeroen Demeyer
period: Reporting period from March 2017 to June 2018
---

# {{ page.title }}

{{ page.author }}

{{ page.period }}

---
## Finance and administration

- There is more than enough money available on the travel budget. Part of the
  reason is that some travels have been payed by other funding sources.

- It is not entirely clear whether the ODK personnel budget for UGent will be
  sufficient to pay Jeroen Demeyer until the end of the project.
  Certainly, a significant portion of the overhead will be needed for this.
  If that is not enough, some travel money might be transferred.
  Finally, Prof. De Medts guarantees to cover the gap with his personal budget.

---
## Hiring

- Starting 1 October 2017, Jeroen Demeyer has a 100% position instead of 40% before.
  This will run until the end of the project.

---
## Achievements

- Delivered [D4.7](https://github.com/OpenDreamKit/OpenDreamKit/issues/96):
  the Jupyter kernels for various mathematical programs have been finalized.
  These are installed on CoCalc and are available as optional packages for
  SageMath.

- Made it easy to use Sphinx to auto-generate documentation for Cython
  projects. The result of this is now used by several Cython projects
  such as
  [cysignals](http://cysignals.readthedocs.io/en/stable/),
  [cypari2](http://cypari2.readthedocs.io/en/stable/)
  and [fpylll](http://fpylll.readthedocs.io/en/latest/).
  This is part of [D4.13](https://github.com/OpenDreamKit/OpenDreamKit/issues/87).

- Several important contributions were made to the Cython project.
  While this is not a direct goal of ODK, it benefits many pieces of
  ODK which use Cython as programming language.
  The impact is not limited to ODK though, as Cython is used by
  a lot of scientific and other software.

- The SageMath distribution has been ported to various
  operating systems and processor architectures where it
  was not supported before.
  This fits in [T3.1](https://github.com/OpenDreamKit/OpenDreamKit/issues/50).

--
## Work in progress

- Major steps have been taken to port SageMath to Python 3.

- There is ongoing work in improving the cysignals and cypari2
  packages, which are spin-offs from SageMath.
  During the PARI/GP atelier in January 2018, some ideas were put
  forward to make cypari2 more efficient. This is work towards
  [D4.10](https://github.com/OpenDreamKit/OpenDreamKit/issues/84)

- Two Python Enhancement Proposals (PEPs) have been drafted:
  [PEP 579](https://www.python.org/dev/peps/pep-0579/) and
  [PEP 580](https://www.python.org/dev/peps/pep-0580/).
  These are proposals for changes to the official implementation
  of the Python language.
  They are about changing the inner workings of functions/methods
  implemented in C and are meant to improve the support of Cython functions.
  In particular, Cython functions would no longer have worse performance
  than built-in functions.
  There is still work to do for actually implementing PEP 580
  and getting it accepted.

---
## Workshops and dissemination activities

- Attended several OpenDreamKit workshops such as the first ODK review meeting,
  the PARI/GP atelier, the Jupyter widgets workshop and the workshop on low-level interfaces.

- Wrote [blogpost](http://opendreamkit.org/2017/06/09/CythonSphinx/)
  on how to generate documentation for Cython projects.

</section>
