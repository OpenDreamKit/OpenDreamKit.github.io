---
layout: page
title: Program
---

<style>
details {
  margin: 1rem;
}
summary {
  font-weight: bold;
}

summary::after {
  content: " (click to expand)";
  font-size: small;
}
</style>

<script src="//cdn.jsdelivr.net/npm/details-polyfill@1/index.min.js" async></script>

* Start: Thursday August 15th 2019 at 09:30
* Finish: Friday August 23th 2019 at noon

# Detailed Schedule

## School

The school is meant for beginners in computer algebra,
to learn about the capabilities of the CAS GAP and Singular.
It consists of six sessions, each three hours long, consisting
of a lecture about the topic and a long hands-on session,
in which participants can exercise their newly gained knowledge.
It is envised that after this school, participants should be able to
work with the developers in the succeding workshops.
The sessions are:

<details>
<summary>
Thursday: Best practices software development (Max Horn)
</summary>
In this course, you will learn about some best practices in (mathematical) software development: We will discuss the importance of, and how to do, source code version control and issue tracking. There will be practical demonstrations using the git version control system, and GitHub for collaborative work, and a set of exercises to train these skills.
</details>


<details>
<summary>
Thursday: GAP for beginners (Michael Torpey)
</summary>
This lesson gives an introduction to GAP. It is centered around a common task of
searching in the Small Groups Library for interesting examples and counterexamples,
and a particular research problem in which we will be interested is to <emph>find
examples of non-trivial groups such that the average order of their elements is an integer</emph>. The lesson will lead the learner along the path from working in the GAP command
line and exploring algebraic objects interactively to saving the GAP code into
files, creating functions and regression tests, and further to performing
comprehensive search and extending the system by adding new attributes.On this path, the learner will become familiar with:
<ul>
<li>basic constructions of the GAP programming language,</li>
<li>ways to find necessary information in the GAP system, and</li>
<li>good design practices to organize GAP code into complex programs.</li>
</ul>
</details>


<details>
<summary>
Friday: Advanced Topics in GAP (Thomas Breuer)
</summary>
Motivated by a mathematical question,
we will develop GAP functions for answering
questions from various areas
(combinatorics, group theory, representation theory).
We will combine them with available functionality,
create new kinds of objects,
and extend GAP's capabilities in special situations.
</details>

<details>
<summary>
Friday: Singular for beginners (Christian Eder, Andreas Steenpaß, Isabel Stenger)
</summary>
We will give an introduction to Singular starting from the very first line
of code, and show how it can be used for theoretical research. On the
practical side, the participants are encouraged to write their own Singular
code, ranging from basic polynomial computations to more advanced projects
such as writing a Singular library for their own research.
</details>

<details>
<summary>
Saturday: CAP: Categories, algorithms, programming (Sebastian Posur)
</summary>
The CAP Days school provides a gentle introduction to the basic notions of category theory
and their realization in CAP (categories, algorithms, programming), a software project for constructive category theory written in GAP.
We learn how to compute with finite dimensional vector spaces and finitely presented modules
using the unifying language of abelian categories, and write generic algorithms
that work in arbitrary abelian categories, e.g., for the intersection of subobjects.
You may test and play with CAP's categorical language by running
Jupyter notebooks interactively in Binder: <a href="https://mybinder.org/v2/gh/sebastianpos/cap-aachen2018/master">click here to launch Binder.</a>
</details>

<details>
<summary>
Saturday: Parallel modular algorithms in Singular (Christian Eder, Andreas Steenpaß, Isabel Stenger)
</summary>
Modular algorithms are an important tool for tackling research problems in
computational algebra whenever coefficient swell is an issue. At the same
time, they offer a relatively easy way for parallelization. The basic idea
is to make use of the Chinese remainder theorem for decomposing the original
computation over some given ring into several computations over different
rings for which the arithmetic is computationally easier, and to recombine
the results. In the simplest case, a computation over the rational numbers
is decomposed into computations over fields of order p for several primes p,
but modular methods can also be applied to, for example, number fields and
function fields.
<br/>
We will give an introduction to several applications of this principle as
well as to the existing implementations of modular algorithms in Singular.
We will also discuss both technical and theoretical problems which arise
from this approach. For more complex applications such as Gröbner basis
computations for example, we often face the problems how the modular results
can be recombined and how correctness of the final result can be ensured. 
</details>

## Mini conference

Participants are welcome to give talks about problems they have tackled
or want to tackle using computer algebra systems.
Furthermore, developers of CAS who want to present
their work are welcome to present it. Please note that each talk
should contain either a research question to tackle with CAS, or a demo
of CAS features.

### Monday

TBA

### Tuesday

TBA

## Workshops

From Wednesday to Friday participants are encouraged to work in several
workshops on specific problems they are interested in or facing in
computer algebra. If you want to definitely participate in a certain workshop,
please mention it in the registration.

The workshops (and their specific organizers) are:

<details>
<summary>
Visualizations in Jupyter (Claus Fieker, Pedro Garcia-Sanchez)
</summary>
Abstract: In this workshop we want to explore and extend the features of various
visualization backends for Jupyter, and how we can use them in CAS.
In GAP, there are the packages Francy and JupyterViz, for Singular
there is a surf backend, and for Python and Julia there are countless
of possibilities.
</details>

<details>
<summary>
CAP Days (Sebastian Gutsche, Sebastian Posur)
</summary>
In this workshop both newcomers and veterans
to CAP are welcome to form groups and work on projects of their interest.
If you are new to CAP and if you would like to try and implement a category or
a categorical algorithm on your own, help will be provided.

Topics of interest may include: applying GAP's syntax trees for speeding up the CAP kernel,
facilitating the interface for functors,
and the implementation of missing category constructors and categorical operations.
</details>


<details>
<summary>
GAP Days (Max Horn)
</summary>
GAP Days are meetings where developers and users with programming experience are invited to influence the future development of GAP by initiating and contributing to discussions and coding sprints. As enough GAP experts will be around for technical support, the meetings usually offer good opportunities for people to work on their own packages.
</details>

<details>
<summary>
Singular Workshop (Christian Eder, Andreas Steenpaß, Isabel Stenger)
</summary>
This workshop is meant for participants that want to try to solve their
research problems using Singular. Participants should bring their problems,
and can get help solving them by experienced Singular programmers.
</details>
