---
layout: post
author: Nicolas M. Thiéry
title: Publishing reproducible logbooks
image: use-cases-binder-logbook.png
tags:
    - use-case
    - best-practice
    - open-science
    - reproducibility
    - jupyter
    - binder
---

## Scenario

Jane has written a (math) paper based on experimentations. She would
like anyone to be able to reproduce her calculations.

[ ![a binder logbook screenshot](/public/images/use-cases-binder-logbook.png){:class="small-screenshot"} ](/public/images/use-cases-binder-logbook.png)

## Suggestion of solution

1.  Describe the experimentation as [Jupyter notebooks](http://jupyter.org),
    mixing prose, code, and outputs (think of them as logbooks);

2.  Publish them on a public repository (e.g. on
    [GitHub](https://github.com));

3.  Make that repository [Binder-ready](/tag/binder) by describing the
    software stack required; for details, see the
    [Binder documentation](https://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder);

4.  Bonus: make the paper itself active

    To do: explore using e.g. [latexml](https://dlmf.nist.gov/LaTeXML/)+[thebe](https://github.com/minrk/thebelab)?.

<!-- If executing the examples requires a non-trivial install/build step,
also consider
[using a `Dockerfile`](http://mybinder.readthedocs.io/en/latest/dockerfile.html),
and auto-building the Docker image on <https://hub.docker.com/>. !-->

## Some instances

- [Computing isomorphisms and embeddings of finite fields](https://github.com/defeo/ffisom),
  Ludovic Brieulle, Luca De Feo, Javad Doliskani, Jean-Pierre Flori and Éric Schost,
  [arXiv:1705.01221 [cs.SC]](https://arxiv.org/abs/1705.01221)
  [![launch binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/defeo/ffisom/master?filepath=notebooks)

- [The 0-Rook monoid and its representation theory](https://github.com/hivert/Jupyter-Notebooks),
  Hivert and Gay
  [![launch binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/hivert/Jupyter-Notebooks/master?filepath=rook-0.ipynb)

## To do

- Estimate the number of such instances;
- Provide a template.

## Time and expertise required

Assuming Jane is familiar with version control and Jupyter (basic lab
skills taught at [Software Carpentry](http://software-carpentry.org/),
that the experiments were prepared as notebooks, and the software
required is packaged (conda, debian, docker container, ...), the
publishing part could take two hours the first time, and half an hour
later on.

## What's new since OpenDreamKit started

- Apparition of [Binder](http://mybinder.org);
- Expansion of the [Jupyter](http://jupyter.org) technology;
- Better packaging and interfacing of math software.

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
- Advertising, training, providing a template (TODO!), ...

