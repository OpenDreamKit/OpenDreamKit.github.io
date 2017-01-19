---
layout: slides
title: "Progress report for Zurich"
theme: white
transition: none
author: Paul-Olivier Dehaye
period: Reporting period from Sept. 2015 to February 2017
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{ page.title }}

{{ page.author }}

{{ page.period }}
---
## Financial and administrative setup

- Employment rate:     0% until September 2016, then 100%
- Significant administrative hurdle for transition, in the lead up to September 2016 
- Resolved thanks to action by OpenDreamKit leadership

---
## Hiring

- Technically, I (POD) was rehired by UZH as a Wissenschaftlicher Mitarbeiter (scientific collaborator)
- Until end July 2017 (month 23)
- Always planned to have just me in Zurich

---
## Achievements

Exclusively WP6 related:
- St Andrews workshop
- co-author: "Interoperability in the OpenDreamKit Project: The Math-in-the-Middle Approach" 
- part of D6.2: *Initial D/K/S base Design* 
- part of D6.3: *Design of Triform (D/K/S) Theories*

---
## Main upcoming tasks and deliverables

- D6.4 [*Conversion of existing and new Databases (LMFDB, OEIS, FINDSTAT) to interoperable System*](https://github.com/OpenDreamKit/OpenDreamKit/issues/138) (UZH, due: 24)
- **D6.5** [*PYTHON/SAGE Computational Foundation Module in OMDoc/MMT*](https://github.com/OpenDreamKit/OpenDreamKit/issues/139) (Jacobs, due: 24)
- **D6.8** [*LMFDB Algorithm Verification with respect to a Triformal Theory*](https://github.com/OpenDreamKit/OpenDreamKit/issues/142) (UZH, due: 36) See issue [#201](https://github.com/OpenDreamKit/OpenDreamKit/issues/201)
- D6.11 [*LMFDB Integration of Algorithms, Data and Presentation*](https://github.com/OpenDreamKit/OpenDreamKit/issues/135) (Jacobs, due: 48)
- T6.7->D6.4 *FindStat case study* (M18-M30@.5)
- T6.8->D6.8,D6.11 *LMFDB case study* (M12-M24@.25; M24-M48@.7)

---
## WP6 goals: overall

![text](WP6_overall.jpg)

---
## WP6 goals: LMFDB data

![text](WP6_LMFDB_data_01.jpg)

---
## WP6 goals: LMFDB data

![text](WP6_LMFDB_data_02.jpg)

---
## WP6 goals: codec

![text](WP6_LMFDB_codec.jpg)

---
## WP6 goals: LMFDB chain

![text](WP6_LMFDB_chain.jpg)

---
## WP6 goals: D6.4 

*Conversion of existing and new Databases ( LMFDB, OEIS, FINDSTAT) to unified interoperable System*

(cue MK)

---
## WP6 goals: overall

![text](WP6_overall.jpg)

---
## WP6 goals: no EC!

![text](WP6_overall_no_EC.jpg)

---
## WP6 goals itemized: 

![text](WP6_overall_numbered.jpg)

---
## What we devised?

 1. MitM system in MMT 
 1. Knowledge into MMT
 1. Data interacted through MMT
 1. Code generation through MMT
 1. Code verification through MMT
 1. Language formalisation through MMT
 1. Presentation through MMT (WP4)

Two types of problems: what and where. 

What: Simultaneously too much and too little. 

Where: Not taking enough into account of math and social complexity. 

---
## Could do more

 - OEIS, FindStat and LMFDB should benefit from WP4, especially on top of D6.4 (but mysterious D4.16!!!)

---
## Should shift focus

 - no computational foundation (D6.5, D6.7): Python/Sage ---> GAP/SAGE
 - no verification (D6.8): LMFDB Algorithm Verification ---> Curated MitM Ontology covering parts of LMFDB, OEIS, FINDSTAT, GAP, SAGE knowledge bases

</section>
