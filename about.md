---
layout: page
title: About
---

{% include intro.md %}


The project involves about 50 people spread over 15 sites
in Europe, with a total budget of about 7.6 million euros. The largest
portion of that will be devoted to employing an average of 11
researchers and developers working full time on the
project. Additionally, the participants will contribute the equivalent
of six other people working full time.

## Proposal

- [PDF Proposal](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/Proposal/proposal-www.pdf)

The above pdf is the officially submitted one, up to the fixing of a
couple unfortunate typos we noticed since then, and some refactoring
of the deliverable during the negotiation phase with the EU. For a
specific list of tasks, see Section 3.1.6, Work Package
Descriptions. For budget details, see Section 3.4, Resources to be
committed.

### Abstract of the project

OpenDreamKit will deliver a flexible toolkit enabling research groups to
set up Virtual Research Environments, customised to meet the varied
needs of research projects in pure mathematics and applications, and
supporting the full research life-cycle from exploration, through proof
and publication, to archival and sharing of data and code.

OpenDreamKit will be built out of a sustainable ecosystem of
community-developed open software, databases, and services, including
popular tools such as LinBox, MPIR, Sage(sagemath.org), GAP, PariGP,
LMFDB, and Singular. We will extend the Jupyter Notebook environment to
provide a flexible UI. By improving and unifying existing building
blocks, OpenDreamKit will maximise both sustainability and impact, with
beneficiaries extending to scientific computing, physics, chemistry,
biology and more, and including researchers, teachers, and industrial
practitioners.

We will define a novel component-based VRE architecture and adapt
existing mathematical software, databases, and UI components to work
well within it on varied platforms. Interfaces to standard HPC and grid
services will be built in. Our architecture will be informed by recent
research into the sociology of mathematical collaboration, so as to
properly support actual research practice. The ease of set up,
adaptability and global impact will be demonstrated in a variety of
demonstrator VREs.

We will ourselves study the social challenges associated with
large-scale open source code development and publications based on
executable documents, to ensure sustainability.

OpenDreamKit will be conducted by a Europe-wide steered by demand
collaboration, including leading mathematicians, computational
researchers, and software developers with a long track record of
delivering innovative open source software solutions for their
respective communities. All produced code and tools will be open source.

### Motivations

This proposal grew out of a reflection on the needs of the (pure)
mathematics community in terms of computational software and databases.
The highly successful development in the last decades of systems such as
[GAP](http://www.gap-system.org/), [LinBox](http://www.linalg.org/),
[LMFDB](lmfdb.org), [PARI](http://pari.math.u-bordeaux.fr/),
[Sage](www.sagemath.org), or [Singular](http://www.singular.uni-kl.de/),
has proven the viability and power of collaborative open source
development models, by users and for users, even for delivering general
purpose systems targeting a large public (researchers, teachers,
engineers, amateurs, ...).

Yet some critical long term investments, in particular on the technical
side, are in order to boost the productivity and lower the entry
barrier:

-   Streamline access, distribution, portability on a wide range of
    platforms, including High Performance Computers or cloud services.
-   Improve user interfaces, in particular in the promising area of
    collaborative workspaces as those provided by
    [SageMathCloud](http://cloud.sagemath.org).
-   Lower barriers between research communities and promote
    dissemination. For example make it easy for a specialist of
    scientific computing to use tools from pure mathematics, and
    reciprocally.
-   Bring together the developers communities to promote tighter
    collaboration and symbiosis, accelerate joint development, and share
    best practices.
-   Outsource as much of the development as possible to larger
    communities to focus the work forces on their core specialty: the
    implementation of mathematical algorithms and databases.

Many people in the community have been working really hard on the
above items but lack crucially manpower or funding; the purpose is to
supply them with such.

The European H2020 call [EINFRA-9: e-Infrastructure for Virtual Research
Environment](http://ec.europa.eu/research/participants/portal/desktop/en/opportunities/h2020/topics/2144-einfra-9-2015.html)
was a natural fit: putting the emphasis on Virtual Research
Environments nicely wraps up all the above needs in a single aim.

A great opportunity is the rapid emergence of key technologies, and in
particular the [Jupyter](jupyter.org) (previously
[IPython](ipython.org)) platform for interactive and exploratory
computing which targets all areas of science.

We built the consortium by gathering core European developers of the
aforementioned systems for pure mathematics, and reaching toward the
numerical community, and in particular the Jupyter community, to work
together on joint needs.

By definition this project will be mostly funding actions in Europe;
however those actions will be carried out, as usual, in close
collaborations with the worldwide community.

### Working plan for the project 

We have set various [objectives and tasks](https://github.com/OpenDreamKit/OpenDreamKit/issues?page=1&q=is%3Aopen+is%3Aissue). The 9 objectives must be reached thanks to tasks, tasks themselves divided into 7 workpackages. The various tasks are considered accomplished after the deliverable related to it is edited and/or published:  

OBJECTIVES

1 - Develop and standardise math soft and data for VRE
-  [WP3](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP3) , [WP4](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP4), [WP5](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP5), [WP6](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP6)

2 - Develop core VRE components
 -  [WP3](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP3) , [WP4](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP4), [WP5](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP5), [WP6](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP6)

3 - Bring together communities
- [WP2](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP2), [WP3](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP3)

4 - Update a range of softwares
-  [WP3](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP3), [WP5](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP5)

5 - Foster a sustainable ecosystem
-  [WP3](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP3) , [WP4](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP4), [WP5](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP5), [WP6](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP6)

6 - Explore social aspects
-  [WP7](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP7)

7 - Identify and extend ontologies
- [WP6](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP6)

8 - Effectiveness of the VRE
-  [WP2](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP2), [WP7](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP7)

9 - Effective dissemination
-  [WP2](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP2), [WP7](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP7)
    
Nb: [Work Package 1 is devoted to management, coordination and communication](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP1)

