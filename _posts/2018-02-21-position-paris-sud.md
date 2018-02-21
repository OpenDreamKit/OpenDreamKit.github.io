---
layout: post

author: Paris-Sud
title: Research Software Engineer position opening at Université Paris-Sud
tags:
    - job-opening
---

This is an announcement for a research software engineer position
opening at Université Paris-Sud, working on web-based user interfaces
and semantic interoperability layers for mathematical computational
systems and databases.

# Time line

Interviews in early Spring 2018 for a recruitment as soon as possible.

# Salary

For a full-time position, and depending on the applicant's past
experience, between 2000€ and 3000€ of monthly "salaire net" (salary
after non-wage labour cost but before income tax). Equivalently, what
this salary represents for is a "salaire brut" of up to 46200€ yearly.

At this stage, we have secured funding for at least 9 months of
full-time salary. We hope to be able to extend this up to the end of
the project (August 2019). Part time positions are negotiable.

# Location

The research software engineer will work at the
[Laboratoire de Recherche en Informatique](http://www.lri.fr) of
[Université Paris Sud](http://www.u-psud.fr), in the
Orsay-Bures-Gif-Saclay campus, 25 km South-West of Paris city centre.

# Mission and activities

Paris Sud is the leading site of OpenDreamKit, with eight participants
involved in all the work packages. The research software engineer will
join that team and support its efforts in WP4 and WP6, targeting
respectively Jupyter-based user interfaces and interoperability for
mathematical computational systems and databases. A common theme is how
to best exploit the mathematical knowledge embedded in the systems.
For some context, see e.g. the [recent
publications](http://opendreamkit.org/2017/10/15/WP6-Usecase/) describing
the Math-In-The-Middle approach.

More specifically, a successful candidate will be expected to
contribute significantly to some of the following tasks (see also
[OpenDreamKit's Proposal](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/Proposal/proposal-www.pdf):

- Dynamic documentation and exploration system (Task 4.5)

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

  - D4.16: Exploratory support for semantic-aware interactive Jupyter widgets
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

- Memoisation and production of new data (Task 6.9)

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

- Knowledge-based code infrastructure (Task 6.5)

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

# Skills and background requirements

- Degree in mathematics or computer science; PhD appreciated but not required;

- Strong programming experience with languages such as Python, Scala,
  Javascript, etc; experience with web technologies in general and the
  [Jupyter](http://jupyter.org/) stack in particular appreciated;

- Experience in software design and practical implementation in large
  software projects; experience with computational mathematics
  software (e.g. [SageMath](http://sagemath.org)) appreciated;

- Experience in open-source development (collaborative development
  tools, interaction with the community, ...);

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

Within this ecosystem, the applicant will work primarily on the free
open-source mathematics software system
[Sagemath](http://sagemath.org). Based on the
[Python](http://www.python.org) language and many existing open-source
math libraries, SageMath is developed since 10 years by a worldwide
community of 300 researchers, teachers and engineers, and has reached
1.5M lines of code.

The applicant will work within one of the largest teams of SageMath
developers, composed essentially of researchers in mathematics and
computer science, at the [Laboratoire de Recherche en
Informatique](http://www.lri.fr/) (LRI) and in nearby institutions.
The LRI also hosts a strong team working on proof systems.

# Applications

To apply for this position, please send an e-mail to
upsud-recruitement-research-engineer at opendreamkit.org
by March 15, with the following documents (in English) attached:

- cover_letter.pdf: a cover letter explaining your interest in this particular position;

- CV.pdf: a CV, highlighting among other things your skills and
  background and your contributions to open source software;

- degree.pdf: copy of your most recent degree including (if
  applicable) the reviewers reports;

- reference letters: files reference_letter_<contactname>.pdf or contact information of potential referees.

Applications sent after March 15 will be considered until the
position is filled.
