---
layout: page
title: Use cases
slider: True
slider_heading: Use Cases and Success Stories
slider_sentence: What can we do for you
image: math.png
menu: project
menu_order: 1
slider_order: 1
---

{% for post in site.tags['use-case'] %}
    {% include post_link.html %}
{% endfor %}

## Upcoming use case descriptions

- Publishing live talk slides with SageMath + Jupyter + Rise + binder

- A group of coauthors wanting to collaborate on code/paper/...

- A lab wanting to provide remote access to its computing resources

- Making a software package trivial to try and access (reproducible
  live documentation and live demos, easy installation)

- Providing (remote) access to (hosted) interactive software to the
  students in a class (CoCalc / JupyterHub/...)
  (see also this [post](http://opendreamkit.org/2018/03/15/jupyterhub-binder-convergence/))

- Providing researchers with easy access to computing resources,
  software and data: University/Institution/European Infrastructure
  wide deployment

- A community wanting to deploy a dedicated VRE (e.g. JOOMMF's VRE)

- WP6 use case: multi-system math calculations with the Math-in-the-Middle

## About

This (in-the-works) page collects a range of typical use cases that
the OpenDreamKit project aims at tackling. It targets end-users,
reviewers, and followers. For each use case, a document:

- describes a typical scenario;
- suggests operational solutions (or upcoming solutions) and best
  practices, with a rough assessment of the technical difficulty to
  set it up;
- describes the progress during the OpenDreamKit project;
- links to exemplary instances;
- showcases OpenDreamKit contributions.

