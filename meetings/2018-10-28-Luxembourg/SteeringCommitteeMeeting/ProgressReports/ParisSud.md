---
layout: page
title: "Progress report for Université Paris-Sud"
theme: white
transition: none
author: Viviane Pons, Benoît Pilorget, and Nicolas M. Thiéry
period: Reporting period from March 2017 to October 2018
---

# {{ page.title }}

{{ page.author }}

{{ page.period }}

--
## Finance and administration

- All bank transfers for payment of the 1st Reporting Period were made to partners.
- Unused funding from Jacobsuni has been transferred back to UPSUD ad is being transferred to FAU. 

--
## Hiring

### One Project Manager on WP1 and WP2

UPSUD is hiring a new project manager following the departure of B. Pilorget on August 31st 2018. We have already had 2 unsuccesful runs of interviews since April 2018, we are running a third one now and hope to hire somebody soon.

### One postdoc on WP6

UPSUD hired on the O1/01/2018 , and for a duration of 18 months, Dr Florian Rabe as Postdoc. He will be working half-time on WP6 and WP4. Florian will be spending the other half of his time at FAU with Pr. Kohlhase working on the same thematics.

### One Research Software Engineer

Using leftovers from Florian's half post-doc and other planned
positions, UPSUD has hired Odile Benassy as Research Software Engineer
early June until the end of the project. She is working on the
technical/Jupyter side of Florian's tasks in WP4 and WP6, and in
particular [T4.5 dynamic documentation and exploration system](https://github.com/OpenDreamKit/OpenDreamKit/issues/73)

### Three part-time trainees on Communication

Elisabeth Pluquet, Jeannette Nwedeck, Dilan Kocabey. The three of them were on their second year of Master's degree in digital communciation.Half of their time was spent in a company, the other half was spent working on two academic projects with their teacher. OpenDreamKit was one of this projects. Monitored by B. Pilorget and V. Pons their work focused on: writing a communication plan, developing the website towards end-users, and creating media (videos, articles, interview etc.) to help us communicate and disseminate outside our communities.

The main outcome of their work has been a new design for the website and some directions for video interviews.

--
## Achievements

### 1st Review

The [review of the first Reporting Period (18 months)](http://opendreamkit.org/meetings/2017-04-26-ProjectReviewPresentations/)
was organized in Brussels by UPSUD on the 26th of April 2017. All
in all the work due for M18 was done and the overall
feedback was very positive from our Project Officer and reviewers. See
Nicolas Thiéry's
[debriefing notes](http://opendreamkit.org/2017/04/26/first-project-review-debriefing/)
for more information.

### 2nd amendment

This amendment catered for the move of Michael Kohlhase and
Hans Fangohr and their respective teams to new institutions. This led
to the addition of to locations (FAU and XFEL) respectively and the
termination of Southampton.

### Workplan revisions and 3rd amendment

At the occasion of the review, we were strongly encouraged to propose
revisions to our work plan, based on our latest vision of the project
and its landscape, in order to maximize the effectiveness and impact
of our resources.

UPSUD led the process, getting work package and site leaders involved,
as well as our advisory board. Our proposals were accepted with very
minor changes by the reviewers and implemented in a third amendment to
the grant agreement:

- new milestones were added, Key Performance Indicators were modified
- Objective 6 (social studies) canceled
- T7.4 integrated in T2.8
- T7.1, T7.2 and T7.3 cancelled and related resources were transferred
  in favour of T2.6, T3.3, T3.3 and T5.7
- Remaining work on WP7 moved to other work packages
- Consolidation of deliverables to reduce their number

This amendment was the occasion to officially terminate Jacobsuni and
UZH where all resources had been spent and no personnel remained.

All changes were implemented in the [github repository](https://github.com/OpenDreamKit/OpenDreamKit/).

The amendment is fully complete with the signature of the
Commission. 

### 4th amendment

A fourth amendment is required to allow the change of position of Mike Croucher to the University of Leeds. The principle of this amendment was accepted both by the Commission and the Steering Committee. Though practicalitites are not over with yet, the retroactive addition of the partner (and termination of USHEFFIELD) will start from 01/05/2018.

--
## Work in progress

### OpenDreamKit and EOSC

UPDATE BY NICOLAS???

* Strategy: last November, N. Thiéry, B. Pilorget, and H. Fangohr
  participated to two events in Brussels dedicated to the the future
  European Open Science Cloud (EOSC). We aimed at understanding this
  future network and what opportunities it offered for our
  communities. A [blogpost](http://opendreamkit.org/2017/12/06/EOSC/)
  was written on the matter. For the time being, ODK has not yet
  expressed official support to EOSC. The steering committee is
  welcome to express their interest or disinterest in this project.

* Partnership with EGI (main stakeholder of the EOSC): there is an
  ongoing collaboration between EGI and OpenDreamKit for the
  JupyterHub and BinderHub-based EGI services. Proofs of concepts for
  both have been deployed by Enol Fernandez from EG. To proceed
  further, a Technology Provider Agreement must be signed between EGI
  and OpenDreamKit/Jupyter developers in the next weeks. Depending on
  the success of this joint work and of the need of the EOSC
  post-2020, the collaboration could be extended.

### Numfocus Europe

- Nicolas participated to Sylvain Corlay's effort in setting up
  Numfocus Europe (to be announced officially soon), an umbrella
  association whose mission is to make it easier in Europe for
  companies to financially support open source computational software.

### Portability and build system for SageMath

- Finalization of Cygwin's port of SageMath [https://github.com/OpenDreamKit/OpenDreamKit/issues/66].
  See Erik's [blog post](http://opendreamkit.org/2017/10/11/SageWindows/).
  Report to be finished and submitted soon.

### Misc technical achievements

- WP3:

  - Python 3 support, build system, and continuous integration for
    SageMath (in collaboration with Logilab)

- WP4:

  - Enabling binder and ThebeLab for SageMath, for live documentation, reproducible notebooks, etc
    (close to final integration); contributions to ThebeLab.

  - Jupyter Widgets for combinatorics objects and dynamic
    documentation and exploration.

  - Heavy contributions to xeus-cling, a C++ kernel for Jupyter

- WP5: HPC for combinatorics

- WP6: OpenMath serialization for SageMath & Python based on Python's
  native serialization ("pickling")

### Communication strategy 

- Following the work of our student trainees. We have been able to put the new website up. 
 We used the workshop of June 2018 in Hamburg to gather feedback and new content from
 the group. 
 
- UPSUD paid for the services of a professional videographer (Boris from Hellomaelie) who 
 has lead and film interviews of key OpenDreamKit actors at the XFEL meeting in Hambug 
 in June 2018. The interviews were edited over the sum and we obtained 6 short videos
 on OpenDreamKit thematics: What is OpenDreamKit?, maths and computers, open-source,
 collaboration, Jupyter, and the future of open-source math software development. 
 We have just released them on the newly created Youtube channel for OpenDreamKit and have
 started advertising them on our twitter feed and on our website.
 
-The creation of a 2 minutes motion graphic explainer video with Pix Videos in on the way, 
 based on the sketches created by Juliette Belin from Logilab.




--
## Workshops and dissemination activities

- Organisation of [Sage/GAP Days 85](https://wiki.sagemath.org/days85), March 13-17, 2017, Cernay on *packaging, portability, and documentation tools for Sage*. 17 participants.
- Coorganization of [Sage Days 86](https://wiki.sagemath.org/days86) April 17-21, 2017, Montréal, 30 participants.
- Organization of a [weekly Sage user group](https://wiki.sagemath.org/Montreal), Spring 2017, Montréal,
  combined with computational sessions at CRM's semester [Algebra and Words in combinatorics](http://www.crm.umontreal.ca/act/theme/theme_2017_1_en/)
- Coorganization of a [Jupyter Widgets Workshop](https://github.com/OpenDreamKit/OpenDreamKit/issues/246), January 23-26 of 2018, south of Paris.
- Participation to ODK's [Workshop on live structured documents](https://github.com/OpenDreamKit/OpenDreamKit/issues/211) October 16-20 of 2017, Oslo
- Organization of a WP6 meeting, November 6-8 of 2017
- Organisation of a [Workshop on interfacing low level libraries with (math) software](https://github.com/OpenDreamKit/OpenDreamKit/issues/251)
  April 24-28 , 2018, Cernay. 25 participants from all horizons,
  including QuantStack, Google, Root, High Energy physics, ...
- Organization of a winter school on Software Tools for Mathematics (Mexico) - Jan 2018, 40 participants
- Participation to the [Jupyter in GAP and other CAS]() workshop in St Andrews, June 4th-9th.
- Participation and some coorganization for for a Jupyter widget in Orsay, February 2018, 20 participants
- Coorganization of a Jupyter day + Binder sprint in Orsay, March 2018, 100/8 participants
- Sage at [combinatorics scool ECCO](http://ecco2018.combinatoria.co/) (Colombia) - June 2018
- Participation as invited speakers to [SageDAys@Icerm](https://icerm.brown.edu/topical_workshops/tw18-1-sage/) (Providence, US) - July 2018
- Opening keynote from Viviane Pons at [PyConFr](https://www.pycon.fr/2018/en/news/2018-09-17-introducig-first-keynote-speaker/) (Lille, France) - October 2018

- Lead the organization of ODK's main dissemination event targeted
  toward mathematicians: the conference *Calcul Mathématique Libre* will be organized from Feb 11 to Feb 15, 2019 at
  [CIRM](https://www.fr-cirm-math.fr/). Amenities reserved, main speakers invited, announcements to be made soon.

  Confirmed speakers:

  - Marie-Françoise Roy
  - Max Horn
  - Fernando Perez
  - Anne Schilling
  - Joris Van Der Hoeven

--
### Sage and OpenDreamKit dissemination:

* Eurocomb 2017 -- [Introduction to SageMath](http://opendreamkit.org/2017/08/31/eurocomb/)
* Netmath -- [Presentation of OpenDreamKit to math teachers](http://opendreamkit.org/2017/10/19/Netmath/)
* ENS Lyon -- [Lecture on mathematical experimentation](http://opendreamkit.org/2018/01/23/ENS/)

--
## ODK Use Cases

For the first time this year, we used a *Jupyter Hub* and
the newly developed *Cling C++ kernel* in our 300 student
[introductory programming course](http://nicolas.thiery.name/Enseignement/Info111/)
at Paris Sud. This was the occasion to test those technologies both
from a technical and pedagogical point of view. We contributed back
through many bug reports and feature requests.
