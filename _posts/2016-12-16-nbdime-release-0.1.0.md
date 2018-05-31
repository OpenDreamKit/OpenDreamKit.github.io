---
layout: post
title: "nbdime 0.1.0"
author: Min Ragan-Kelley

date: 2016/12/16
redirect_from: "/activities/2016-12-16-nbdime-release-0.1.0/"
tags:
    - release
    - nbdime
    - reproducibility
---

nbdime 0.1.0 has been released, implementing tools for diffing and merging Jupyter notebooks

Key features:

- nbdiff for diffing notebooks in the terminal
- nbdiff-web for viewing a rich, rendered diff of two notebooks
- nbmerge for merging three notebooks, with automatic conflict resolution that should always guarantee a valid notebook, even with unresolved conflicts
- nbmerge-web for manually resolving conflicts when merging notebooks
- nbshow for quickly viewing a notebook in the terminal
- git integration for using the diff and merge tools on notebook files by default

- [Read the docs!](https://nbdime.readthedocs.io)
- [Contribute!](https://github.com/jupyter/nbdime)
- [Download!](https://pypi.python.org/pypi/nbdime)
