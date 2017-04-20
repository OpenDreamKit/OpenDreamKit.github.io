---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Benoît Pilorget
period: 1st reporting period
wp: 1
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
---
## Introduction

Objectives
Establish and maintain an effective contract, project, and operational management approach, ensuring
# Effective and timely implementation of the project
# Quality control of the results
# Risk and innovation management of the project as a whole as well
# Timely and necessary interaction with the EC and other interested parties

## Outline

## Use of Person-Months in WP1


## Task 1.1: Project and financial management

## Task 1.2: Quality assurance and risk management

## Task 1.3: Innovation management

## Deliverables

{% comment %}
The include bellow gets the finished deliverables of the work pakacge and put the list in "delivs"
{% endcomment %}

{% include deliverables_slides.html %}

{{ delivs | size }} deliverables were submitted.

{% for d in delivs %}
- {{ d }}
{% endfor %}

--
### {{ delivs[2] }}

some more info on this deliverable

--
### {{ delivs[3] }}

some more info on this deliverable



</section>


