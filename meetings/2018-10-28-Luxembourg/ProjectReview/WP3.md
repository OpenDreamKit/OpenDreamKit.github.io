---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Luca De Feo
period: 2nd reporting period
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
- **WP7 →** User behaviour???

### Outputs

- Network protocol implementations **→ WP4, WP6**;
- Tools, infrastructure (for testing, bug reporting, packaging, distributing) **→ WP7**??
- Micromagnetic components **→ WP4**.

---
## Tasks

### T3.1, Portability

**Delivered:**
- D3.7, SageMath Windows installer;
- D3.8, Testing, continuous integration.

### T3.3, Modularisation and packaging

- Virtual machines, containers;
- Packaging and distributing user code;
- Packaging for popular repositories (Debian, Ubuntu, Conda, ...);
- VRE deployments (see KPIs).

--

### T3.4, Simulagora integration

- Commercial VRE, showcasing OpenDreamKit components.
- Interest for the project: measure effort needed to produce a
  Debian-based VM.

*Note​:* Internal task, no public output.

### T3.7, Improving the development workflow in mathematical software

- Experiments with improving user/developer experience in VREs;
- Lowering the entry barrier to contribute to open source software.

**Delivered:** D3.5, online editing Sage documentation

--

### T3.2, Interfaces between systems

- Application level interfaces;
- Network protocols;
- SCSCP support.

*Note:* All completed in RP1, all subsequent work moved to WP6.

--

### T3.5, Component architecture for High Performance Computing and Parallelism

- Experiment: integrate outputs of WP5 into SageMath;

*Note:* Only starts in month 36.

### T3.8, Python interface for OOMMF micromagnetic simulation library

Completed.

---
## Deliverables

{% comment %}
The include below gets the finished deliverables of the work pakacge and put the list in "delivs"
{% endcomment %}

{% include deliverables_slides.html %}

3 deliverables were submitted.

{% for d in delivs %}
- {{ d }}
{% endfor %}

--
### {{ delivs[4] }}

**Output:** *Workflows for easily contribute to SageMath source code*

- Automated doc builds via pull requests (GitHub, GitLab).
- Demo?

**Partners involved:** UPSud

--
### {{ delivs[6] }}

**Output:** SageMath Windows installer

- Native SageMath on Windows, via Cygwin.

**Partners involved:** UPSud.

--
### {{ delivs[7] }}

**Output:** *Continuous integration/testing best practices*

Document on CI used in ODK projects:

- GitLab CI (SageMath)
- Travis (GAP, CySignlas, ...)
- Jenkins (GAP)

**Partners involved:**  Logilab, UPSud, UStAn

---
## Upcoming work

2 deliverables due on month 48:

- D3.10: Packaging components and user-contributed code for major
  Linux distributions;
- D3.11: HPC enabled SageMath distribution.

--
### D3.10: Packaging

This is already achieved for:

- Debian, Ubuntu, Arch, (and more...)
- Experimental Conda packages for SageMath (J. Rueth)... other systems?

Risks:

- Python 2 is ending in 2020. Ongoing effort to prepare SageMath for
  Python 3.

--

### D3.11: HPC enabled SageMath distribution.

Clement??

---

## Achievements + KPIs

- ??

</section>


