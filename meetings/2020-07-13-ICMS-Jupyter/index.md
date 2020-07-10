---
layout: page
title: "ICMS 2020 Session: The Jupyter Environment for Computational Mathematics"
location: TU Braunschweig, Germany
---

A session at [ICMS](http://icms-conference.org/2020), ~~Braunchweig, Germany~~ Online July 13-16, 2020

[Other Sessions](http://www.iaa.tu-bs.de/AppliedAlgebra/ICMS2020/ICMS2020_Sessions.html)

<!--http://icms-conference.org/2020/sessions/!-->

### Session organizers

*   [Nicolas M. Thiéry](http://Nicolas.Thiery.name/) (Université Paris-Sud / Paris-Saclay)

### Aim and Scope

The last years have seen the emergence of the open source web-based
interactive computing environment [Jupyter](https://jupyter.org)
(formerly IPython). Its flagship is the traditional notebook
application that allows you to create and share documents that contain
live code, equations, visualizations and narrative text; millions of
such notebooks have been published online. The main novelty of Jupyter
is that it can be used with dozens of programming languages, including
Julia, Python, R, Caml, C++, or Coq.

Thanks to this level of generality and to the use of open standards
and modern web technologies, a wide ecosystem of related tools has
appeared, e.g. for interactive book and slides authoring, hosting,
collaborating, sharing, or publishing. Several mathematical systems
(e.g. GAP, SageMath, Singular, OSCAR) have already adopted it as user
interface of choice.

The purpose of this session is to review and discuss the merits (and
demerits!) of this ecosystem and its alternatives for mathematical
research and education, notably with open science and reproducibility
in mind.

~~It you would like to present a talk (~25 minutes), please submit!~~


##### Topics (including, but not limited to)

*   Overview of the Jupyter ecosystem
*   Use cases in Research and Education: demonstration and feedback from experience
*   Integration of computational systems and proof systems: demonstration and feedback from experience
*   Interactive mathematics with Jupyter widgets
*   Hands on mini tutorials

### Online format

This session will follow the
[online format](http://www.iaa.tu-bs.de/AppliedAlgebra/ICMS2020/ICMS2020_LocalInfo.html)
of ICMS 2020. See also the
[general schedule](http://www.iaa.tu-bs.de/AppliedAlgebra/ICMS2020/ICMS2020.html).

Talks will be prerecorded. Every attendee should watch the talks he /
she is interested in *before* the interactive session takes place by
visio-conference on Wednesday 15th and Thursday 16th, from 16:30 to
17:10. *During* the session, we will have a chaired discussion with
the speakers, as it would normally occur during a live format *after*
a speakers talk.

See the talks below for the detailed schedule.

### Interactive session 1, Wednesday July 15th of 2020

#### 16:30: An overview of Jupyter and its ecosystem

Speaker: Nicolas M. Thiéry

In this introductory presentation, we will setup the stage for the
session by giving a brief overview of the Jupyter ecosystem.

#### 16:40: Nuggets: Visualizations with GAP and Jupyter

Speaker: Pedro A. Garcia-Sanchez

GAP is a system for computational discrete algebra, with particular
emphasis on Computational Group Theory. In this presentation, we will
briefly illustrate some of the visualization capabilities offered by
GAP in Jupyter thanks to Francy and JupyterViz.

#### 16:50 Interactive computation and complex representations of 2D-MZV

Speaker: Olivier Bouillot

The Jupyter notebook we present here pursues two main goals:
* give tools to compute a 2D-sum;
* give a complex representation of convergent 2D-Multiple Zeta Values (2D-MZV).

On one hand, a poorly known Lindelöf formula (cf. [1]) explains how to compute
the sum of the values at integers of holomorphic functions. This formula can be
written by an integral. Therefore, one can generalize the process to double sums
using double integrals.
The notebook  shows how the approximation changes according to the truncation
orders, and vice-versa, using widgets on a few examples.

On the other hand, it is easy to deduce real function properties from graphical
representations. This is also possible for functions defined and valued in the
complex plane (cf. [2]): we represent the values of the image of a complex
number z by coloring the corresponding pixel to z, according to a fixed
coloured scheme.
Now, visualizing a complex function with two variables is nothing else than
drawing a representation of the partial functions and move inside it. Then,
using widgets, we ask the user a discretisation of two complex domains and
allow him to realize this walk by showing a partial graphic representation of
the 2D-MZV.

References :

[1] E. Lindelöf : Le calcul des résidus et ses applications à la théorie des
fonctions, Gauthier-Villars, Paris, 1905.

[2] Wegert, E.: Visual complex functions. An introduction with phase portraits.
Birkhäuser/Springer Basel AG, Basel, 2012.

#### 17:00 Experience with teaching mathematics with notebooks at Universidad de Zaragoza

Speaker: Miguel Marco

Web based notebook interfaces to free/open source mathematical
software have been used as a tool for teaching mathematics related
courses at Universidad de Zaragoza for a decade. Initially the classic
SageMath notebook (sagenb) was used, but in the last year, a migration
process to a Jupyterhub/Jupyterlab based one has been started. Due to
the modularity of the Jupyter ecosystem, design choices had to be made
considering the desired use cases.

We describe the different design choices considered, together with the
advantages and drawbacks of each one. Specifically, we mention the
main problems that were found in practice, and how we dealt with them.

We also discuss the viability of such approaches for a university-wide
level deployment.

#### 17:10 Informal discussion


### Interactive session 2, Thursday July 16th of 2020

#### 16:30 Jupyter widgets for interactive mathematics

Speaker: Odile Benassy

In this talk, we will illustrate the rich interactive features offered
by Jupyter. Indeed, beyond the traditional REPL (Read-Eval-Print
loop), Jupyter offers a cross-language toolbox of interactive visual
components -- called widgets -- from which users can build and share
their own interactive applications. This toolbox has been adopted and
extended by the community which has developed visualization components
for various applications. A key feature of Jupyter widgets is the
progressive learning curve which blurs the line between notebook
readers, notebook authors, and developers.

We will start with a few "interacts" -- a feature well know to
Mathematica or Sage users -- to build with a handful of lines of code
some simple yet effective mini applications where the input of a
function is chosen with visual controls (e.g. sliders). We will then
illustrate the process of building applications with richer
interactions from the tool box. Finally, we will demonstrate two
Python/SageMath packages that we have developed based on Jupyter
widgets. The first one -- Sage-Combinat-widgets -- is a library of
widgets for the interactive edition of certain types of combinatorial
objects. The second one -- Sage-Explorer -- is an application for
interactive visual exploration of objects in Sage. Both can be
combined or integrated in larger applications.

Along the way, we will reflect on our experience, trying to evaluate
the expertise and development time required for each use case. We will
stress at this occasion the role played by dedicated Research Software
Engineers and suggest incentives for building and animating a rich
user community.

#### 16:40 Prototyping Controlled Mathematical Languages in Jupyter Notebooks

Speaker: Jan Frederik Schaefer

TBA

The Grammatical Logical Framework (GLF) is a framework for prototyping 
natural language semantics. It uses the Grammatical Framework for 
grammar development and MMT for logic development and semantics 
construction. In the semantics construction, parse trees are mapped to 
logical expressions via MMT views (meaning-preserving interpretation 
mappings).

The motivation behind GLF was to apply it to mathematical language, as 
the classical compositional approach to semantics construction seemed 
most suitable for a domain where high precision was mandatory - even at 
the price of limited coverage. In particular, software for formal 
mathematics (such as proof checkers) require formal input languages. 
These are typically difficult to understand and learn, raising the entry 
barrier for potential users. A solution is to design input languages 
that closely resemble natural language. Early results indicate that GLF 
can be a useful tool for quickly prototyping such languages.

With this in mind, we present a new Jupyter kernel for GLF that adds 
visual support for the development of GLF-based syntax/semantics 
interfaces. It was put to the test in a one-semester course on 
logic-based natural language processing and was evaluated in classroom 
presentation as well as for homework assignments.

#### 16:50: Polymake.jl: A new interface to polymake

Speakers: Marek Kaluba <kalmar@amu.edu.pl>, Sascha Timme <timme@math.tu-berlin.de>

Abstract:

Polymake is a software for research in polyhedral geometry with Perl
as the user interfacing language. We present Polymake.jl, an interface
to polymake from Julia. This talk discusses the technical aspects of
the interface and shows how the Julia package manager allows for
easily reproducible computations even when as large scale projects as
polymake is, are involved. The interface and reproducibility will be
demonstrated on an interactive example which combines exact
computations in polyhedral geometry with numerical methods from other
fields.

#### 17:00: Interactive use of C/C++ libraries in Jupyter - Strategies and lessons learned

Speaker: Sebastian Gutsche

In this talk, we will describe several strategies to use Jupyter as an
interactive front-end for a C/C++ library or a legacy computational
system with a REPL (Read-Eval-Print-Loop) interactive interface.

We will show how to access C/C++ libraries from interpreters for
various languages (Python, Julia, C++) and then use them from Jupyter.
This will demonstrate Python wrappers like the CPython API, Cython, or
cppyy, and Julia wrappers like CxxWrap and Julia's build-in ccall.

For packages with a REPL, we will see how we can adjust them to the
use in Jupyter using pexpect, the CPython API, or Xeus.

We discuss the benefits and drawbacks for the different approaches,
and additional Jupyter functionality (graphical output, widgets) that
becomes available for free.

#### 17:10: Informal discussions

### Publications

*   A _short abstract_ will appear on the permanent conference web page (see below) as soon as accepted.

*   An _extended abstract_ may be submitted for the conference proceedings that will be distributed during the meeting.

*   A _journal special issue_ consisting of _full papers_ will be organized immediately after the meeting.

### Submission process

There are two levels of submissions (short and extended abstracts).
Going to Level 2 requires to go through Level 1 before.

Level 1: In order to give a presentation at ICMS 2020, submit a short
abstract (plain text, i.e., without using any mathematical symbols,
etc; 200 words max.) by February 24, 2020 via email to the [session
chair](mailto:Nicolas.Thiery@u-psud.fr).

We encourage that you submit it as soon as possible. If you submit
early, then you will get the decision early: the organizers will make
a decision within a week of submission. If accepted, then you will
give a talk at the session, and your abstract will appear on the
session web page immediately. Furthermore you may (if desired) proceed
to Level 2.

Level 2: You submit an extended abstract by March 16, 2016.  If
accepted, then it will enter the conference proceedings, which will
appear in the Springer series Lecture Notes in Computer Science
(LNCS). It should be at least 4 pages and at most 8 pages.  It should
follow the Springer guidelines for authors
  https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines
In particular, it should use the latex template and the LNCS latex
style. The extended abstracts must be submitted via EasyChair to
  https://easychair.org/conferences/?conf=icms2020
as a single file, containing all the files.  This must include one
LaTeX source file, one bib file with the references, and one PDF
created from the source.  If you should have TikZ graphics, include it
into the LaTeX source.  Additional graphics files may be added to the
zip file as PNG or JPG.

The extended abstracts shall contain original research that has
neither been published nor submitted for publication elsewhere.
Authors need to sign a Consent-to-Publish form, through which the
copyright of their paper is transferred to Springer.
