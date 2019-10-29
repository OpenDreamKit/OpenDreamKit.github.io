---
layout: post
author: Marcin Kostur
title: Authoring interactive books with Jupyter notebooks
image: book_authoring1.png
tags:
    - use-case
    - best-practice
    - open-science
    - reproducibility
    - jupyter
    - binder
---

## Introduction

The ease of authoring manuscripts is a key to wide application of any
new technology in educational practice. Generally speaking, academic
teachers lecturing on computer science tend to be fluent in all kinds
of computer technology and happily adopt new ones. However, as topics
get further and further from computer science as in theoretical
mechanics or dynamical systems technology, technology literacy becomes
a barrier. It can often happen that such subjects are not integrated
with computer technologies during teaching at all.

## Scenario

John is lecturing theoretical mechanics and wants to integrate computer
algebra calculation in his course. He already has examples and ideas
how to use SageMath to creatively improve problem solving in
mechanics. He wants to use a single system for both his own
experiments with algebra involved in mechanics and for authoring
materials for students. Additionally, he wants students to be able to:

- work with examples which are published and create own
  solutions of given problems and return then for grading.

- perform simple and short interaction with a code or user interface
  during a lecture or a tutorial

- read printed version of lecture notes.

## Suggestion of solution


1.  He uses [Jupyter notebook](http://jupyter.org)  with SageMath kernel,
    mixing prose, code, visualization, together with resources: source
    code, data, media;

2.  He publishes them on a publicly hosted repository using [a
    template](https://github.com/OpenDreamKit/authoring_cookie_cutter). In
    this example the repository is [Binder-ready](/tag/binder); for
    details, see the [Binder documentation](https://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder)

3.  He shares the link to the repository with students.


## Some instances


- [Introduction to Python for Computational Science and Engineering](https://github.com/fangohr/introduction-to-python-for-computational-science-and-engineering),
  Hans Fangohr
  [![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/fangohr/introduction-to-python-for-computational-science-and-engineering/library-current-versions?filepath=index.ipynb)

- [Mechanics with SageMath](https://github.com/marcinofulus/Mechanics_with_SageMath),
  Marcin Kostur, Jerzy Łuczka
  [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/marcinofulus/Mechanics_with_SageMath/master?filepath=index.ipynb)


[ ![The interactive element in Mechanics course ](/public/images/book_authoring2.png){:class="display"} ](/public/images/book_authoring2.png)



## Alternative solutions

There are many other possibilities to write interactive textbooks. This workflow can be adapted to use automatic tests that can reexecute all the material in the notebook to verify that the newly calculated outputs match up to trivial differences, with the recorded outputs. This uses the NBVAL tool – developed as part of OpenDreamKit and is implemented in Introduction to Python for Computational Science and Engineering textbook.

One can use more sophisticated typesetting and documentation tools. One possibility is Sphinx system, which is used to build documentation for Python packages. It is capable of better control of the format of the book. Examples are interative textbooks on [Linear Algebra](http://visual.icse.us.edu.pl/LA/) and [Nonlinear Processes in Biology](http://visual.icse.us.edu.pl/NPB/) which have been developed as part of OpenDreamKit [D2.9](https://github.com/OpenDreamKit/OpenDreamKit/issues/49). In this scenario,  authoring is done using reStructuredText format. It provides the ability to create interactive code cells using [SageCell](https://sagecell.sagemath.org/) or [thebelab](https://github.com/minrk/thebelab). It requires more effort to setup the environment and to author materials, but one gain better interactivity features and more control onver  the output. Addtionally, using the sphinx system one can produce high quality "static" PDF format.


## Discussion


By publishing the course materials in the form of notebooks and using
provided the template repository, John easily achieves following:

1. He can compile selected notebooks to a book form using LaTeX
typesetting software. It can be printed and used in non-interactive
way as a regular book.

2. Using Binder, notebooks can be launched at any time without any
authorization. In this way is it possible to use in during lecture or
a tutorial as live interactive examples.

3. The repository can be cloned and on students computers. This allows
for individual work of students on their assignments or exploration of
the subject.


## Time and expertise required

Assuming John is familiar with version control and Jupyter (basic lab
skills taught at [Software Carpentry](http://software-carpentry.org/),
and is fluent in using Jupyter notebook, the initial setup of the
course repository could take few hours the first time. Further
development should not generate any significant overhead compared to
regular use of Jupyter notebook.

## What's new since OpenDreamKit started

- Apparition of [Binder](http://mybinder.org);
- Expansion of the [Jupyter](http://jupyter.org) technology;
- Providing demonstrators as examples of using interactive books
  technology in practice.
- Providing 3d visualization software which can extent application of Jupyter
  notebook rely on 3d visualisation (e.g. fluid dynamics)

## OpenDreamKit contribution

- Development and contributions to Jupyter interfaces (kernels) for
  math software (GAP, Pari/GP, SageMath, Singular) and C++;
  see [D.47](https://github.com/OpenDreamKit/OpenDreamKit/issues/96).
- Contributions to the packaging of math software (GAP, Pari/GP,
  SageMath, Singular, ...); see
  [D3.1](https://github.com/OpenDreamKit/OpenDreamKit/issues/58)
  and
  [D3.10](https://github.com/OpenDreamKit/OpenDreamKit/issues/59);
- Early adoption of Binder;
- Contributions to the
  [deployment of new Binder instances](https://github.com/OpenDreamKit/OpenDreamKit/issues/238);
- Advertising, training,
- Providing  [a template](https://github.com/OpenDreamKit/authoring_cookie_cutter)
  of interactive book repository,
- Development of 3D visualization software for Jupyter notebook
  [D4.12](https://github.com/OpenDreamKit/OpenDreamKit/issues/86)
- Development of demonstrators of interactive books technology:
  [D2.14](https://github.com/OpenDreamKit/OpenDreamKit/issues/39)
