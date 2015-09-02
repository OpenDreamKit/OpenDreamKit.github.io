class: middle, center

# WP3 – Component Architecture

by [Luca De Feo](http://defeo.lu/)

Sep 2, 2015. [OpenDreamKit](http://opendreamkit.org) kickoff meeting.

<small>[view as a slideshow](https://gnab.github.io/remark/remarkise?url=https://raw.githubusercontent.com/OpenDreamKit/OpenDreamKit.github.io/master/meetings/2015-09-02-Kickoff/WorkPackages/WP3.md)</small>

---

# Components

- separate modules inside a unique software,
- separate softwares interacting through
  - library calls,
  - APIs (e.g.: web APIs).

When combined together, they make up a full VRE.

## Examples

- A math library: `libGAP`, `libPari`, `Flint`, ...
- A module: integers, rationals, number fields, finite fields, ...
- A full blown software: GAP, Pari/GP, Sagemath, Jupyter, ...

---

# We want them

- **Portable**: mobile, desktops, cloud, ...
- **Modular**: easy install, buildi, test, distribute, remix, ...
- **Flexible**: personal computation, HPC, parallel platforms, ...
- **Open**:
  - open source, of course,
  - well documented,
  - easy to inspect: what algorithm is run? What are the alternatives?

---

# The big picture

- OSS is great for research: powerful tools, open scrutiny, reproducibility, community, ...
- But there are still many areas where OSS is not so great:
  - Deep inspection: analyze algorithms & optimizations, compare frameworks;
  - Semantic interfaces: software that *understands* mathematics and *communicates* them;
  - Entry barriers: improve docs, UX, support for different platforms;
  - Credit: aknowledge contributions, peer reviews.

Let's improve these and bring about the next generation of mathematical software!

---

# The tasks (1/2)

1. **Portability** (UVSQ): 
  - SageMath & co. on Windows (and other exotic platforms), 
  - continuous integration.
2. **Interfaces between systems** (UPSud):
  - passing mathematical objects via SCSCP (OpenMath based RPC for computer algebra),
  - automatic discovery of functionality, documentation, ...
  - performance.
3. **Modularisation and packaging** (UVSQ):
  - Virtualisation,
  - Review community packaging & distribution in Python/SageMath/GAP, come up with a new solution,
  - SageMath in Linux standard package systems.
4. **Simulagora integration** (Logilab):
  - Deliver Simulagora VMs every 6 months.

---

# The tasks (2/2)

5. **Component architecture for High Performance Computing and Parallelism** (UJF):
  - Parallelism-friendly composition of components.
6. **Document and modularise SageMathCloud’s codebase** (UPSud):
  - SMC is a moving target, evolving very quickly. Coordination with UWashington is top priority.
7. **Improving the development workflow in mathematical software** (UVSQ):
  - Bug reporting, community patches, integration in VRE.
8. **Python interface for OOMMF micromagnetic simulation library** (Southampton):
  - Demonstrator for Object Oriented MicroMagnetic Framework in Jupyter.

