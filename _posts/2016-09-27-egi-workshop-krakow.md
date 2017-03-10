---
layout: slides
title: "OpenDreamKit: Cloud needs and uses"
type: talk
theme: white
transition: none
author: Dima Pasechnik
date: 2016/09/27
fulldate: 27 September 2016
location: -- [EGI](https://www.egi.eu/) workshop [Design your e-infrastructure](https://indico.egi.eu/indico/event/3025/), co-located with [DI4R](http://digitalinfrastructures.eu/)
redirect_from: "/activities/2016-09-27-egi-workshop-krakow/"
tags:
    - talk
    - cloud
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{page.title}}

{{page.author}}

{{page.fulldate}}

{{page.location}}

---
## OpenDreamKit - background

***Open Digital Research Environment Toolkit***

***for the Advancement of Mathematics*** :
[OpenDreamKit.org](OpenDreamKit.org)

- [Horizon 2020](https://ec.europa.eu/programmes/horizon2020/)
  **Work Programme**: [European Research Infrastructures](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures)

  **Call**: Virtual Research Environments (VREs)

- **Budget**: 7.6 M€, 2015-2019 (and beyond?)

- **Consortium**: [15 sites, 50 participants](http://opendreamkit.org/partners)

  Belgium, France, Germany,  Norway, Poland, UK (mostly university and government labs)

--
## OpenDreamKit - background

- Objective: build a VRE for pure and applied mathematics from an ecosystem of **open source** mathematical software systems (cf. Matlab/Mathematica/Maple...)

- In particular:

  - technical aspects (distribution, HPC, testing ...)
  - interactive environments based on **Python** (**Jupyter** notebook, [SageMathCloud (SMC)](http://cloud.sagemath.com) ...)
  - mostly based around [SageMath](http://sagemath.org), a Python library and computer algebra system, several hundred active devs, 500Mb codebase - Python, Cython, C/C++, Fortran, Lisp,...

--
## OpenDreamKit - background

- timeline: development started in 2006, ongoing

- continuous testing using a network of patch/build-bots (in-house design)

- some use of cloud resources (Google Compute Engine used by SMC, some use of Microsoft Azure), no (real) experience with EGI, EUDAT, GEANT, etc...

---
## OpenDreamKit - users

- interactive maths/CS books (about 10 published), online courses, maths databases

- used in research (pure and applied maths, CS), tens of thousands active users, running local installs, part small (10-100) mult-user systems, SMC (20000+ users), SageCell

- most current users are undergraduate students taking courses

- research users - line between users and devs is blurred (and this is good!)

---
##  OpenDreamKit - current status

- existing components:

  - web(browser)-based frontends (Jupyter notebooks (and kernels), SageMath
notebooks, SMC notebooks, )

  - backends: SageMath and other systems (e.g. Anaconda); distributed as source, binary installs (wheels)

  - online databases, such as [LMFDB](http://www.lmfdb.org/) (number-theoretic objects),...

  - SMC service (run by a commercial company on Google Compute Engine, although completely with GPL software)

  - development and testing frameworks

--
##  OpenDreamKit - current status

- under development

  - docker (and other?) containers for backends

  - SMC installs made user-friendly

  - semantic-aware interfaces between systems

- how e-infrastructures can help

  - more integration, better testing/development plaforms?

  - running SMC and similar services on federated clouds?

See our [Proposed use cases](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP3/2016-09-27-DesignYourInfrastructureWorkshop-UseCase.md)

---
##  OpenDreamKit - workshop plans

- to get an idea how federated clouds may be useful for us

- start on using some of it?

- social nets, can they help us?


---
# More reading

- [On OpenDreamKit's open and collaborative proposal writing](http://opendreamkit.org/2015/01/31/open-proposal-writing/)

- The [developer's perspective](/about-developers) on OpenDreamKit.

- [About OpenDreamKit](/about)
</section>
