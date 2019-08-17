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

* Start: Thursday August 15th 2019 at 14:00
* Finish: Friday August 23th 2019 at noon

# Detailed Schedule

## School (August 15 - August 17)

The school is meant for beginners in computer algebra,
to learn about the capabilities of the CAS GAP and Singular.
It consists of six sessions, each three hours long, consisting
of a lecture about the topic and a long hands-on session,
in which participants can exercise their newly gained knowledge.
The goal is that after this school, participants should be able to
work with the developers in the following workshops.
The sessions are:

<details>
<summary>
August 15, 14:00 - 17:00: Best practices software development (Max Horn)
</summary>
In this course, you will learn about some best practices in (mathematical) software development: We will discuss the importance of, and how to do, source code version control and issue tracking. There will be practical demonstrations using the git version control system, and GitHub for collaborative work, and a set of exercises to train these skills.
</details>


<details>
<summary>
August 15, 19:00 - 20:30, and August 16, 9:30 - 11:00: GAP for beginners (Michael Torpey)
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
August 16, 11:30 - 13:00, and 14:00 - 15:30: Advanced Topics in GAP (Thomas Breuer)
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
August 16, 16:00 - 19:00: Singular for beginners (Christian Eder, Andreas Steenpaß, Isabel Stenger)
</summary>
We will give an introduction to Singular starting from the very first line
of code, and show how it can be used for theoretical research. On the
practical side, the participants are encouraged to write their own Singular
code, ranging from basic polynomial computations to more advanced projects
such as writing a Singular library for their own research.
</details>

<details>
<summary>
August 17, 9:30 - 12:30: Parallel modular algorithms in Singular (Christian Eder, Andreas Steenpaß, Isabel Stenger)
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

<details>
<summary>
August 17, 14:00 - 17:00: CAP: Categories, algorithms, programming (Sebastian Posur)
</summary>
The CAP Days school provides a gentle introduction to the basic notions of category theory
and their realization in CAP (categories, algorithms, programming), a software project for constructive category theory written in GAP.
We learn how to compute with finite dimensional vector spaces and finitely presented modules
using the unifying language of abelian categories, and write generic algorithms
that work in arbitrary abelian categories, e.g., for the intersection of subobjects.
You may test and play with CAP's categorical language by running
Jupyter notebooks interactively in Binder: <a href="https://mybinder.org/v2/gh/sebastianpos/cap-aachen2018/master">click here to launch Binder.</a>
</details>

## Sunday Hike (August 18)

For Sunday, we will plan a hike together. Information will be given during the first days at Lambrecht.

## Mini conference (August 19)

Participants are welcome to give talks about problems they have tackled
or want to tackle using computer algebra systems.
Furthermore, developers of CAS who want to present
their work are welcome to present it. Please note that each talk
should contain either a research question to tackle with CAS, or a demo
of CAS features.

<details>
<summary>
9:30 - 10:00: Sandeep Singh Chahal: On the equality of certain automorphism groups of finitely generated groups
</summary>
TBA
</details>

<details>
<summary>
10:00 - 10:30: Martin Bies: Monoidal structures in Freyd categories
</summary>
For a given additive category C, one can construct a new category which
is known as its Freyd category. In this category, a morphism of C is
interpreted as an object. The morphisms in the Freyd category are
understood as commuting squares of morphisms in C up to a certain equivalence relation.
The package "FreydCategories", which is part of the CAP_project,
provides an implementation of this functionality. For example, this
package can be used to model the category of f.p. graded modules.

Further upshots include toric sheaves and their cohomologies.
The application to sheaf cohomologies and toric sheaves points out the
need for a monoidal structure and internal Hom in Freyd categories.
Therefore, we have recently focused on implementing mechanisms which
derive these structures on Freyd categories from corresponding
structures of the underlying additive category. I will elaborate on
these developments.
</details>
<details>
<summary>
11:00 - 11:30: Wilf Wilson: Searching in permutation groups with directed graphs
</summary>
The current state-of-the-art approach for problems like set stabilisers, intersections, and normalisers in permutation groups is called partition backtrack.
In essence, partition backtrack performs a search that estimates the solution as the stabiliser of an ordered partition.
With some collaborators, I am exploring how to take advantage of modern computational tools to replace ordered partitions in such searches by directed graphs.
The idea is that a graph can be used to represent a group more precisely than an ordered partition, and therefore lead to smaller search spaces.
I will talk about the mathematical progress that we have made, and the computational tools that have helped us along the way.
</details>
<details>
<summary>
11:30 - 12:00: Mahsa Sayyary Namin: The algebraic degree of the Fermat-Weber point
</summary>
The Fermat-Weber point p* is the unique point that minimizes the sum of distances from n given points in the real Euclidean space.
Given n points in general position in the real plane with non-zero integer coordinates,
we determine the algebraic degree of p*  over the field of rationals Q,
i.e. we find the degree of the minimal polynomials of the coordinates of p* over Q.
</details>
<details>
<summary>
14:00 - 14:30: Yue Ren: Computing zero-dimension tropical varieties using modular techniques
</summary>
In this talk, we will give a brief introduction to the concept of
tropical varieties.
We will discuss the applications and the challenges for the
computation of zero-dimensional tropical varieties, and present a new
approach using parallelization and modularization.
This is joint work with Paul Goerlach (MPI MiS) and Leon Zhang (UC Berkeley)
</details>
<details>
<summary>
14:30 - 15:00: Johannes Flake: Computing the Monoidal Center of Deligne's Interporation Category Rep(S_t)
</summary>
Deligne's interpolation categories are interesting examples for monoidal categories which can be described nicely using combinatorics and linear algebra. I will explain how objects in their monoidal centers can be constructed, and how I hope to produce more such objects or show that there are none using computer algebra.
</details>
<details>
<summary>
16:00 - 16:30: Manuel Delgado: Exploring N numerical semigroups in n milliseconds, with GAP
</summary>
TBA
</details>
<!-- <details>
<summary>
16:30 - 17:00: TBA
</summary>
</details> -->


## Workshops (August 20 - 23)

From Tuesday to Friday participants are encouraged to work in several
workshops on specific problems they are interested in or facing in
computer algebra. If you want to definitely participate in a certain workshop,
please mention it in the registration.


Each day, the workshops start at 9:30. Each organizer may set up their own schedule and mode of work.

The workshops (and their specific organizers) are:

<details>
<summary>
Visualizations in Jupyter (Claus Fieker)
</summary>
Abstract: In this workshop we want to explore and extend the features of various
visualization backends for Jupyter, and how we can use them in CAS.
In GAP, there are the packages Francy and JupyterViz, for Singular
there is a surf backend, and for Python and Julia there are countless
of possibilities.
</details>

<details>
<summary>
CAP Days (Sebastian Posur)
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
These GAP Days will focus on improving the MatrixObj implementation, and releasing GAP 4.11.
</details>

<details>
<summary>
Singular Workshop (Andreas Steenpaß)
</summary>
This workshop is meant for participants that want to try to solve their
research problems using Singular. Participants should bring their problems,
and can get help solving them by experienced Singular programmers.
</details>
