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
  * 1 Oct -- 31 July ?? please check ??
  * Author of gfan library used by Singular
  * Work on parallelism, esp. in Singular
  * Work on block Wiedermann implementation
  * has obtained permanent job in ??Denmark??

* Alex Best, research engineer
  * 1 Feb -- 31 July
  * Writing assembly superotimiser for MPIR
  * has obtained PhD. position in Boston

--

* Alexander Kruppa, postdoc
  * 1 Aug -- 31 Jan
  * AVX support in MPIR
  * Use superoptimiser to speed up modern processor support in MPIR

---
## Achievements

* Attended kickoff meeting

---
## Main upcoming tasks and deliverables

* [D 5.5 Write an assembly superoptimiser supporting AVX and upcoming Intel processor extensions for the MPIR library and optimise MPIR for modern processors](https://github.com/OpenDreamKit/OpenDreamKit/issues/118)
  * Due month 18
  * Alex 1 has used the asmjit library to write an assembly superoptimiser supporting AVX [1]
  * The superoptimiser is now working on many of the architectures we have access to and can be used to optimise MPIR asm code
  * Have been working closely with a new MPIR contributor, Jens Nurmann, who has been writing new Skylake assembly code and also updating code for older two and three port processors (he now has access to the superoptimiser and is using it)
  * Have been validating the superoptimiser on Piledriver and a new Haswell machine purchased by Uni KL
  * Have developed a possible strategy to extend superoptimiser to Windows ABI
  * First version of MPIR addmul_1 function written using new mulx instruction provided by Intel explicitly for bignum arithmetic
  * Alex 2 will write new assembly code for modern processors (esp. AVX) and superoptimise it
  * Project is exactly on schedule

--
* [D5.6: Parallelise the relation sieving component of the Quadratic Sieve and implement a parallel version of Block-Wiederman linear algebra over GF2 and the triple large prime variant](https://github.com/OpenDreamKit/OpenDreamKit/issues/119)
  * Due month 18
  * Anders Jensen (with some help from Alex Best) has written a Block-Wiedermann implementation
  * BW implementation has been timed and seems extremely fast on single core
  * Have investigated making the BW implementation parallel (requires some work in M4RI library)
  * Parallel BW implementation is exactly on schedule
  * relation sieving component is straightforward and expected to be delivered on time
  * triple large prime variant implementation has not begun (other than a single large prime implementation mostly finished shortly before the project began), however William Hart will be hired 25% on ODK project from Jul 1st to ensure this is delivered on time
--
* [D 5.13 Parallelise the Singular sparse polynomial multiplication algorithms and provide parallel versions of the Singular sparse polynomial division and GCD algorithms.](https://github.com/OpenDreamKit/OpenDreamKit/issues/111)
  * Due month 48
  * The above are example deliverables only (we will delivers these in addition to other parallel/Singular HPC projects)
  * We have been gaining experience with thread level parallelism and SIMD
  * Anders has implemented a number of threaded and SIMD projects to be made available in Singular
  * Anders has written papers on the above implementations **TODO** insert Anders' list here
  * has been some cross-fertilisation with D5.6

[1] https://github.com/alexjbest/ajs/

</section>
