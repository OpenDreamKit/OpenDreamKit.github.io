---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Luca De Feo
period: 1st reporting period
wp: 3
---

<style>.reveal div { font-size: 36px }</style>
<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
## Component architecture

### Types of components

- **Interfaces**: Jupyter, SageMathCloud;
- **Systems**: Gap, PARI/GP, SageMath, Singular;
- **Software libraries**: LinBox, MPIR, ...;
- **Modules**, **packages**, ...;
- **Databases**: LMFDB, MatHub, ....

--
### Goals

- Enable components to be *flexibly combined*;
- Enable components *run smoothly* across a wide range of environments
  (e.g., cloud, local, server, ...);
- Develop, demonstrate, standardize APIs;
- Streamline development workflows.

---

## Deliverables

{% comment %}
The include below gets the finished deliverables of the work pakacge and put the list in "delivs"
{% endcomment %}

{% include deliverables_slides.html %}

{{ delivs | size }} deliverables were submitted.

{% for d in delivs %}
- {{ d }}
{% endfor %}

--
### {{ delivs[0] }}

**Output:** *Virtual images and containers for most of the relevant components of
OpenDreamKit.*

- MathHub, <https://hub.docker.com/r/kwarc/>;
- GAP, <https://hub.docker.com/u/gapsystem/>;
- OOMMF <https://github.com/fangohr/virtualmicromagnetics>;
- SageMath, PARI/GP, Singular, ...
  <https://hub.docker.com/u/sagemath/>.

Based on modern and popular technologies: Ansible, Docker, Vagrant,
VirtualBox.

**Partners involved:** JacobsUni, UPSud, USouthampton, USTAN, UVersailles.

--
### {{ delivs[1] }}

**Output:** *Published
  [documentation on the internals of SageMathCloud](https://github.com/sagemathinc/smc/tree/master/src/doc/design_overview)*

- Part of a planned interaction with (commercial) open source software
  SageMathCloud (SMC).
- Development cycles in SMC are very short, architecture, technologies
  change quickly.
- ODK benefits from keeping track of SMC internal details.
- SMC benefits from publishing better documentation.

**Partners involved:** UPSud.

**Notes:** Delivered 12 months late, due to delayed recruitment.

--
### {{ delivs[2] }}

**Output:** *Implementations of SCSCP in GAP, Python, MMT/MathHub*

- SCSCP = *Symbolic Computation Software Composability Protocol*.
- Network protocol (XML-based) for *RPC* on *semantically annotated*
  mathematical data.
- Developed in EU FP6 project 026133 *SCIEnce*, standardized by the
  *OpenMath consortium*.
- Implementations already available in Java, C, C++. **This
  deliverable:** extend spectrum of available implementations.

**Partners involved:**  CNRS, JacobsUni, UGent, USTAN, UVSQ.

--

### Python

- OpenMath language implementation: <https://pypi.python.org/pypi/openmath>;
- SCSCP implementation: <https://pypi.python.org/pypi/scscp>.

Adds SCSCP support to: *Python, LMFDB, SageMath, PARI/GP* (via D4.10)

### GAP

- OpenMath language implementation: <https://gap-packages.github.io/openmath/>;
- SCSCP implementation: <https://gap-packages.github.io/scscp/>.

Adds SCSCP support to: *GAP, Singular*

--

### MathHub

- OpenMath language implementation: <https://??>;
- SCSCP implementation: <https://??>.

**Demonstration:** See ??

---
## Achievements

- Two workshops on *modularization and packaging*:
  - Sage Days 77, March 2016, Cernay (France);
  - Sage Days 85, March 2017, Cernay (France).

- Interactions with other work packages: WP4, WP6.

- OOMMFF?

- Simulagora?

---
## Upcoming work

Four deliverables due on month 24:

- D3.4: *Single user* SageMathCloud.
- D3.5: Inegration between SageMathCloud and Trac (SageMath bug
  tracking system).
- D3.6: Open package repository for SageMath.
- D3.7: One-click install SageMath distribution for Windows.

--
### D3.4: Single user SageMathCloud

**Good news!**

Already done by SMC developers, will to re-allocate efforts.

--
### D3.5: Inegration between SageMathCloud and Trac

Ongoing discussions with SMC developers.

--
### D3.6: Open package repository for SageMath

Current plan is to provide *cookiecutter* templates for hosting
packages on PyPI (most popular Python package repository).

--
### D3.7: One-click install SageMath distribution for Windows.

This deliverable is mostly done:

- Erik Bray (UPsud) has already completed a one-click install
  distribution for Windows based on Docker (not original plan, bur
  important milestone).
- The latest version of SageMath compiles on Cygwin!

---
## Longer term

- **Packaging:** SageMath 7.4 in next Debian release. More than 24
months ahead of schedule!

- **GAP/SageMath Interface:** experimental work started in
January 2016. First prototype complete.


</section>


