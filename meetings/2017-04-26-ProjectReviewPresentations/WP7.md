---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Dmitrii Pasechnik
period: 1st reporting period
wp: 7
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">

## Social aspects of VREs

 - Understand collaboration in VREs
   * research ("crowdsourcing", etc.)
   * teaching and dissemination
   * maths software (including VREs) development
 - Inform VRE design
 - Facilitate collaboration via VREs

---
## "Crowdsourcing"

 - [Mathoverflow](https://mathoverflow.net/)
 - [Polymath projects](http://michaelnielsen.org/polymath1/index.php?title=Polymath1)

---
## VREs in teaching and dissemination

 - interactive textbooks (20+ (?) years on)
 - VREs in lab-based courses, classes and assignments
 - [wikipedia](https://en.wikipedia.org/) and wiki's 

---
## Open-source software and documents

 - ODK proposal preparation [timeline](https://github.com/OpenDreamKit/OpenDreamKit/graphs/contributors?from=2014-11-23&to=2015-03-07&type=c)
 - version control systems and VREs
 - [github](http://github.com) and pull requests
 - crowdsourcing (in academia too!)

---
## Deliverables

{% comment %}
The include below gets the finished deliverables of the work package and put the list in "delivs"
{% endcomment %}

{% include deliverables_slides.html %}

{{ delivs | size }} deliverable was submitted.

{% for d in delivs %}
- {{ d }}
{% endfor %}

--
### Some examples from the report 

 - [Example of development statistics for GAP](http://users.ox.ac.uk/~coml0531/wp7ex/docs/gap-system/gap/contributors.html)
 - [Example of development statistics for SymPY](http://users.ox.ac.uk/~coml0531/wp7ex/docs/sympy/sympy/contributors.html)

--
### {{ delivs[3] }}

some more info on this deliverable

---
## Ongoing deliverables 

 - D7.2 prioritisation of tickets on [trac servers](https://trac.sagemath.org/)
   (due month 24), well on target
 - D7.5 report on relevant research on sociology of mathematics and lessons for
   design on ODK VRE (due month 42), parts I-III; part I ready, available
   internally.
 - D7.7 game-theoretic analysis of development practices in open source:
   first publication [already out](http://dl.acm.org/citation.cfm?id=2936934)

---
## VREs, databases, and reproducibility

 "Lost" results and their checking: from *static* (numerical parameters)
 to dynamic (VRE provides examples and correctness certificates)---related to WP6 (databases).

 - A.E.Brouwer's (TU Eindhoven) [DB](http://www.win.tue.nl/~aeb/graphs/srg/srgtab.html) of strongly regular graphs
   * now [in Sagemath](http://doc.sagemath.org/html/en/reference/graphs/sage/graphs/strongly_regular_db.html#sage.graphs.strongly_regular_db.strongly_regular_graph); 
   errors in DB [found](https://doi.org/10.1007/s10623-016-0264-x)
   * constructions are (slowly) being contributed by authors! 

---
## Next

 - Group Numbers reproducibility project - [crowdsourced enumeration of finite groups](https://github.com/alex-konovalov/gnu)
 - making [Tables of linear codes](http://codetables.de/) *dynamic*, i.e. examples are built by a VRE
  dynamically; users contribute examples and implementations
 - similar combinatorial data: Hadamard matrices, designs, etc. 

---
## To be delivered

 - (demo) Jupyter notebook Live Poster (month 36)
 - Review of new publication mechanisms (month 42)
 - Micromagnetic VRE environment evaluation report (month 48)


</section>

