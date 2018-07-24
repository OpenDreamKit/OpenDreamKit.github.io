---
layout: post
author: Nicolas M. Thiéry
title: Live online slides with SageMath, Jupyter notebooks, RISE and Binder
picture: use-cases-sage-jupyter-binder-rise2.png
tags:
    - use-case
    - front-page
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
her slides online, letting anyone -- during and after her talk --
browse the slides and play around with the provided examples.

Note: most of this blog can be adapted for any other computational
system that can be run in Jupyter like, for mathematics, GAP, Pari/GP,
or Singular.

## Some instances

- [The Rise contact involution on Tamari Intervals](https://github.com/VivianePons/public-notebooks/blob/master/TamariIntervalPosets/2018_ICERM_Presentation.ipynb),
  Viviane Pons
  ([GitHub repository](https://github.com/VivianePons/public-notebooks/),
   [Live slides](https://mybinder.org/v2/gh/VivianePons/public-notebooks/master?filepath=TamariIntervalPosets/2018_ICERM_Presentation.ipynb))

  [ ![Live slides with SageMath, Jupyter, and RISE](/public/images/use-cases-sage-jupyter-binder-rise2.png){:class="small-screenshot"} ](/public/images/use-cases-sage-jupyter-binder-rise2.png)

- [Computing huge subspaces of polynomials: Symmetries to the rescue!](https://github.com/nthiery/harmonic-modules/blob/master/talk.ipynb),
  Nicolas M. Thiéry
  ([GitHub repository](https://github.com/nthiery/harmonic-modules),
   [Live slides](https://mybinder.org/v2/gh/nthiery/harmonic-modules/master?filepath=talk.ipynb))

  [ ![Live slides with SageMath, Jupyter, and RISE](/public/images/use-cases-sage-jupyter-binder-rise.png){:class="small-screenshot"} ](/public/images/use-cases-sage-jupyter-binder-rise.png)

## Suggestion of solution

We will use the above slides from the repository
https://github.com/nthiery/harmonic-modules as running example.

### Components involved

- [SageMath](http://sagemath.org) (Sage for short) is a Python based
  general purpose system for computational mathematics.

- [Jupyter](jupyter.org) is a web application for authoring and
  sharing documents that contain live code, equations, visualizations
  and narrative text.

- [RISE](http://rise.readthedocs.io/) is a Jupyter extension
  to render Jupyter notebooks as slides, based on the popular HTML
  presentations framework [reveal.js](https://revealjs.com/).

- [Binder](https://mybinder.org) is a service that lets any user on
  the internet define, run, and share temporary virtual environments
  equipped with an arbitrary software stack
  ([examples](https://jupyter.org/try)).

### Installation

Install Jupyter's [RISE](http://rise.readthedocs.io/) extension in Sage.
From the terminal, and assuming the Sage command is available as `sage`:

    sage -pip install RISE
    echo "jupyter-nbextension install rise --py --sys-prefix" | sage -sh
    echo "jupyter-nbextension enable rise --py --sys-prefix"  | sage -sh

The two lines above have a bit of additional complexity because they
require accessing `pip` and `jupyter` from the Sage distribution; in
general, one would just do:

    pip install RISE
    jupyter-nbextension install rise --py --sys-prefix
    jupyter-nbextension enable rise --py --sys-prefix

### Authoring and showing slides

Open the Jupyter notebook that you want to turn into slides -- or
create a new one -- ; we will assume it's called `talk.ipynb`.
Activate the `Slideshow` metadata:

    View -> Cell Toolbar -> Slideshow

Choose the role each cell should play: for example start a new
slide (Slide), add a fragment to the current slide (Fragment), or
don't show up (Note).

Activate the slideshow by clicking in the corresponding button in the
toolbar.

For further details on authoring, showing, and configuring the
slideshow, see the [RISE documentation](http://rise.readthedocs.io/).

### Publishing the slides on a web page

This assumes that you have access on a web server to publish HTML
files that embed javascript.

The slides can be converted to static HTML pages with embedded
javascript with:

    jupyter nbconvert talk.ipynb --to slides

The produced file `talk.slides.html` can then be copied to the web
server. Readers will be able to see and navigate the slides; however
they won't be able to modify and run the examples.

### Publishing live slides on Binder

Add the notebook to a public git repository, for example on github.

Add metadata to that git repository to specify the software required
to run the computations. For SageMath, you can add the following
[Dockerfile](https://github.com/nthiery/harmonic-modules/blob/master/Dockerfile)
at the root of the repository.

Go to [mybinder.org](https://mybinder.org)`, specify the address of
the git repository (here https://github.com/nthiery/harmonic-modules/
) and the name of the file (here `talk.ipynb`). Click launch, and
voilà!

You can get from the binder page a URL to access directly the live
slides.

Note: the SageMath docker image is relatively big. Therefore the first
times the slides are accessed, or if it has not been accessed in a
while, Binder will typically take a couple minutes to launch: it
indeed needs to fetch the base SageMath image, build the new image
containing the Jupyter extensions and the notebook, and then copy this
image around between it's various machines (that building the image,
that storing them, and those running them).

## Alternatives

Instead of publishing on Binder, one may author the slides on
[cocalc](http://cocalc.com), and use its publish feature.
(TODO: double check that RISE works on cocalc).

Instead of using a Jupyter notebook, one may author in HTML (or some
format that can be converted to HTML), and use
[ThebeLab](https://github.com/minrk/thebelab) or
[SageCell][http://sagecell.sagemath.org/]to enable live computations.

## Advantages and drawbacks

Traditionally, most mathematicians author their slides using
LaTeX+Beamer, and display and publish them in PDF format.

- Authoring slides with Jupyter+RISE tends to be more lightweight

- LaTeX+Beamer gives fine control on the layout for authoring complex
  slides; some fine control can be achieved with Jupyter+RISE, using
  explicit html+css, but this is not as convenient.

- One may include live computations

- One may easily include multimedia documents

- One may edit the slides on the fly

- The semantic structure tends to get lost in PDF files, which goes in
  the way of accessibility. On the other hand, HTML based documents
  tend to support well web-based accessibility tools like screen
  readers.

## To do

- Estimate the number of instances;
- Provide a template.

## Time and expertise required

Assuming Viviane is familiar with Jupyter, writing her first slides
using RISE will take a few minutes and mastering it a few hours.

Assuming Viviane is familiar with version control and Jupyter (basic
lab skills taught at [Software
Carpentry](http://software-carpentry.org/), and the required software
required is packaged (conda, debian, docker container, ...), the
publishing part could take two hours the first time, and minutes later
on (typically by having a preconfigured repository where one stores
all of one's presentations)..

## What's new since OpenDreamKit started

- Apparition of [Binder](http://mybinder.org);
- Expansion of the [Jupyter](http://jupyter.org) technology;
- Apparition of [RISE](http://rise.readthedocs.io/)
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
