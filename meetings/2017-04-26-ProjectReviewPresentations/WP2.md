---
layout: slides_wp
title: "WorkPackage Report"
theme: white
transition: none
author: Viviane Pons
period: 1st reporting period
wp: 2
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
## Some background...

OpenDreamKit is built upon many communities of very active users and developers:

- different software 
- different research fields

---
## Our main goal

Improve and support those existing communities and turn the technical progress we do in OpenDreamKit into
**better science and research**.

--
## Our main goal

- **Community building**: Organizing workshops and conferences to reinforce our communities
- **Training**: Widespread our shared technical knowledge especially concerning new OpenDreamKit development
- **Dissemination and outreach**: foster larger communities, get new users and new developers
- **Exploitation**: make effective use of OpenDreamKit development in science and research 


---
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
### A new website

![](../site_screenshot.png)

--
### 58 Published posts

![](../site_tags.png)

--
### {{ delivs[2] }}

![](../emerging_technologies.png)

---
## Workshops and other events

22 meetings, developer and training workshops
have already been organized and co-organized by OpenDreamKit.

--
### Development workshops

 - Kickoff meeting (Orsay, 34 participants)
 - SageDays 70 (Berkeley, 16 participants)
 - Atelier PARI/GP 2016 (Grenoble, 36 participants)
 - GAP-SageMath Days (St Andrews, 19 participants)
 - Knowledge representation (St Andrews, 12 participants)
 - SageDays77 (Cernay, 15 participants)
 - WP6 orkshop (Bremen, 7 participants)
 - Atelier PARI/GP 2017 (Lyon TODO)
 - SageDays 85 (Cernay TODO)

--
### Dissemination activities

 - 6 SageDays on specific math-related topics
 - Sage training in developing countries
 - 14 talks (SciPy, EuroSciPy, CICM, ICMS,...)
 - 5 Micromagnetic VRE dissemination workshops (New Orleans x2, Dresden, York, Dublin)
 - Jupyter Day (Orsay, Nov. 2016)
 - **Women In Sage** (Paris, Jan. 2017)
 - **Computational Mathematics with Jupyter** (Edinburgh, Jan. 2017)

---
## Micromagnetic VRE and JOOMMF

TODO


---
## Women In Sage

January 2017, 19 participants

![](/public/images/womenInSage/group_photo_small.jpg)

--
### Goal: reduce the gender-gap

By targeting women, we reach a population that is often left out in classical events.

!["I had never heard of Sage Days": 35.3%, "I thought Sage Days were not for me": 11.8%, "I wanted to but never had the time nor the occasion": 17.6% , 
"I attended once": 17.6%, "I attended many times": 17.6%](/public/images/womenInSage/sage-days-attendance.png)


--
### Bring more women to Sage by helping through this first step

![What are the chances you attend a "normal" sage days in the future? 1:0 people, 2: 0 people, 3: 5 people, 4: 2 people, 5: 10 people](/public/images/womenInSage/future_sage_days.png)

--
### Very encouraging results

Contributions on [14 tickets](https://trac.sagemath.org/search?q=days82) during the week, 
6 of those which have been merged since the conference. 

**8 first contributions to sage source code**

And a high rate of satisfaction.

![How did you like the general atmosphere of the conference? 1:0 people, 2: 0 people, 3: 0 people, 4: 0 people, 5: 17 people](/public/images/womenInSage/atmosphere.png)



---
##  Computational Mathematics with Jupyter

TODO

---
## Looking forward to...

- 2 major dissemination events (2018, 2019)
- More developer workshops 
- More SageDays
- More training
- More Women In Sage


</section>


