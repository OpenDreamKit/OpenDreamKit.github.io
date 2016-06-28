---
layout: slides
title: "OpenDreamKit: the mathematician's perspective"
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# OpenDreamKit

## The mathematician's perspective

![](/public/logos/odk-elected-logo.svg)


---
## Some fundamental trends

### Long standing and booming role of computers in pure mathematics

- Computer exploration
- Conjecture verification
- Mechanized proofs
- Proof assistants and certified proofs
- Collaborative work
- Education

<!-- TODO: add examples -->

--
### Open Science getting momentum

> [Open science](https://en.wikipedia.org/wiki/Open_science) is the
> movement to make scientific research, data and dissemination
> accessible to all levels of an inquiring society, amateur or
> professional

- Open Knowledge (Access, Educational Ressources)
- Open Source or better Free Software
- Open Data
- Open Peer Review, Methodology, ...

At the core of science for centuries. Finally getting recognition as
*viable* and *necessary*, even by funding agencies!

--
### Emergence of a vibrant ecosystem of **free software** for pure mathematics

- Specialized libraries: [LinBox](http://www.linalg.org/), [PARI/GP](http://pari.math.u-bordeaux.fr/), [MPIR](http://mpir.org/), [Singular](http://www.singular.uni-kl.de/), ...
- General purpose systems: [GAP](http://www.gap-system.org/), [SageMath](http://www.sagemath.org/), ...
- Online databases: [OEIS](https://oeis.org/), [LMFDB](http://www.lmfdb.org/), ...

- Interactive computing environments:<br>
  [IPython/Jupyter](https://jupyter.org/), [SageMathCloud](https://cloud.sagemath.com/), ...
- Together with the wider Scientific Python ecosystem

### Viable alternatives to Maple, Mathematica, Matlab, ...

For research and education (and the industry?)

---
## Virtual Research Environments (VRE)?

Definition from the call of the H2020 European Research
Infrastructures Work Programme:

> Groups of researchers, typically widely dispersed who are working
> together through ubiquitous, trusted and easy access to services for
> scientific data, computing, and networking, in a *collaborative
> virtual environment*


--

### VRE for mathematics?

Mathematicians are already immersed in a multitude of virtual
environments to collaborate on

- **Software**

- **Data**

- **Knowledge**

--

![](/public/logos/TheBigPicture.svg)

<!-- TODO: add screenshots from the proposal -->

---
## The next frontier?

- Improve the productivity of researchers in pure mathematics and
  applications by further promoting collaborations on **Data**,
  **Knowledge**, and **Software**

- Make it easy for teams of researchers of any size to set up custom,
  collaborative **Virtual Research Environments** tailored to their
  specific needs, resources and workflows

- Support the entire life-cycle of computational work in mathematical
  research, from **initial exploration** to **publication**, **teaching**,
  and **outreach**

--
### A tension:

- Mathematicicans want a seamless user experience while interacting with mathematics

- Implementing a one-size-fits-all VRE is intractable

---
## An approach

Building a **math VRE toolkit** based on:

- The ecosystem of open source math software

- Open collaborative tools and models

### Architecture:

- VRE deployment and management system (e.g. JupyterHub, SageMathCloud)
- User interface (e.g Jupyter notebook)
- Computational components (e.g. Sage, GAP, Singular)
- Data / knowledge bases (e.g. OEIS)
- Physical resources (e.g. cloud infrastructure)

--
### Added values

- **Customizability** for a variety of use cases:
    - A single person installation on a laptop
    - A collaborative VRE between three researchers, running on their lab's server
    - A university wide VRE for teaching
    - Service provided by a european grid infrastructure

- Joining forces with the wider scientific computing community

- Lowering the software barrier between pure and applied maths

- **Modularity**, **sustainability**

---
## How to get there?

--
### Component architecture (WP3)

- Goal: ease of deployment. Requires:

    - Modularity, packaging, portability, distribution
    - For individual systems and combinations thereof

- Development workflows in ecosystems of software

--
### User interfaces (WP4)

- Jupyter as uniform notebook interface

- Improving Jupyter (collaboration, 3D, ...)

- Coordination SageMathCloud / JupyterHub

- Collaborative, reproducible, active documents

--
### Performance (WP5)

- Goal: Make the most of available hardware
    - multicore
    - HPC
    - cloud

- For individual systems and combinations thereof

--
### Data/Knowledge/Software (WP6)

- Goal: enable rich and robust interaction between
    - computational systems
    - data bases
    - knowledge bases
    - users

- This requires:
    - explicit common semantic spaces
    - a language to express them
    - tools to leverage them

--
### Community building and dissemination (WP2)

- Developer Workshops

- Training workshops

- Conferences

###

### Social aspects (WP7)

- Analysis of user needs

- Research on collaborative software development in mathematics

---
## OpenDreamKit (2015-2019)

*Open Digital Research Environment Toolkit
for the Advancement of Mathematics*

[OpenDreamKit.org](OpenDreamKit.org)

-   [H2020](https://ec.europa.eu/programmes/horizon2020/) [European Research Infrastructures](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures) Work Programme

    Call: Virtual Research Environments

-   Budget: 7.6M€

-   [15 sites, 50 participants](http://opendreamkit.org/partners)

    In close collaboration with the international community!

--
## A user-driven consortium

European power users and core developers of the ecosystem of open
source software for Mathematics:

- GAP (St Andrews, Oxford)
- Linbox (Grenoble)
- Pari/GP (Bordeaux, Versailles)
- Sage (Bordeaux, Grenoble, Paris Sud, Oxford, Versailles)
- Singular (Kaiserslautern)
- LMFDB (Warwick, Zürich)
- MathHub, MMT/OpenMath (Bremen)
- Jupyter (Simula)
- Scientific Python (SouthHampton, Sheffield, Silesia)

--
Supported by:

- Research engineers
- An open source based company (Logilab)

---
## How are we doing?

--


### The bad news

- Some tasks harder than expected

- We expected recruitment to be hard. It really was.

- We exected the admistrative overhead to be high. It really is.

--

### The good news

- Intensive work started on all fronts
    - Current deliverables not representative

- Some really good recruitement

- Joint workshops are very effective

- Interesting technology raising
    - Windows support for Linux apps

--
### Ways to improve?

- There could be more interactions in certain areas

- Some workpackages could benefit from more animation

- More workshops / joint visits / online meetings?


---
## More reading

- The [developer's perspective](/about-developers) on OpenDreamKit

- [About OpenDreamKit](/about)

- The OpenDreamKit [proposal](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/Proposal/proposal-www.pdf)

</section>
