---
layout: post
author: Marijan Beg and Hans Fangohr
title: "Micromagnetics with Ubermag"
image: ubermag-use-case/ubermag-use-case.png
tags:
    - use-case
---

## Scenario

Tom is running micromagnetic simulations in order to explore how does
the result change when he varies one of many input paraneters. For
every value of an input parameter he has to write a separate
configuration file for OOMMF, run them all individually, and then
extract the results he is interested in for every single run. Finally,
he wants to share his entire computational workflow as a supplementary
information to his paper. In other words, Tom wants to automate the
entire process and make the entire computational workflow easily
reproducible by anyone.

## Context

Computational Science is emerging as the third pillar of research and
development in academia and in industry across all science and
engineering disciplines. Computational studies complement experimental
and theoretical studies, and are at times the only feasible way to
address research challenges, effective industrial design and
engineering of various products and systems.

In the field of magnetism, micromagnetic simulations have become well
established and are often the only possible technique for the
exploration of different magnetic phenomena. Their use becomes more
widespread and reliable as the micromagnetic models, simulation
techniques, and the processing power of computers advance.

Computational science brings its own challenges: results based on
computer simulation should be reproducible, ideally by the whole
research community but at the very least by the authors of the
publication. This requires, amongst other things, tracking of all
input parameters for a simulation, and all post-processing steps,
often for very many simulation runs.

By exposing Object Oriented MicroMagnetic Framework (OOMMF)
simulations to the general purpose programming language, all the
benefits of various Python scientific libraries become readily
available. In addition, by integrating micromagnetic simulations into
Jupyter notebook, the entire computational study can be preserved as a
single document, containing the code, its output, visualisation, and
human-readable text in a single shareable document.

## Suggestion of solution

He uses [Ubermag](https://ubermag.github.io), developed as a part of
OpenDreamKit, where OOMMF micromagnetic simulations are exposed to all
existing Python libraries and embedded in Jupyter. This way, in a
single document he can iterate through the entire parameter space he
is interested in, he can extract the results, analyse them, and
visualise them in a single shareable document.

Apart from that, the computational study he created in a single
document can be run "in the cloud" using Binder, so that anybody can
run his simulations without the need to have anything installed on the
hosting machine. Similar use-case developed as a part of OpenDreamKit project is [Publishing reproducible notebooks](https://opendreamkit.org/2017/11/02/use-case-publishing-reproducible-notebooks/).

## Ubermag instances

* [Ubermag Binder](https://mybinder.org/v2/gh/ubermag/oommfc/master?filepath=docs%2Fipynb%2Findex.ipynb)

## Discussion

By running his micromagnetic study inside the Jupyter notebook, Tom
achieved the following:

* He can easily set up his simulation using the Python-based domain specific langauge.
* He can use all the benefits of Python in running his simulations, such as running multiple simulations over large parameter spaces.
* He can easily access the resulting data and analyse them.
* He can visualise the data using both static and interactive plots (k3d).
* He can easily share his entire workflow as a single Jupyter notebook.

## What’s new since OpenDreamKit started

Before, for every value of an input parameter he had to write a
separate configuration file for OOMMF, run them all individually, and
then extract the results he is interested for every single run. Later,
sharing his computational workflow was difficult and that affected the
reproducibility of his work.
