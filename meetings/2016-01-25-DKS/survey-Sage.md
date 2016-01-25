---
layout: slides
title: "Survey on knowledge representation in Sage"
theme: white
transition: none
author: Nicolas M. Thiéry
---
<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">

{% comment %}
Suggestions from Paul:
  - skim over sage databases (i.e. mention they exist, not more)
  - talk about different uses of category framework, including Florent's tricks of adding new axions to check consistency
  - talk about persistence/pickling of math objects as one point where semantics are implicit
{% endcomment %}

# {{ page.title }}

{{ page.author }}


---
## Overview at a high level of your system

{% comment %}
  Give a 5 minute talk about the mathematics we need to grasp what you
  are trying to achieve with your system. This means introducing the
  concepts that are important, focusing on how they relate, rather
  than their definition. This is not concerned with questions of
  implementation of your system, yet.
{% endcomment %}

- [SageMath](http://www.sagemath.org): General purpose computational (pure) mathematics software

- 300 contributors

- 1.5M lines of Python/Cython code

- 40k functions

- 4k classes

- hundreds of open source (math) software/libraries in the distribution

--

---
## What data do you have?

- A collection of (optional) databases

- Usually coming from external software/databases

- Examples:

  - GAP databases
  - OEIS
  - John's database of elliptic curves
  - ...


{% comment %}
1. Structure
1. Format
1. How is it produced?
1. How is it changed?
1. How do you document it?
{% endcomment %}

---
## What knowledge do you have?

Mathematical properties and theorems, algorithms, ...


## Two key points that conditioned the design

- There are only a handful of fundamental concepts:

  operations: *, +, ...

  axioms: associativity, commutativity, ...

  The richness comes from the combinations of them (e.g. Fields)

- Using an existing language and its object oriented features for
  modelling and method selection


### Sources of external knowledge?

Each Sage contributer brings on specific mathematical knowledge about
the objects studied, which might not be available to others in the
collaboration.

--

### Can you point to implicit knowledge?

- The algorithms rely heavily on the mathematical properties of
  the objects they manipulate.

- Sage uses the Object Oriented features of Python

  The properties of a Sage object are specified by its *class*:

  - what mathematical object does it represent?

  - how is it represented

- The class information is often of technical flavor, and complemented
  by additional information on its universe (parent, category)

--
- Sage strives to model mathematics closely:

  Not only matrices are instances of a specific classes and not plain
  list of lists

  But linear maps are instances of specific classes and not just
  represented by matrices

  ==> Reduced risk of calling a meaningless function

--

- The abstract algebraic properties of an object (e.g. being a group
  or a field) are modelled relatively explicitely:

  Each object knows the names of (most of) its categories and
  axioms

  However the meaning of those is essentially implicit except, in
  the good cases, informally in the documentation and as testing
  methods

--
- It's not always defined explicitly which methods an object in a
  given category should implement.

  Methods/operations are documented, but their exact specifications of
  is not always completely defined/defined consistently accross the
  class hierarchy.

- Some theorems (e.g. wedderburn) are embedded in actionable form,
  but that information cannot be extracted.

--
### Is it common knowledge?

The meaning of the relevant categories / axioms (e.g. ring,
associativity) is relatively well known by the users and developpers.


--
### What would you gain if it was made explicit/machine actionable?

- Dynamic generation of documentation that the user can navigate
- Sanity/correctness checks; proofs?
- Semantic handles to communicate with other systems

### Have you gone in this direction? How did you represent the knowledge then?

- Categories / axioms were a first step :-)

### How do you collaborate on knowledge representation?

- Collaborative development of code / doc / tests in the Sage sources

---
## What software do you have?

### What custom software are you running?

- 1.5 M lines for the Sage library + all the rest

### In which language?

- Python/Cython + myriads of languages used by subsystems

### How does it use the data and the knowledge?

- As a fundation for its hierarchy of classes/categories

- Those are used for code factorization, documentation, and generic testing

--

### How does your software act on represented knowledge?

- Some computations in the lattices of categories:

  X is a division ring and X is a finite set

  ==> X is a finite field

---
## Mixing (revisit?)

### Which knowledge is implicit in the data you have?

### Which knowledge is implicit in the software you have?

- Formal definition of axioms

  That can be manipulated by the machine

- Formal specifications of methods

  That can be manipulated by the machine

1. Anything else?

Nope
<section>
