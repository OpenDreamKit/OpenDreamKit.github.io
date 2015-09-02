class: middle, center

# SageMath

[![SageMath](http://www.sagemath.org/pix/sage-banner-02.png)](http://www.sagemath.org/)

by [Luca De Feo](http://defeo.lu/)

Sep 2, 2015. [OpenDreamKit](http://opendreamkit.org) kickoff meeting.

<small>[view as a slideshow](https://gnab.github.io/remark/remarkise?url=https://raw.githubusercontent.com/OpenDreamKit/OpenDreamKit.github.io/master/meetings/2015-09-02-Kickoff/Software/SageMath.md)</small>

---

# What is SageMath?

**SageMath** (formerly **Sage**) is a free open-source mathematics software system licensed under the GPL.

- It builds on top of many existing open-source packages: NumPy, SciPy, matplotlib, Sympy, Maxima, GAP, FLINT, R and many more. 
- Access their combined power through a common, Python-based language or directly via interfaces or wrappers. 

Official downloads, docs, etc.: <http://www.sagemath.org/>

**Mission statement**

> Creating a viable free open source alternative to Magma, Maple, Mathematica and Matlab. 

**Mottos, quotes**

> We are building the car, not reinventing the wheel.

> We implement all conversion routines, instead of expecting upstream to do it: we make them communicate with Sage, whether they want to or not. Resistence is futile.

---

# Facts and numbers

- Started in 2004 by [William Stein](http://wstein.org/);
- Developed by researchers and students (and soon professionals) for researchers and students (and hopfeully professionals?);
- A community of >500 developers ([trac accounts](http://trac.sagemath.org/#AccountNamesMappedtoRealNames));
- A company [SageMath, Inc.](http://sagemath.com/), est. 2015;
- 19K tickets in the [issue tracker](http://trac.sagemath.org/wiki/TicketReports), 39K [commits](https://github.com/sagemath/sage/), 1.8M LOCs (native code, via `git ls-files | xargs cat | wc -l`);
- ~70 community meetings ([Sage Days](http://wiki.sagemath.org/Workshops)) in 10 years.

---

# No, seriously, what is it?

- A distribution of mathematical software (NumPy, SciPy, matplotlib, Sympy, Maxima, GAP, FLINT, R,...),
- A common Python-based interface, including interfaces to proprietary software (Magma, Mathematica, ...),
- Native Python/Cython code implenting more functionality,
- Two web notebook interfaces developed in house + Juptyer integration,
- [SageMathCloud](http://cloud.sagemath.com/), a *spinoff* project hosting collaborative math projects (Jupyter, Sage, LaTeX, ...) in the cloud, hopefully generating revenue soon.

### Development model

- **SageMath**: Community driven, peer-reviewed contributions via issue tracker <http://trac.sagemath.org>.
- **SageMathCloud**: Centralized, essentially a one-man project for the moment.
 
---

# Architectural tips

- Most interfaces to subsystems done via C/C++ library calls (in Cython wrappers);
- Some leftovers of text-based interface to child instances of subsystems (e.g., interfaces to proprietary software);
- Python/Cython library built on top of subsystem and/or native code;
- Dynamic type system, dubbed *Category framework*, for *easy* scaffolding of mathematical objects;
- Small preprocessor translating Sage language → Python.
