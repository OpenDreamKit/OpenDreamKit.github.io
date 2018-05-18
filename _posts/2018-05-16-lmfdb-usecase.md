---
layout: post
author: Michael Kohlhase
title: "Mixing Data and Computation to explore mathematical data sets: Knowledge to the rescue with LMFDB + SageMath + Pari + MitM"
tags:
    - use-case
    - open-science
    - dksbases
    - LMFDB
    - sagemath
    - pari-gp
    - math-in-the-middle
---

Exploring mathematical data sets often requires both data base operations and
 computation: mathematical data bases like [LMFDB](http://lmfdb.org), the
 [OEIS](http://oeis.org), or [FindStat](http://findstat.org) are conceptually condensed
 tabulations of prior computations that can be searched over for completeness.

The use case described here is about Modular Forms, a class of objects of immense
importance in number theory and cryptography.

In a nutshell: The LMFDB contains many individual instances of several kinds of modular
forms (which are the “MF” in the [LMFDB](http://lmfdb.org)). Each of these objects has
associated to it an algebraic number field called its Hecke field. A mathematically
interesting project is to study these Hecke fields for the modular forms in each
collection, collecting data about them such as their degree or class number (see the next
section for definitions) and investigating how these are distributed. Being able to access
this LMFDB data directly from within a package with the ability to carry out its own
computations with number fields would be a useful application.

To conduct this research, we need a tight two-ways integration between the
[LMFDB](http://lmfdb.org) and computational systems like [SageMath](ttp://sagemath.org) or
[Pari](https://pari.math.u-bordeaux.fr/). But as the [LMFDB](http://lmfdb.org), SageMath
and PARI are separate systems, designed with differing application areas and constraints
in mind, this integration is non-trivial on several levels. This is where the
[Math-in-the-Middle Paradigm](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/MACIS17-interop/crc.pdf)
comes to the rescue.

[ ![The MitM Paradigm Connection Graph](/public/images/use-cases-lmfdb-mitm.png){:class="img-responsive"} ](/public/images/use-cases-lmfdb-mitm.png)

Systems (A, ..., H in the image) are connected via formal representations their APIs 
(data types and functions), which are in turn related to a central (system-independent)
mathematical ontology: the
[Math-in-the-Middle Ontology](https://mathhub.info/#/content/ODK). In the OpenDreamKit
implementation of the MitM Paradigm, the system APIs and the MitM Ontology are implemented
as [OMDoc/MMT theory graphs](http://uniformal.github.io).

At the system level, SageMath (or PARI) and LMFDB are connected via a MitM Mediator, which
receives requests from SageMath (in terms of the SageMath API), translates them to the
LMFDB API via their relations to the MitM Ontology, and back. 

[ ![The MitM Paradigm Mediator Architecture](/public/images/use-cases-lmfdb-mediator.png){:class="img-responsive"} ](/public/images/use-cases-lmfdb-mediator.png)

In essence, the knowledge about the connections between the system API theories and the
MitM Ontology acts as semantic glue between the systems. 

John Cremona and David Lowry-Duda wrote up a [detailed mathematical use case](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/usecase-notes/UseCaseHecke.pdf) for integrating LMFDB with SageMath and/or Pari/GP via the [virtual theories in MMT](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/MACIS17-vt/crc.pdf) and the Math-in-the-Middle Paradigm.

Based on this document, work on fully realizing this use case is ongoing; the next steps
are:
1. the [KWARC group](http://kwarc.info) at [FAU](http://fau.de) work on the virtual
   theories for the tables involved in collaboration with the LMFDB group at Warwick.
2. the UPSud group extends the SAGE interface theories to  cover the necessary interface functions. 
3. we (together) make sure that the Math-in-the-Middle ontology has the necessary theories
(at least as stubs) and alignments.

