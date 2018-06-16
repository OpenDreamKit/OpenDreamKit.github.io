---
layout: page
title: "Progress report for Sheffield/Leeds"
theme: white
transition: none
author: Tania Allard and Michael Croucher
period: Reporting period from March 2017 to June 2018
---

# {{ page.title }}

{{ page.author }}


{{ page.period }}

---

## Finance and administration



---
## Hiring


---
## Achievements

- Supported a number of lecturers in Sheffield to migrate to Jupyter and CoCalc
(formerly SageMathCloud). Also, provided continued support to those that had already been using CoCalc and
Jupyter notebooks for their courses.
These included lecturers from Computer Science, Physics, Biomedical
Science, Bioinformatics, and Materials Science.
([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29))
- The previously generated CoCalc tutorial was extended by adding tutorial sections for students having courses in CoCalc as well as with a hands-on tutorial for lecturers to get started. The material can be found as a website at [https://tutorial.cocalc.com/](https://tutorial.cocalc.com/) (The repository for this is located at:[https://github.com/sagemathinc/cocalc_tutorial](https://github.com/sagemathinc/cocalc_tutorial)) ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29)).
- Developed a [Jekyll template](https://github.com/trallard/Modules-template)
for use by academics and researchers using Jupyter notebooks for course materials and dissemination. Such a template allows the creation of Jupyter notebooks based websites using Jekyll, which is the
default static website framework supported by GitHub. It also allows for easy display of notebooks connected to cloud computing resources such as Microsoft Azure Notebooks ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29)).
  - Examples of courses using such templates can be found at:
    - [Bioinformatics Awareness Days](https://trallard.github.com/BAD_days/)
    - [COM3240 Adaptive Intelligence](http://bitsandchips.me/COM3240_Adaptive_Intelligence/)
  - The documentation for the template can be found at: [http://trallard.github.io/Modules-template-docs/](http://bitsandchips.me/Modules-template-docs/)
- Developed a Python package:  [nbjekyll](https://github.com/trallard/nbjekyll) that complements the Jekyll template developed .
This package converts Jupyter notebooks into .md files that can be readily usable by Jekyll (this uses nbformat for the conversion).
It also uses nbval to perform notebook validation and add custom headers indicating the last update date, version and test status of the notebook ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29)).


---
## Work in progress

- Involvement in the Sheffield Machine Learning Network: working with the Machine Learning group at Sheffield to leverage the use of Jupyter notebooks and related technologies (e.g. code cafe, coding dojos) ([T2.3](https://github.com/OpenDreamKit/OpenDreamKit/issues/26))
- CrePythonation of an online journal based on Jupyter notebook submissions and with a content review performed in GitHub (the first volume will be generated from a sprint/hackathon) ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29),
[T2.3](https://github.com/OpenDreamKit/OpenDreamKit/issues/26))
- The infrastructure for the journal itself is now in the form of a WebApp and deployed using Heroku
- The contents for the journal can be found at: [https://github.com/MCNotes](https://github.com/MCNotes)
  - The review process will be fully automated via GitHub issues and PR and a bot has been created to handle most of the review admin and validation tasks ([https://github.com/MCNotes/wintermute](https://github.com/MCNotes/wintermute))

---
## Workshops and dissemination activities

- Developed and delivered a workshop on using Jupyter notebooks for reproducible research for the 2nd international Research Software Engineering conference. The workshop was one of the most popular across the entire conference and, as such, we were asked to deliver it twice in order to meet demand. Workshop materials at https://github.com/trallard/JNB_reproducible and blog post at [RSE Sheffield blog](http://www.rse.shef.ac.uk/blog) which was reposted in the [Software Carpentries Blog](https://software-carpentry.org/blog/2018/01/rse-conf-repost.html)
([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29)).
- Developed and delivered Bioinformatics Awareness Days [https://github.com/trallard/BAD_days](https://github.com/trallard/BAD_days) in Collaboration with Prof. Luisa Cutillo of Parthenope University of Naples ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29)).
- Developed training materials and provided training for over 95 women in the last 12 months at Sheffield and Manchester in partnership with CodeFirstGirls ([D2.17](https://github.com/OpenDreamKit/OpenDreamKit/issues/252),
[T2.6](https://github.com/OpenDreamKit/OpenDreamKit/issues/29),[T2.5](https://github.com/OpenDreamKit/OpenDreamKit/issues/28)).
- Participation in the Diversity and Inclusion in Scientific Computing unconference by direct invite of NUMFOCUS
([T2.5](https://github.com/OpenDreamKit/OpenDreamKit/issues/28)).
- Workshop and open materials on Reproducible analysis in Python: these materials cover the essentials on how to develop workflows with a reproducibility approach
  - The workshop was first delivered in PyCon 2018 to over 60 attendees from all over the world
  - The materials were further extended to add more content on Jupyter notebook validation using nbval and also on property based testing
  - All the materials are licensed under CC-BY and can be found at [https://github.com/trallard/ReproduciblePython](https://github.com/trallard/ReproduciblePython) and are also shared using binder
  - As a follow up for this workshop Tania Allard has been invited to give a talk about reproducibility in data pipelines at the [RAPIDS conference in London](https://www.dotmesh.com/blog/rapids-2018/)
- Web data in Python for non computer science people: a set of Jupyter notebooks and materials on how to use Python to collect, clean and analyse web data was developed in conjunction with Sheffield Research Methods Institute, in addition to developing and open sourcing the materials a workshop on the topic and using the materials was taught on May 18th, 21st, 22nd and 23rd along with other Software Carpentry workshops.
  - The materials can be found at [https://github.com/trallard/WebData_Python](https://github.com/trallard/WebData_Python) they are licensed under CC-By and also shared using binder




</section>
