---
layout: post
author: Nicolas M. Thiéry
title: Live online slides with SageMath, Jupyter, RISE and Binder (DRAFT)
picture: use-cases-binder-logbook.png
tags:
    - use-case
    - best-practice
    - open-science
    - reproducibility
    - jupyter
    - binder
    - sagemath
---

## Scenario

Viviane is writing slides for a talk; she would like to include live
SageMath computations in her slides. She also would like to publish
her slides online, letting anyone during and after her talk read the
slides and play around with the provided examples.

[ ![a binder logbook screenshot](/public/images/use-cases-binder-logbook.png){:class="small-screenshot"} ](/public/images/use-cases-binder-logbook.png)

## Suggestion of solution

1.  Install Jupyter's RISE plugin in Sage:

        sage -pip install tqdm RISE
        echo "jupyter-nbextension install rise --py --sys-prefix" | sage -sh
        echo "jupyter-nbextension enable rise --py --sys-prefix"  | sage -sh

TODO 


## Some instances

- [Computing huge subspaces of polynomials: Symmetries to the rescue!](https://github.com/nthiery/harmonic-modules/blob/master/talk.ipynb),
  Nicolas M. Thiéry

  [GitHub repository](https://github.com/nthiery/harmonic-modules)

  [Live slides](https://mybinder.org/v2/gh/nthiery/harmonic-modules/master?filepath=talk.ipynb)


## To do

- Estimate the number of such instances;
- Provide a template.

## Time and expertise required


## What's new since OpenDreamKit started

## OpenDreamKit contribution

