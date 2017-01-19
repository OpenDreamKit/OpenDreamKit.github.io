---
layout: slides
title: "Progress report for Kaiserslautern"
theme: white
transition: none
author: Wolfram Decker
period: Reporting period from Sept. 2015 to February 2017
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}


{{ page.period }}

---

## Financial and administrative setup

* **TODO** Christoph/Thomas?

---
## Hiring

* Anders Jensen, postdoc
  * 1 Oct  -- 31 July
  * Author of gfan library used by Singular
  * Work on parallelism, esp. in Singular
  * Work on block Wiedermann implementation
  * has obtained permanent job in Denmark

* William Hart, postdoc 25%
   * 1 July 2016 -- 28 Feb 2017
   * Maintainer of Flint library used by Singular
   * Work on quadratic sieve 
   * polynomial arithmetic
   * Parallelise FFT
   
* Alex Best, research engineer
  * 1 Feb -- 31 July
  * Writing assembly superotimiser for MPIR
  * has obtained PhD. position in Boston

* Alexander Kruppa, postdoc
  * 1 Aug -- 31 Jan
  * AVX support in MPIR
  * Use superoptimiser to speed up modern processor support in MPIR

--

 * Currently doing paperwork to appoint someone for ODK full time for 2.5 years
 
---
## Achievements

* Attended kickoff meeting

---
## Main upcoming tasks and deliverables

* [D 5.5 Write an assembly superoptimiser supporting AVX and upcoming Intel processor extensions for the MPIR library and optimise MPIR for modern processors](https://github.com/OpenDreamKit/OpenDreamKit/issues/118)
  * Due month 18
  * Alex 1 has used the asmjit library to write an assembly superoptimiser supporting AVX [1]
  * The superoptimiser is now working on many of the architectures we have access to and can be used to optimise MPIR asm code
  * Major timing issues have now been fixed, superoptimiser is usable (caused 3--4 month delay!!)
  * Have been working closely with a new MPIR contributor, Jens Nurmann, who has been writing new Skylake assembly code and also updating code for older two and three port processors (he now has access to the superoptimiser and is using it)
  * Alex 2 has been using superoptimiser on a new Haswell machine purchased by Uni KL, basic assembly superoptisation now done
  * Alex 2 has been using superoptimiser on his personal Skylake machine, basic assembly superoptimisation now done
  * Alex 2 been using superoptimiser on Bulldozer machine supplied by William Stein, basic assembly superoptimisation now done
  * Code is now faster than GMP for some operations, equal to GMP for others, still a lot of room for future improvements
  * Brian Gladman (MPIR contributor) has been updating assembly code for Windows ABI
  * Extensive use of new mulx instruction provided by Intel explicitly for bignum arithmetic
  * Expect to deliver nominal deliverables on schedule
--
* [D5.6: Parallelise the relation sieving component of the Quadratic Sieve and implement a parallel version of Block-Wiederman linear algebra over GF2 and large prime variants](https://github.com/OpenDreamKit/OpenDreamKit/issues/119)
  * Due month 18
  * Anders Jensen (with some help from Alex Best) has written a Block-Wiedermann implementation
  * BW implementation has been timed and seems extremely fast on single core
  * Pthreads slows down the code in the region of interest (ok for number field sieve, but not quadratic sieve)
  * using M4RI for SIMD parallelism speeds it up, but M4RI is an unwanted dependency (future work to remove this dependency)
  * have figured out how to parallelise relation sieving in new quadratic sieve, not done yet
  * single large prime variant implemented, with Carrier-Wagstaff method and Bradford-Monagan-Percival method for polynomial generation
  * strategy more than competitive for 170 bits and above, terrible for less than 170 bits, up to 1000x too slow
  * new sieve code is already merged into Flint trunk and is usable today (yay!!)
  * future work will be to use the Pari/GP strategy for polynomial generation for small factorisations
  * auxilliary factoring algorithms for double large prime variant done prior to ODK, graph theoretical component not done
--
* [D5.7: Take advantage of multiple cores in the matrix Fourier Algorithm component of the FFT for integer and polynomial arithmetic, and include assembly primitives for SIMD processor instructions (e.g. AVX), especially in the FFT butterflies]
  * We had overlooked this deliverable at the last review
  * Alex is making the SIMD support for FFT butterflies a priority right now!!
  * Parallelising the MFA is not done, though the code was originally written with this in mind
--
* [D 5.13 Parallelise the Singular sparse polynomial multiplication algorithms and provide parallel versions of the Singular sparse polynomial division and GCD algorithms.](https://github.com/OpenDreamKit/OpenDreamKit/issues/111)
  * Due month 48
  * The above are example deliverables only (we will delivers these in addition to other parallel/Singular HPC projects)
  * Anders has implemented a number of threaded and SIMD projects to be made available in Singular
  * Anders has written papers on the above implementations
  * William has written high level implementations of Johnson multivariate multiplication and low level implementation over Z
  * William has written low level implementation of "big array method" for multivariate multiplication
  * Timings faster than any known open source, general purpose library for sparse and dense problems, including giac, hundreds of times faster than Singular
  * William has written high level implementations of Monagan-Pearce multivariate exact division, divrem by a polynomial and an ideal, much faster than Singular
  * William has written high level implementation of pseudodivision algorithm inspired by unpublished, publicly available work of Monagan-Pearce, much faster than Singular
  * William has written high level implementation of multivariate subresultant GCD algorithm, already faster than Singular/Factory for large degree polynomials
  * No parallelisation work done yet, but all algorithms can be parallelised with pthreads, this is non-trivial
--
* [D4.4: Basic Jupyter interface for GAP, Pari/GP, Sage, Singular]
  * Sebastian Gutsche has contributed to this
  * Jupyter-Singular interface is now working
  
[1] https://github.com/alexjbest/ajs/

[2] https://github.com/wbhart/flint2/tree/fmpz_mpoly/fmpz_mpoly

[3] https://github.com/wbhart/flint2/tree/trunk/qsieve

[4] https://github.com/wbhart/Nemo.jl/tree/mpoly

[5] https://github.com/akruppa/MPIR_functions

[6] https://github.com/akruppa/mpir/tree/master/mpn/x86_64/haswell

[7] https://github.com/akruppa/mpir/tree/master/mpn/x86_64/skylake

[8] https://github.com/akruppa/mpir/tree/master/mpn/x86_64/bulldozer

</section>
