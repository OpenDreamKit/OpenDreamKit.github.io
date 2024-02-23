---
layout: page
title: "Kickoff meeting: brainstorms and coding sprints"
---

# WP1: Coordination and Management

## Management structure

Time: Wednesday: 7pm
Participants: John, Nicolas, Michael, Steve, Wolfram, Eugenia...

[Notes](../management_structure)

## Plans

Some informal discussions occurred on the:

- Data Management Plan
- Innovation Management Plan
- Risk Management and Quality Insurance Plan

## Infrastructure and collaborative tools for OpenDreamKit

Time: Thursday over lunch

[Notes](../infrastructure)

## Communication

Time: Thursday afternoon's coffee break, Saturday
Participants: Luca, Nicolas, John, ...

- [Desired features for the website](https://github.com/OpenDreamKit/OpenDreamKit.github.io/issues/18)
- Logo

# WP3: Component architecture

## Consistent docker containers for all software components

Time: Friday, Saturday
Participants: Olexandr, Nicolas, Sebastian

[Notes](../docker).

## Continuous integration, building on various architecture, joint testing farm

Time: Thursday afternoon's break

Participants: Jeroen, Olexandr, Jean-Pierre

We discussed approaches to regression testing used in GAP and SageMath development and our continuous integration infrastructure.

# WP4: User Interfaces

## Jupyter kernels for all interactive computation software

Time: Thursday evening, ...
Participants: Marcin, Sebastian, Min, Olexandr, Markus, Jeroen, ...

Min gave a presentation on the Jupyter notebook's architecture and how
to write kernels. Markus, Sebastian and Jeroen started to implement
kernels for GAP, Singular, and PARI/GP respectively.

Other kernels to explore would include Linbox+CLING and XCAS.

## Brainstorm about structured documents

Time: Friday
Participants: Florent Cayré, Min, Florent Hivert, Nicolas

## Brainstorm about notebooks and reproducibility

Konrad's kind visit triggered an inspiring discussion on his blog about
[notebooks and reproducibility](https://khinsen.wordpress.com/2015/09/03/beyond-jupyter-whats-in-a-notebook/). As another source of inspiration on this topic, here is a link
to Konrad's article about ActivePapers and the rationale behind
[ActivePapers: a platform for publishing and archiving computer-aided research](http://dx.doi.org/10.12688/f1000research.5773.3)

## Brainstorm about 3D Visualization

Time: Thursday late afternoon
Participants: Florent Cayré, Marcin Kostkur

USilesia has started building a javascript library for static and
dynamic (i.e. communication with python objects as ipywidgets do) data
visualization in the Jupyter notebook. The project will deliver a
first version in December 2015. It will be based on threejs.

In the meantime Logilab will do technology review done for alternative
rendering solution. We mentioned using webgl natively, vispy, and
paraview.

# WP5: HPC

TODO (@ClementPernet): short report

Time: ...
Participants: ...

The following short presentations were given:

- Pythran (Serge Guelton: done)
- Parallel computing in Giac & XCas (Frédéric Han)
- MAGMA: Numerical Matrix Algebra on GPU and Multicore Architectures
  linear algebra (Marc Baboulin, on Thursday)
- ...

# WP6: Data, Knowledge and Software bases.

Time: Friday morning
Participants: Michael, Steve, Sebastian, Florian, Florent, Florent, Nicolas, ...

TODO (@kohlhase): short report

- Semantic interfaces
- discussions about the category systems in GAP, Sage, CAP, proof systems, ...
