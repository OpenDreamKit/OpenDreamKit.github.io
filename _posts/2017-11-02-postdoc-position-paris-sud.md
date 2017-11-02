---
layout: disabled

author: Paris-Sud
title: post doc position opening at Université Paris-Sud
tags:
    - job-opening
---

This is an announcement for a postdoc position opening at Université
Paris-Sud, working on the interplay between Data, Knowledge, and
Software in Mathematics, and in particular the exploitation of
mathematical knowledge for increased interoperability across
computational mathematics software and mathematical databases.

# Time line

Interviews in early december, for a recruitment from early 2018 to
Fall 2019. Since we have a strong candidate for a half time position,
we will also consider candidates interested in a half-time or shorter
duration position.

A second full-time developer will be hired later on, presumably in Fall 2016.

# Salary

Depending on the applicant's past experience, between 2000€ and 3000€
of monthly "salaire net" (salary after non-wage labour cost but before
income tax). Equivalently, this is a "salaire brut" of up to 46200€
yearly, or a "salaire brut chargé" (total cost for the project) of up
to 5500€ monthly.

# Location

The postdoc will work at the
[Laboratoire de Recherche en Informatique](http://www.lri.fr) of
[Université Paris Sud](http://www.u-psud.fr), in the
Orsay-Bures-Gif-Saclay campus, 25 km South-West of Paris city centre.

# Mission and activities

OpenDreamKit's Work Package 6 explores the interplay between Data,
Knowledge and Software in Mathematics. In particular, it aims at
exploiting mathematical knowledge for increased interoperability
across computational mathematics software and mathematical databases
(known as the Math-In-The-Middle approach). See e.g. the [recent
publications](http://127.0.0.1:4000/2017/10/15/WP6-Usecase/) on that
topic, and Section 3.1.6 ``Workpackage Description'' of the
[OpenDreamKit
Proposal](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/Proposal/proposal-www.pdf).

A successful candidate will be expected to do significant progress, in
close collaboration with the other OpenDreamKit participants and the
community, on some of the tasks of this Work Package:

- D6.8: Currated Math-in-the-Middle Ontology and Alignments for GAP /
  Sage / LMFDB

- T6.5: Knowledge-based code infrastructure

  Over the last decades, computational components, and in particular
  Axiom, MuPAD, \GAP, or \Sage, have embedded more and more
  mathematical knowledge directly inside the code, as a way to better
  structure it for expressiveness, flexibility, composability,
  documentation, and robustness. In this task we will review the
  various approaches taken in these software (e.g. categories and
  dynamic class hierarchies) and in proof assistants like Coq
  (e.g. static type systems), and compare their respective strength
  and weaknesses on concrete case studies. We will also explore
  whether paradigms offered by recent programming languages like Julia
  or Scala could enable a better implementation. Based on this we will
  suggest and experiment with design improvements, and explore
  challenges such as the compilation, verification, or
  interoperability of such code.

The candidate will be welcome to work on closely related though more
technical tasks:

- T4.5: Dynamic documentation and exploration system

  Introspection has become a critical tool in interactive computation,
  allowing user to explore, on the fly, the properties and
  capabilities of the objects under manipulation. This challenge
  becomes particularly acute in systems like Sage where large parts of
  the class hierarchy is built dynamically, and static documentation
  builders like Sphinx cannot anymore render all the available
  information.

  In this task, we will investigate how to further enhance the user
  experience. This will include:

  - On the fly generation of Javadoc style documentation, through
    introspection, allowing e.g. the exploration of the class
    hierarchy, available methods, etc.

  - Widgets based on the HTML5 and web component standards to display
    graphical views of the results of SPARQL queries, as well as populating data
    structures with the results of such queries,

  - D4.16: Exploratory support for semantic-aware interactive widgets
    providing views on objects of the underlying computational or
    database components. Preliminary steps are demonstrated in the
    [Larch Environment](http://www.larchenvironment.com/) project (see
    demo videos) and
    [sage-explorer](https://github.com/jbandlow/sage-explorer). The
    ultimate aim would be to automatically generate LMFDB-style
    interfaces.

  Whenever possible, those features will be implemented generically
  for any computation kernel by extending the Jupyter protocol with
  introspection and documentation queries.

- T6.9: Memoisation and production of new data

  Many CAS users run large and intensive computations, for which they
  want to collect the results while simultaneously working on software
  improvements. GAP retains computed attribute values of objects
  within a session; Sage currently has a limited `cached_method`.
  Neither offers storage that is persistent across sessions or
  supports publication of the result or sharing within a
  collaboration. We will use, extend and contribute back to, an
  appropriate established persistent memoisation infrastructure, such
  as `python-joblib`, `redis-simple-cache` or `dogpile.cache`, adding
  features needed for storage and use of results in mathematical
  research. We will design something that is simple to deploy and
  configure, and makes it easy to share results in a controlled
  manner, but provides enough assurance to enable the user to rely on
  the data, give proper credit to the original computation and rerun
  the computation if they want to.


# Skills and background requirements

- Strong experience in the design and practical implementation of
  mathematics software: computational mathematics software (e.g.
  [SageMath](http://sagemath.org)), knowledge management systems, or
  proof systems;

- PhD in mathematics or computer science;

- Experience in open-source development (collaborative development
  tools, interaction with the community, ...);

- Fluency in programming languages such as Scala, Python, Julia, etc
  appreciated;

- Strong communication skills;

- Fluency in oral and written English; speaking French is not a
  prerequisite.

# Context

The position will be funded by

[OpenDreamKit](http://opendreamkit.org), a
[Horizon 2020](https://ec.europa.eu/programmes/horizon2020/)
European [Research Infrastructure](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures)
project that will run for four years, starting from September
2015. This project brings together the open-source computational
mathematics ecosystem -- and in particular
[LinBox](http://linalg.org/),
[MPIR](http://mpir.org),
[SageMath](http://sagemath.org/),
[GAP](http://www.gap-system.org/),
[PARI/GP](http://pari.math.u-bordeaux.fr/),
[LMFDB](http://lmfdb.org/),
[Singular](http://www.singular.uni-kl.de/),
[MathHub](https://mathhub.info/),
and the
[IPython/Jupyter](http://jupyter.org/) interactive computing
environment.
-- toward building a
flexible toolkit for
[Virtual Research Environments](http://www.2020-horizon.com/e-Infrastructures-for-virtual-research-environments-%28VRE%29-i1490.html)
for mathematics. Lead by Université Paris-Sud, this project involves
about 50 people spread over 15 sites in Europe, with a total budget of
about 7.6 million euros.

Within this ecosystem, the developer will work primarily on the free
open-source mathematics software system
[Sagemath](http://sagemath.org). Based on the
[Python](http://www.python.org) language and many existing open-source
math libraries, SageMath is developed since 10 years by a worldwide
community of 300 researchers, teachers and engineers, and has reached
1.5M lines of code.

The developer will work within one of the largest teams of SageMath
developers, composed essentially of researchers in mathematics and
computer science, at the [Laboratoire de Recherche en
Informatique](http://www.lri.fr/) (LRI) and in nearby institutions.
The LRI also hosts a strong team working on proof systems.

# Applications

To apply for this position, please send an e-mail to Nicolas.Thiery at
u-psud.fr before December 1st, with the following documents attached:

- cover_letter.pdf: a cover letter, in English (why are you interested in this particular position);

- CV.pdf: a CV, highlighting among other things your skills and
  background and your contributions to open source software;

- phd_reports.pdf: PhD reports (when applicable);

- reference letters (each named reference_letter_<contactname>.pdf),
  or alternatively reference contact information.

Applications sent after December 1st will be considered until the
position is filled.
