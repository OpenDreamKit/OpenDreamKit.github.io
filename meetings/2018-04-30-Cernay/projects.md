---
layout: page
title: "Project and progress reports for the [workshop on Low level interfaces with libraries](https://github.com/OpenDreamKit/OpenDreamKit/issues/251 )"
---

Desired format: for each project that was worked on during the workshop, please include 1-3 paragraphs
about what the project was about and what was achieved. You may want to mention the impact and, if
relevant whether workshop provided some unique setting that enabled those achievements. Please
include links to all relevant tickets / issues that has been worked on. If possible, please tag those
tickets / issues with the label Cernay2018.

## Survey paper

The workshop was the occasion to build a shared vision among the participants
on the current landscape of tools and strategies
to integrate low-level libraries in (math) systems. To capitalize on this vision,
we started writing collaboratively a
[survey paper](https://www.overleaf.com/15996604kpskgdsgjhww )

## GAP as a library

Jeroen, Nicolas, Samuel, Sebastian, Thomas

TODO: copy this paragraph into the paper

### Context

GAP is an open source system for computational discrete algebra.
It's composed of a kernel written in C, and a library (and many packages)
written in its own bespoke language. Originally
it was developed as a standalone system. Since a decade however, other systems
like SageMath have started using it as a library. The main approaches for interfacing
have been text based (either interacting directly with the GAP interpreter through pexpect,
or using the OpenMath/SCSCP protocol over a socket). Such interfaces are not
suitable for low granularity computations (latency) or when large amounts of data are involved.

To circumvent this, a low interface for GAP -- called libgap -- is in development, enabling programs to interact
with GAP through a C-level API.

Existing or planned applications include:
- Interfacing GAP from SageMath (currently using SageMath's own libgap)
- Interfacing GAP from Julia (work in progress by Sebastian Gutsche et al.);
  The interface will eventually be made available from https://github.com/oscar-system/GAPJulia .
  Currently the interface works around the lack of libgap by being run within the GAP system.
- The Jupyter kernel for GAP (currently using ???)

A couple years ago a prototype was implemented as a fork of
GAP for use in SageMath under the lead of Volker Braun. Being a fork involves non trivial maintenance overhead.
Over the last year, in particular at the occasion of a previous workshop in Cernay,
libgap has been reimplemented within GAP itself under the lead of Markus Pfeiffer,
with ultimate goal to make the GAP interpreter itself into a thin layer over libgap.

The work consists in (1) disentangling the GAP kernel from the interpreter,
(2) updating the build system, and (3) handling the ABI to reduce
risks of symbols conflicts at link time. In the prototype, (3) is
handled by mangling all symbols (this feature is dubbed *prefixed libgap*); the caveat is that it breaks the ABI-level
compatibility with a standard-built GAP. In practice Sage's libgap currently can't load
GAP packages that involve dynamic modules (e.g. Semigroups).
In the last two years, a lot of work was put into refactoring GAP's build system,
making (2) much easier. But also making GAP 4.9 a dependency for GAP's official libgap.

### Current status

GAP 4.9 has been released recently; however more work is needed
on libgap, and its inclusion was
postponed for a later version, hopefully GAP 4.10. See https://github.com/gap-system/gap/pull/1205#issuecomment-385670578 

### Achievements

The workshop was the occasion to coordinate among the parties, and
move forward.

First, some work was done to prepare the upgrade to GAP 4.9 in SageMath (see tickets below).

Sebastian also did some updates to Markus' libgap, which now compiles and works in Julia:
https://github.com/sebasguts/libgap .

Finally we explored potential solutions for (3) and discussed the desirable API and ABI.
One difficulty is that Python/Sage cannot deal with a plain unprefixed libgap due to conflicts,
due to conflicts with the T_NUM equivalent defines (T_BOOL, etc...) in https://github.com/python/cpython/blob/master/Include/structmember.h
A proposed strategy is to define a small clean C-API, and hide all other symbols from the C-kernel in the libgap.so file.
(see http://blog.fesnel.com/blog/2009/08/19/hiding-whats-exposed-in-a-shared-library/ ).
This definition will be nurtured by reviewing the available GAP kernel symbols and
which one have been used in practice by e.g. SageMath or Julia.

We also discussed how to smoothen the transition.
We concluded that maintaining ABI-level backward compatibility is not important: GAP users
either use precompiled GAP packages, or recompile their GAP packages whenever
they upgrade GAP. As for API-level backward compatibility, this should
be easy through the use of macros. Fixing Sage to use unprefixed symbols should be just
a matter of query-replacing.

### References

- Relevant SageMath tickets
  - Upgrade to GAP 4.8.10:https://trac.sagemath.org/ticket/24427
  - Upgrade to GAP 4.9: https://trac.sagemath.org/ticket/22626
  - Unprefixed Cython interface: https://trac.sagemath.org/ticket/25273
  - Clean up cimports in libgap: https://trac.sagemath.org/ticket/25274

- Markus Pfeiffer's libgap, and its three branches
  - https://github.com/markuspf/libgap
  - https://github.com/markuspf/libgap/commits/master
  - https://github.com/markuspf/libgap/commits/libgap
  - https://github.com/markuspf/libgap/commits/libgap-devel

- Volker Braun's libgap repo, with instructions on how to make the next release from the current one
  https://bitbucket.org/vbraun/libgap

- Cython declaration file for GAP in Sage
  https://github.com/sagemath/sage/blob/master/src/sage/libs/gap/gap_includes.pxd

- Current libgap spkg tarball
  http://files.sagemath.org/spkg/upstream/

Volker says:

> I don't anticipate any particular issues with the libgap update.
> The proof is in the pudding, of course.
> Not all files are in the tarball, you should work on the libgap
> repo (which does contain src/libgap.map)  

## Upgrade to Arb 2.13.0 in SageMath

https://trac.sagemath.org/ticket/24927
https://trac.sagemath.org/ticket/24928
https://github.com/fredrik-johansson/arb/issues/152

Vincent, Vincent

## LinBox-Sage interface

- Get rid of old interface code (in LinBox) thanks to better C++ support in Cython than 10 years ago
https://trac.sagemath.org/ticket/24544

 --> should we try to find how to pass matrix data with cppyy?

- Use LinBox for computing with sparse integral matrices
https://trac.sagemath.org/ticket/23214

Vincent, Jeroen

## Use GAP's semigroup package in sage-semigroups

Nicolas, Florent, James

(requires GAP 4.9 in SageMath)

## cppyy tutorial

Nicolas, James, Florent, Sylvain, Robert, Stefan, ...

github repo with the notebook used for the tutorial:
https://github.com/bluehood/cppyy_tutorial

## Python bindings for libsemigroups

Experimenting with Cython, Pybind11 , cppyy
James, Florent, Nicolas, 
TODO: James: report :-)

We managed to do some simple semigroup computations from Python using cppyy

## Use libsemigroups in sage-semigroups

Nicolas, Florent, James

## Redesign libsemigroups, for easier interfacing and performance

Two things need to be done:
- Currently the input arguments validation is duplicated in Gap and Sage. So we started to
  refactorise it at the level of the C++. As a bonus, this allowed to discover many wrong tests and fix them. 
- Simplify and optimize the memory management. The internal algorithms of libsemigroups
  make heavy uses of various C++ standard containers such as vectors and hash tables. By design 
  choice they always copy their input (here some more or less large arrays) leading to poor 
  performances both in speed and memory consumption. Currently the way its done forces the 
  user to manually allocate, destroy and deallocate the elements. After careful design 
  discussions, we decided that we must isolate memory management wise the internal of the
  semigroup algorithm to the exterior, communicating by systematic copy and letting each 
  semigroup have its own pool allocator. The allocation system is done and tested. The 
  algorithm adaptation is in progress.     

TODO: Discussion with Jeroen, Enrico, ...

## Reproduce and report Cython bugs

- typedef instantiation of templates https://github.com/cython/cython/issues/2233
 (also https://groups.google.com/forum/#!topic/cython-users/81wTNLKZ2mw)

- https://groups.google.com/forum/#!topic/cython-users/FYIh0OZ1qeE ?

Vincent Delecroix

## Cython: discuss PEP 575

See https://www.python.org/dev/peps/pep-0575/ and https://github.com/jdemeyer/cpython/tree/pep575

Goal: unify functions and methods implemented in Python and C, in order to 
have a consistent API (will help uniform introspection, e.g. for Sphinx documentation)
without losing performance.

It would be good if Cython could somehow "officially" support this PEP by writing to python-dev. (Done)

BIG PROBLEM: people have concerns about backwards compatibility. But it's difficult to measure this problem.

-> one way is to run the testsuites of a lot of Python modules.
 It may also be possible to get most of the benefits without backwards compatibility issues, and defer cleanup 'till later. 

Jeroen, Erik(?), Antoine(?), Stefan? Robert? Florent, Serge

## Cython: improve installation of Cython projects

Push Cython-specific distutils hooks from Sage to Cython upstream. See
https://github.com/sagemath/sage/blob/8.1/src/setup.py#L195

Better integration between Cython and distutils
Make it easy to ship the Cython-generated .c files in the source tarball
Best practices for shipping Cython-depending code
Lessons learned from SageMath, Astropy ...

2008-05-03: Plan formulated.

## Cython: discuss "late includes" feature

Cython allows to embed arbitrary C code in a Cython module, for example with cdef extern from "foo.c". However, it's difficult to access Cython objects from that C code. An experimental feature was added to Cython 0.28 to make this possible but we should now find a proper solution.

Needed for cysignals. Jeroen promised to finish by tomorrow.

Jeroen, Robert, Stefan

## Cython: tracebacks are broken for Cython code in Python 3

See https://trac.sagemath.org/ticket/24681
See​ https://bugs.python.org/issue32797
Upstream Python fix at https://github.com/python/cpython/pull/6653

Jeroen, Robert, Stefan, Erik

## Cython: discuss tp_new / tp_dealloc customization

It would be great if Cython could allow further customization of allocating and deallocating objects.
This could be used for example to improve the "Integer pool" (https://trac.sagemath.org/ticket/17670)

Jeroen, Florent

## Triage a bunch of Cython bugs

a bunch! (>= 10)
TODO: add links if easy

Triaged:
    https://github.com/cython/cython/issues/2232
    https://github.com/cython/cython/issues/2231
    https://github.com/cython/cython/issues/2229
    https://github.com/cython/cython/issues/2222
    https://github.com/cython/cython/issues/2214
    https://github.com/cython/cython/issues/2091
    https://github.com/cython/cython/issues/1818
    https://github.com/cython/cython/pull/1842
    https://github.com/cython/cython/pull/2228
    https://github.com/cython/cython/pull/2207

Fixed:
    https://github.com/cython/cython/issues/2216
    https://github.com/cython/cython/issues/1397
    https://github.com/cython/cython/issues/1399
    https://github.com/cython/cython/issues/1393
    https://github.com/cython/cython/issues/1771
    https://github.com/cython/cython/pull/2239
    https://github.com/cython/cython/pull/2219
    https://github.com/cython/cython/pull/2234
    https://github.com/cython/cython/pull/391

Plus some other optimizations with dicts and slots (both done and ongoing).

## Cython: discuss cpdef functions with __slots__ = []

Bug or feature? https://github.com/cython/cython/issues/1771
 - It's a (now fixed) bug
- Spurred some other performance improvements as well.

## Fast callable and arbitrary precision (path) integration in Sage

There is now code for performing certified integration with arb (https://trac.sagemath.org/ticket/24686).
However, the input needs to be a "arb" function (with some knowledge about analytic features). Ideally,
we would have the possibility of integrating symbolic expressions directly... and possibly pass via a
fast callable that would compile the expression into more efficient C code.

- more domains (balls (arb, acb), integers (mpz, fmpz), rationals (mpq, fmpq) etc)
- support for mixed domains: eg (x,n) -> x^n with x a ball and n integer
- analyticity, branch cuts, etc for symbolic functions (this information is used by arb for
  computing bounds)

Vincent Delecroix

## Use Cython's multiple inheritance

People have complained for years that Cython doesn't allow multiple inheritance. Now they do allow it (under certain conditions), but what are the possible uses? (Some discussion.)

usecase: category framework in Sage

Nicolas, Robert, Jeroen, Stefan, Florent ???

## Explore the possibility of using import hooks for .sage files

Luca: Erik, I need your help

## Work on a couple of overdue OpenDreamKit deliverables

Luca

- [D3.5] Integration between CoCalc and Sage's Trac server
    https://github.com/OpenDreamKit/OpenDreamKit/issues/64

- [D3.7] One-click install Sage distribution for Windows with Cygwin 32bits and 64bits
    https://github.com/OpenDreamKit/OpenDreamKit/issues/66

## Cross-binding-library fast function calls (and general C-level exposure)

Cython, cppyy, PyBind11, NumPY, etc. should all be able to call each other without passing through the Python layer.

See
https://annuel2.framapad.org/p/pywrapper-interop

## tutorial on cppyy
https://mybinder.org/v2/gh/bluehood/cppyy_tutorial/master?filepath=cppyy_tutorial.ipynb

Stefan, Robert, Jim, ... ?

## Leverage cppyy for Cython .pxd generation

Simple prototype
Upstream PR: https://bitbucket.org/wlav/cppyy-backend/pull-requests/13/export-some-more-information-in-cppyy/diff

Robert

## Integration xtensor <-> Pythran

Serge, Sylvain, ...

Fight ongoing :-) Numpy can be faster than xtensor!

## cysignals on Windows (Cygwin + native)

Good progress is being made

Erik, Jeroen, Vincent Klein

## Better support for small matrix algebra in xtensor

Hadrien, Sylvain, Wolf, Johan

During a Google Summer of Code project, the LAL computing group would like to explore adding support for efficient small matrix algebra to the xtensor stack.
As a first step, Hadrien ported existing small matrix algebra work of his group from Boost.SIMD to xsimd, the SIMD abstraction layer used by xtensor.

This work went very smoothly, as xsimd was initially inspired by Boost.SIMD and had very similar API logic.
However, the work also revealed some feature gaps of xsimd with respect to Boost.SIMD:
    - No way to emulate vector sizes which do not exist in hardware (PR: https://github.com/QuantStack/xsimd/pull/100 )
    - No way to efficiently leverage compile-time knowledge of the mask for a blend/select operation (ticket: https://github.com/QuantStack/xsimd/issues/97 )

Both issues wore worked on during the workshop by Hadrien and the QuandStack team, and are now close to being resolved.
This was also an excellent opportunity for the two teams to get to know each other and start investigating future collaboration.

## Get ROOT, PyROOT, JupyROOT installed in CoCalc

- redo the ROOT (CERN library) support for Sage and Jupyter notebooks
  https://github.com/sagemathinc/cocalc/issues/239 

Samuel, Jim, Enrico

Samuel and Enrico spent some time on getting a recent (i.e. v6.12 or later) ROOT version installed in CoCalc.
ROOT is compile-able and installable in CoCalc as a local package, Sam got in touch with CoCalc maintainers to actually get a recent version pre-installed in the container environment.
PyROOT (ROOT's python module) also works form the commandline interpreter.
JupyROOT (jupyter with the ROOT C++ kernel) was not working properly (kernel loop-crashinig), possibly because of missing python packages (e.g. metakernel).
Enrico is available for help in case Sam requires further assistance.

## Python callable to C++

Jim, Enrico, Serge, Robert, Stefan

Jim put together a proof of concept that shows it is possible to jit a python function with numba and then invoke the jitted C function
from C++ code jitted with cppyy. This effectively makes it possible to make numba-friendly python callables invokable from C++.
Then Enrico spent some time trying to come up with a non-expert-user-friendly interface that would do most of this work under the hood,
given that the C types of the arguments that will be passed to the python function are known.
Some progress was made and this will hopefully make it to pyROOT.
More relevant for the world at large is the discussion with Stefan/Robert on Friday (see topic further up)

## Using VecCore with the whole Cython/Jupyter thing (yellow lines)

- stress-tests Cython with a heavily templated C++ library
- easier to debug indexing of vectorization in Python/Jupyter
- I need a faster (vectorized) numpy.cumsum anyway
- I'll likely use Cython in future projects, and now's the best time to get help and give feedback to Cython experts

day 1:

--> Discovered that compilation errors go to stdout on Jupyter server, rather than in notebook.
--> Literal C++ string option (verbatim includes) is a lifesaver but needs to be documented!

day 2:

--> switched to xsimd (part of xtensor), much easier interface
--> xsimd lacks AVX-512 support; Wolf started implementing them
--> easier to work in C++ directly, non-Jupyter, because working out indexes in the algorithm isn't the hard part— finding the right intrinsics is
--> Hadrien had a much better idea for the algorithm (conversation on the walk); now using Hillis & Steele
--> implemented it and vectorized algorithm is 10x faster than -O2 sequential, 3x faster than -O3 sequential
--> porting back to Cython + Numpy to check against numpy.cumsum

Jim, Robert (answering some questions), Wolf Vollprecht, Hadrien Grasland

## Conda brainstorm 

Themes:
- as a community, we have a strong dependency on the anaconda.org repository which is not open-source and vendor dependent; shall we have an alternative?
- support for source packages? (especially needed when considering HPC environment, would also be useful for Sage)
- Shall conda-forge have its own miniconda distribution?

- we can start by providing different "miniforge" installers, especially with different focus than "miniconda", e.g. C++ environment etc.
- building up an own build and distribution infrastructure for condaforge is not trivial but doable, if necessary

Sylvain, Julian, Nicolas, Jim, Stefan, Samuel

## Support "external" datatypes in Sage functions (is_prime, factor, etc)

Mainly focused on gmpy2 for now
https://trac.sagemath.org/ticket/24677

Vincent Klein

## Cython users support group

Friday at 11:00am

## Document installing Xeus-Cling in a CoCalc project

Samuel, with help from Sylvain, Julian, Hadrien

- Polished take one from a few months ago (install Miniconda then install kernels)
  https://cocalc.com/share/4711033a-b5d8-4fb3-9708-e9019ba1c158/Install-xeus-cling-in-CoCalc-project-take-two.md?viewer=share
- Wrote take two with one less step (use already-installed Anaconda3)
  https://cocalc.com/share/4711033a-b5d8-4fb3-9708-e9019ba1c158/Install-xeus-cling-in-CoCalc-project-take-two.md?viewer=share

This might help with the system-wide install on CoCalc, tracked as

- CoCalc issue 2324: Install cling jupyter kernel for interactive C++
  https://github.com/sagemathinc/cocalc/issues/2324

CoCalc is in the process of upgrading to Ubuntu 18.04, see announcement
on Twitter -- https://twitter.com/cocalc_com/status/992021191161499650 -- saying
"We're already at the stage of testing a major upgrade to @ubuntu  #1804 internally."
CoCalc should provide xeus-cling once the move to Ubuntu 18.04 is done.
The CoCalc team offered to let one of Samuel's CoCalc projects use the
Ubuntu-18.04-based CoCalc image, which is still in beta.

## Document installing ROOT in a CoCalc project

Samuel, Enrico

- Install ROOT in a CoCalc project
  https://cocalc.com/share/d552e619-3c8e-4722-bda1-8f6a75f78443/Install-ROOT-on-CoCalc.md?viewer=share

Still needs some love.

This should help with the system-wide install on CoCalc, tracked as

- CoCalc issue 239: redo the ROOT (cern library) support for Sage and Jupyter notebooks
  https://github.com/sagemathinc/cocalc/issues/239

## Full GAP in CoCalc

Samuel, Sebastian?

This is tracked at:
- CoCalc issue #791: Provide a recent GAP with all its standard packages
  https://github.com/sagemathinc/cocalc/issues/791

There was progress in end-of-Dec-2017 / beg-of-Jan-2018,
but it has been stalled since, although it's almost complete.

## Polymake on CoCalc

Samuel, Andreas

- CoCalc issue #905:
  Upgrade Polymake; install pypolymake; install Polymake kernel for Jupyter
  https://github.com/sagemathinc/cocalc/issues/905

## Better etherpad service

Samuel

The new etherpad-lite 1.6.6 was released just after our Cernay workshop,
and has a fix for the issue which caused us a lot of frustration:

    https://github.com/ether/etherpad-lite/releases/tag/1.6.6
    FIX: text entered between connection loss and reconnection was not saved

In early May 2018, Framapad runs etherpad-lite 1.2.13.
Samuel's request to upgrade to etherpad-lite 1.6.6:

- https://framagit.org/framasoft/framapad/issues/22

