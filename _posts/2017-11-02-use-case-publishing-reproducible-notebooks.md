---
layout: post
author: Nicolas M. Thiéry
title: Publishing reproducible logbooks
image: use-cases/reproducible_logbook_scenario.png
tags:
    - use-case
    - front-page
    - best-practice
    - open-science
    - reproducibility
    - jupyter
    - binder
youtube: a5i42lSj-L4
---

## Scenario

Jane has written a (math) paper based on her experiments. She would
like anyone to be able to reproduce, check, and improve her calculations.


## Suggestion of solution

[ ![picture of the suggested solution](/public/images/use-cases/reproducible_logbook.png)](/public/images/use-cases/reproducible_logbook.png)


1.  She describes the experiments as [Jupyter notebooks](http://jupyter.org),
    mixing prose, code, visualization, together with resources: source
    code, data, media (think of them as logbooks);

2.  She publishes them on a publicly hosted repository
    (e.g. on [GitHub](https://github.com), ...);

3.  She makes that repository [Binder-ready](/tag/binder) by describing the
    software required to run the notebooks; for details, see the
    [Binder documentation](https://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder),
    and check the configuration of the examples below.

## Some instances

- [Computing isomorphisms and embeddings of finite fields](https://github.com/defeo/ffisom),
  Ludovic Brieulle, Luca De Feo, Javad Doliskani, Jean-Pierre Flori and Éric Schost,
  [arXiv:1705.01221 [cs.SC]](https://arxiv.org/abs/1705.01221)
  [![launch binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/defeo/ffisom/master?filepath=notebooks)<br>
  [ ![a binder logbook screenshot](/public/images/use-cases/reproducible_logbook_example.png){:class="small-screenshot"} ](/public/images/use-cases/reproducible_logbook_example.png)

- [The 0-Rook monoid and its representation theory](https://github.com/hivert/Jupyter-Notebooks),
  Hivert and Gay
  [![launch binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/hivert/Jupyter-Notebooks/master?filepath=rook-0.ipynb)

- [Estimating variances in time series linear regression models using
  empirical BLUPs and convex
  optimization](https://github.com/fdslrm/EBLUP-NE), Martina Hančová,
  Gabriela Vozáriková, Andrej Gajdoš and Jozef Hanč,
  [arXiv:1905.07771](https://arxiv.org/abs/1905.07771)
  * [`Python based notebooks using CVXPY and Scipy`](https://mybinder.org/v2/gh/fdslrm/Binder-CVXPY/master?filepath=index.ipynb) - [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/fdslrm/Binder-CVXPY/master?filepath=index.ipynb)
  * [`Python based notebooks using SageMath`](https://mybinder.org/v2/gh/fdslrm/Binder-Sage/master?filepath=index.ipynb) - [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/fdslrm/Binder-Sage/master?filepath=index.ipynb)
  * [`R based notebooks`](https://mybinder.org/v2/gh/fdslrm/Binder-R/master?filepath=index.ipynb) - [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/fdslrm/Binder-R/master?filepath=index.ipynb)
  


## Discussion

By publishing the log books and resources on a publicly hosted
repository, Jane also guarantees their long term archival thanks
to the [Software Heritage](http://softwareheritage.org/) project.

The proposed solution takes care of many of the basic hurdles for
reproducibility, especially if following the recommended best
practices (like pinpointing the versions of the dependencies). Full
reproducibility however is intrinsically hard and many aspects are not
tackled, like numerical instability, long term availability of
software or long term backward compatibility of software and hardware.
Also, only relatively lightweight calculations are covered.
Nevertheless this hopefully covers the 20% of Pareto's principle.

<!--  Bonus: make the paper itself active !-->
<!-- TODO: explore using e.g. [latexml](https://dlmf.nist.gov/LaTeXML/)+[thebe](https://github.com/minrk/thebelab)?.!-->
<!-- TODO: publicity, indexing, referencement !-->
<!-- If executing the examples requires a non-trivial install/build step,
also consider
[using a `Dockerfile`](http://mybinder.readthedocs.io/en/latest/dockerfile.html),
and auto-building the Docker image on <https://hub.docker.com/>. !-->

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

## Credits

<small>
  <ul><li>Illustration: Juliette Taka & Nicolas M. Thiéry. (2018).<br>
    Publishing reproducible logbooks explainer comic strip.<br>
    Zenodo. <a href="https://doi.org/10.5281/zenodo.4421040"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.4421040.svg" alt="DOI"></a>. CC-BY-SA.
  </ul>
</small>

