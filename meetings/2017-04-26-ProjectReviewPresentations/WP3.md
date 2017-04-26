---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Luca De Feo
period: 1st reporting period
wp: 3
---

<style>.reveal div { font-size: 36px } .reveal h3 { margin-top: 2ex; margin-bottom: 1ex; }</style>
<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
## Component architecture

### Components

- **User interfaces**: Jupyter, SageMathCloud;
- **Systems**: GAP, PARI/GP, SageMath, Singular;
- **Software libraries**: LinBox, MPIR, ...;
- **Modules**, **packages**, ...;
- **Databases**: LMFDB, MathHub, ....

How do we want them? **Flexible**, **Portable**, **Modular**, 
**Open**.

--
### Goals

- **Flexible.** Enable components to be *flexibly combined*;
- **Portable.** Enable components *run smoothly* across a wide range
  of environments (e.g., cloud, local, server, ...);
- **Modular.** Develop, demonstrate, standardize APIs;
- **Open.** Streamline user/developer workflows.

--
### Examples

- *SageMath's elliptic curves* module calls *C functions in PARI/GP*
  library.
- Import *data from LMFDB* at the *GAP command line*.
- Run commands on *remote Singular server* from a *GAP client* through
  *MMT mediator*.
- Deploy *SageMath virtual machines* on Windows machines in *Microsoft
  Azure cloud*.
- Deploy a computational mathematics software stack on a *HPC
  cluster*, controlled through *Jupyter notebooks*.

--
### Inputs

- **WP4 →** User interface components;
- **WP5 →** HPC-enabled components;
- **WP6 →** Interface languages, ontologies;
- **WP7 →** User behaviour.

### Outputs

- Network protocol implementations **→ WP4, WP6**;
- Tools, infrastructure (for testing, bug reporting, packaging, distributing) **→ WP7**;
- Micromagnetic components **→ WP4**.

---
## Tasks

### T3.1, Portability

- (mostly) Windows;
- Testing, continuous integration.

### T3.2, Interfaces between systems

- Application level interfaces;
- Network protocols.

**Delivered:** D3.3, SCSCP support.

--
### T3.3, Modularisation and packaging

- Virtual machines, containers;
- Packaging and distributing user code;
- Packaging for popular repositories (Debian, Anaconda, ...).

**Delivered:** D3.1, Virtual images and containers.

### T3.4, Simulagora integration

- Commercial VRE, showcasing OpenDreamKit components.
- Interest for the project: measure effort needed to produce a
  Debian-based VM.

*Note​:* Internal task, no public output.

--
### T3.6, Document and modularise SageMathCloud's codebase

- Collaboration on the *open source software* powering the commercial
  service SageMathCloud.
- Share technologies, know-how.

**Delivered:** D3.2, Understand and docuement SageMathCloud backend

### T3.7, Improving the development workflow in mathematical software

- Experiments with improving user/developer experience in VREs;
- Integration into SageMathCloud.

--
### T3.8, Python interface for OOMMF micromagnetic simulation library

- See H. Fanghor's talk.
- Completed!

*Note:* no deliverables in this WP.

### T3.5, Component architecture for High Performance Computing and Parallelism

- Experiment: integrate outputs of WP5 into SageMath;

*Note:* Only starts in month 36.

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
- PARI/GP, SageMath, Singular, ...
  <https://hub.docker.com/u/sagemath/>.

Based on modern and popular technologies: Ansible, Docker, Vagrant,
VirtualBox.

**Partners involved:** JacobsUni, UPSud, USouthampton, USTAN, UVersailles.

--
### {{ delivs[1] }}

**Output:** *Published
  [documentation on the internals of SageMathCloud](https://github.com/sagemathinc/smc/tree/master/src/doc/design_overview)*

- Part of a planned interaction with SageMathCloud (SMC).
- Development cycles in SMC are very short, architecture, technologies
  change quickly.
- ODK benefits from keeping track of SMC internal details.
- SMC benefits from publishing better documentation.

**Partners involved:** UPSud.

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

**Partners involved:**  CNRS, JacobsUni, USTAN, UVSQ.

--

### GAP

- OpenMath language implementation: <https://gap-packages.github.io/openmath/>;
- SCSCP implementation: <https://gap-packages.github.io/scscp/>.

Adds SCSCP support to: *GAP, Singular*

### MathHub

- OpenMath language implementation;
- SCSCP implementation: <https://mathhub.info/>.

--
### Python

- OpenMath language implementation: <https://pypi.python.org/pypi/openmath>;
- SCSCP implementation: <https://pypi.python.org/pypi/scscp>.

Adds SCSCP support to: *Python, LMFDB, SageMath, PARI/GP* (via D4.10)


---
## Achievements

- Two workshops on *modularization and packaging*, great occasion to
  interact with the community:
  - Sage Days 77, March 2016, Cernay (France);
  - Sage Days 85, March 2017, Cernay (France).

- Interactions with other work packages: WP4, WP6.

- OOMMF task (Python interface to OOMMF) completed. See H. Fanghor
  talk.

---
## Upcoming work

Four deliverables due on month 24:

- D3.4: *Single user* SageMathCloud.
- D3.5: Integration between SageMathCloud and Trac (SageMath bug
  tracking system).
- D3.6: Open package repository for SageMath.
- D3.7: One-click install SageMath distribution for Windows.

--
### D3.4: Single user SageMathCloud

**Good news!**

Already done by SMC developers, will re-allocate efforts.

### D3.5: Integration between SageMathCloud and Trac

Ongoing discussions with SMC developers.

### D3.6: Open package repository for SageMath

Current plan is to provide *cookiecutter* templates for hosting
packages on PyPI (most popular Python package repository).

--
### D3.7: One-click install SageMath distribution for Windows.

This deliverable is mostly done:

- Erik Bray (UPsud) has already completed a one-click install
  distribution for Windows based on Docker (not original plan, but
  important milestone).
- The latest version of SageMath compiles on Cygwin!

---
## Longer term

- **Packaging:** With help from the community, SageMath will be in the
  next Debian (Linux) release. More than 24 months ahead of schedule!

- **Packaging (bis):** experimental *Conda* packages for SageMath and
  components are being made, with the help of the community. This is
  not a planned deliverable, but it would be a pity to miss this
  opportunity.

- **GAP/SageMath Interface:** experimental work started in
January 2016. First prototype complete.


</section>


