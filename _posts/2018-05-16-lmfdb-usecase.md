---
layout: post
author: Michael Kohlhase
title: Use case for an MitM-based Integration of LMFDB with Sage/PariGP 
tags:
   - use-case
   - open-science
   - dksbases
   - LMFDB
   - sagemath
   - pari-gp
   - math-in-the-middle
---

John Cremona and David Lowry wrote up a [detailed mathematical use case](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/usecase-notes/UseCaseHecke.pdf) for integrating LMFDB with SageMath and/or Pari/GP via the [virtual theories in MMT](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/MACIS17-vt/crc.pdf) and the Math-in-the-Middle Paradigm.

In a nutshell: The LMFDB contains many individual instances of several kinds of modular forms (which are the “MF” in “LMFDB”). Each of these objects has associated to it an algebraic number field called its Hecke field. A mathematically interesting project is to study these Hecke fields for the modular forms in each collection, collecting data about them such as their degree or class number (see the next section for definitions) and investigating how these are distributed. Being able to access this LMFDB data directly from within a package with the ability to carry out its own computations with number fields would be a useful application.
