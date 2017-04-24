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
   * VRE development
 - Inform VRE design
 - Facilitate collaboration via VREs

---
## "Crowdsourcing"

 - [Matheoverflow](https://mathoverflow.net/)
 - [Polymath projects](http://michaelnielsen.org/polymath1/index.php?title=Polymath1)
 - ...

---
## VREs in teaching and dissemination

 - interactive textbooks (20+ (?) years on)
 - VREs in lab-based courses, classes and assignments
 - [wikipedia](https://en.wikipedia.org/) and wiki's 

---
## Development of open-source software

 - version control systems and VREs
 - [github](http://github.com) and pull requests
 - crowdfunding (in academia too)

---
## Deliverables

{% comment %}
The include below gets the finished deliverables of the work pakacge and put the list in "delivs"
{% endcomment %}

{% include deliverables_slides.html %}

{{ delivs | size }} deliverables were submitted.

{% for d in delivs %}
- {{ d }}
{% endfor %}

--
### Some examples from the report 

 - [An example of devs stats for GAP](http://users.ox.ac.uk/~coml0531/wp7ex/docs/gap-system/gap/contributors.html)
 - [An example of devs stats for SymPY](http://users.ox.ac.uk/~coml0531/wp7ex/docs/sympy/sympy/contributors.html)

--
### {{ delivs[3] }}

some more info on this deliverable

---
## Ongoing deliverables 

 - D7.2 prioritisation of tickets on [trac servers](https://trac.sagemath.org/)
   (due month 24), well on target
 - D7.7 game-theoretic analysis of development practices in open source
   first publication [already out](http://dl.acm.org/citation.cfm?id=2936934)
 - ...

---
## VREs, databases, and reproducibility

 "Lost" results and their checking: from static
 to dynamic

 - A.E.Brouwer's (TU Eindhoven) [DB](http://www.win.tue.nl/~aeb/graphs/srg/srgtab.html) of strongly regular graphs
 - now [in Sagemath](https://doi.org/10.1007/s10623-016-0264-x); errors in DB found

Some constructions are being contributed by authors! 

Next: [tables of linear codes](http://codetables.de/)


</section>


