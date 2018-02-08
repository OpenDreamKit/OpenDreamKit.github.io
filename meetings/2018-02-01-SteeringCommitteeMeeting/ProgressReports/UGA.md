---
layout: slides
title: "Progress report for UGA"
theme: white
transition: none
author: Clément Pernet
period: Reporting period from March 2017 to January 2018
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}

{{ page.period }}

---

## Finance and administration



---
## Hiring

* Hongguang Zhu, research engineer 100%
  * 1 September 2017 -- 30 August 2019
  * Formerly research assistant at Univ. of Sherbrooke, QC, Canada.
  * Working on distributed code for LinBox (D5.14)
---
## Achievements

* Releases of
  + givaro-4.0.3 and givaro-4.0.4:
    - improving build system,
    - autodetection of SIMD
    - micro-instruction,
    - enhancing robustness
  + fflas-ffpack-2.3.0, fflas-ffpack-2.3.1 and fflas-ffpack-2.3.2:
    - new code for exact symmetric triangular factorization, triangular inversion, parallel matrix-vector product, etc
    - improved build system
    - enhancing robustness
    - major cleanup
    - increased coverage of the test-suite
  + linbox-1.5.0 linbox-1.5.1 and linbox-1.5.2:
    - enhancing robustness
    - reworked polynomial interface
    - improving build system

* Integration of these latest releases in SageMath:
  + [https://trac.sagemath.org/ticket/24214]
  + fixing several long lasting bugs
  + speeding-up end-user routines: e.g. the characteristic polynomial of a dense matrix over a modular finite field.

* A new recursive algorithm for the symmetric indefinite triangular factorization revealing the rank profile matrix (article submitted and implementation available upstream in fflas-ffpack)

* New protocols for the probabilistic interractive certification of the signature, the determinant and the rank profile matrix (article at ISSAC'17, and extended version submitted to J. of Symbolic Computation).

--
## Work in progress
* In collaboration with V. Delecroix (CNRS partner)
  + Further exposition of LinBox routines in SageMath.
  + Consolidation and improvement of the rational system solver in LinBox

* MPI version of the Chinese remainder based rational solver
* DSL for exposing parallel features

---
## Workshops and dissemination activities

* LinBox development Days, Camaret sur Aigues, 13-15/12/2017

* 3 one-day online development meeting: March 31st, May 31st, Oct 4th

--
## Other



</section>
