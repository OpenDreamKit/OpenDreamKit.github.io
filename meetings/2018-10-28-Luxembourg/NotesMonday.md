---
layout: page
tags: OpenDreamKit, meeting
title: Project review rehearsal, Mon 2018-10-29
---

**Tuesday pad**: https://opendreamkit.org/meetings/2018-10-28-Luxembourg/NotesTuesday/



Social dinner: see pad at: https://hackmd.io/D2WW6ZCWTuuHsVYyFZsRlQ

## General comments for everybody

- On Tuesday, pay attention to each speaker
  (you can take notes on paper; don't do other stuff on laptops)

- Pronounciation guidelines (for non-native English speakers):
  - de**vel**op, de**vel**oper, de**vel**opment: stress "vel"
  - main**tain**, main**tain**er, main**tain**ing: stress "tain"
    (but in "**main**tenance" stress "main")
  - engi**neer**: stress "neer"
  - combina**tor**ics: stress "tor"
  - **man**agement: stress "man"
  - "those": the "o" is "o" as in hose, pose, rose,
    not "oo" as in whose, lose
  - women: the "wo" is pronounced like the word "we" - |ˈwɪmɪn|
  - re**search**: stress "search"
  - i**de**a has 3 syllables; "ea" in "idea" is two syllables, like in "deallocate",
    not one like in sea, beach, team
  - basic: hard "s", not soft "z" as rose
  - **ar**ea: stress initial "a", not "re"
  - de**liv**erable: stress "liv"
  - proto**typ**ical: pronounce like "typical", not like type
  - **pro**mising: stress "pro"
  - re**sult**: stress "sult"

- Did you notice any acronynms that are not in [the glossary2.tex](https://github.com/OpenDreamKit/OpenDreamKit/tree/master/Glossary)?   List them here and Vincent will integrate them in the document (and possibly make a webpage for the ODK website)
    - TeX? for "[tech]nical text typesetting"
    - GNU? GNU's not Unix
    - ~~Cilk~~
    - ~~PIPy~~
    - POSIX-threads
    - ~~MPI~~
    - ~~EOSC = European Open Science Cloud~~
    - ...

## Self-introductions

Say
- name
- site (+ which previous site if applicable); if site leader say so,
- job type (software engineer, research, research and teaching),
- scientific area: math, computer science, physics, ...
- role in community (GAP developer, Sage developer, etc),
- role in ODK (eg WP2 dissemination, WP3 component architecture)

Here's how this could go. Feel free to work on your self-introduction a bit more,
putting a mini-story in it, alluding to multiple backgrounds, previous life,
cross-interests, ...

Make this very human and telling a story of a group.

This should take on the order of 15 min altogether.

- Nicolas Thiéry
  - professor in computer science at Université Paris Sud
  - heavy software user for research and for teaching
  - leading the development Sage's combinatorics library since 2000
  - Project coordinator

- Erik Bray
  - research software engineer at U Paris-Sud
  - contributes to many scientific Python and related projects, previously for data analysis tools for the Hubble Space Telescope; came to Europe to work on ODK

- Markus Pfeiffer
  - U St Andrews
  - research into permutation group algorithms
  - involved in every WP except WP1 administration

- Michael Torpey
  - Postdoctoral research software engineer
  - University of St Andrews
  - Interoperability between systems

- Viviane
  - U Paris-Sud site leader
  - teach com-sci, researcher in combinatorics
  - involved in dissemination

- Jeroen
  - use jupyter for teaching in Gent

- Vidar Fauske
  - post-doc RSE position at Simula Research Laboratory in Oslo
  - working on user interfaces
  - standing in for Min RK, our site leader who could not come as he is not allowed to leave the country while in the process of applying for -permanent residency-
  
 - Odile Bénassy
   - RSE at U Paris-Sud
   - WP4 interface for exploring Sage objects in Jupyter
   - active in open-source software for 20 years

- Marijan Beg
  - European XFEL, previously Jacobs
  - computer scientist, physicist by training
  - JOOMMF

- Florian Rabe
  - math and proof
  - used to be at Jacobs U Bremen
  - now jointly at U Paris-Sud and Erlangen
  - 

- Katja Bercic
  - mathematician, interested in databases of mathematical objects
  - encountered the OpenDreamKit project through Samuel Lelièvre while on a postdoc in Mexico
  - met Michael Kohlhase and Florian Rabe at the ICMS
  - joining the group in Erlangen in a few days

- Samuel Lelièvre
  - 


## Play a video

- the projector cable also has a sound cable, make sure to plug it in + full screen + sound on high

## Our story

### Use case: the "Jane has written a paper" comic.

(Note: this file can be used in presentations.)

Displayed on screen, looks fine from first row.

### Role of OpenDreamKit in this use case

OpenDreamKit is not building one VRE, but contributing to an ecosystem.

- Docker containers for math software
- Connection between math software and Jupyter

More details on OpenDreamKit contribution, including:
 
- early adoption, eg Binder:
  - watch for new technologies,
  - try it out, use it intensively,
  - report bugs, contribute patches,
  - connect it to the rest of the ecosystem,
  - advertise and advocate technology and workflows...

This comic and upcoming ones is the basis for
an upcoming explainer video produced by PixVideos

### Big picture that guided us in developing our toolkit.

Knowledge, Data, Software ... and researcher communities!

- !!! When you say "EGI", make sure to say it means
  "European grid infrastructure". Reviewers might not be familiar.
  -> we can add it to our glossary
  https://github.com/OpenDreamKit/OpenDreamKit/tree/master/Glossary


### Specific challenges of pure maths


- !!! took 20 min, shorten a bit

## Viviane


  
## Marijan

- There's a dark slide with a nice title at the beginning of "Micromagnetics", but it was visible for less than a second.  Show the slide properly, or remove it.

- Rephrase to shorten:
  - There are several possible candidates, one of them is spintronics
  - -> One of several possible candidates is spintronics

- Why is "D-M energy" called DMI and not DME?

- Shorten
  - Cited over 2200 times in scientific publications
  - -> Cited in over 2200 scientific publications
  - can add "likely used in many more"

- Shorten
  - Keeping log of all steps is very difficult
  - -> Logging all steps is very difficult

- Shorten "nbval"
  - Test Jupyter notebooks
  - Keep documentation up-to-date

- Shorten
  - supported on Linux, macOS, Windows
  - and can say orally these are all the major operating systems

- Simplify
  - two university courses are under development and will be based on JOOMMF
  - -> two university courses under development, based on JOOMMF

- When showing the Jupyter notebook, emphasize that it *replaces the complex workflow for which you listed all the problems.*  That was not obvious from your tour of the notebook (at least, not obvious to a non-expert).

- Are you slide headers correct? You skipped from Part 3 to Part 5.

- Another bnefit to the `bisect()` function is that you get a more accurate answer than looking at a graph and eyeballing it.  Right?  That is, the system runs the simulations to target the point of intersection...correct?

- Could you add an estimated number of students who will benefit from the two courses currently under development?  (Quantifies impact.)

- Make captions and legend bigger on "JOOMMF users" slide

- Generally, talk about "Future Work", not about "Problems"

- Regarding the fear of data getting stolen, maybe say that we need to better integrate open source and reproducibility with keeping some data secrete

- In "What do you like in JOOMMF",
  circle the items you want to read

- Rephrase Problems 2/3 as follows?
  - Need to better understand our target audience: Physicists!
    - not excited by implementation details (Python, Jupyter)
    - easier to learn plain OOMMF than JOOMMF prerequisites
    - some find Jupyter Notebook a strange environment
    - steep learning curve (Python, NumPy, SciPy, ...)
    - some don't see the benefit of a new way to do the same

- Part 5: "Jupiter" -> "Jupyter"

- a large amount of time is spent in the details of the dissemination. Risk to lose the audience. Maybe highlight the key points and go quicker to the conclusion?

- last slides dense / small text

- Regarding the concern about why someone should learn Python, numpy, etc., an important answer is that it will help with all of the work they might ever do, rather than just micromagnetic experiments.

- Don't say or imply that "Windows users are clueless";
  instead, could say that "Casual users are not used to terminals"

- Talk took 36 minutes; shorten it; for example
  - less technical details about the forces that compete
  - be less complete; very often,
    - the slide has a lot of info, which is good
    - orally, just single out one thing from that slide

## WP presentations

For each WP, the WP leader will go to the front,
call all involved in that WP to stand up; key players
will come sit at the front, others stay in their places.

This will:
- show that each WP has people from various sites
- show that people work in several work packages
- allow main speaker to redirect questions to other key players

For your pdf slides (LaTeX), use the ODK logo from:

https://raw.githubusercontent.com/OpenDreamKit/OpenDreamKit/master/ReportingPeriod_2/WP5/odk-logo.png

### WP3

Leader: Luca

Key players:
- Alex
- Erik
- Jeroen
- Markus
- Nicolas
- Vincent



### WP1

Leader: Nicolas

Key players: all site leaders or site leader replacements

We will skip WP1 or make it very short.

### WP2

Lead: Viviane

Who contributed: many of us!

Sit at the front:
- Samuel
- Alex K
- Nicolas
- Marjan




### WP4 - User interfaces

Lead: Vidar, for Min



### WP5 - HPC

Lead: Clément

- Vincent
- Wolfram Decker sick; Bill Hart will represent him (very well!)
- Alexander
- Markus




- We did not explain well enough at the last review that our community has always been in contact with the HPC community; here are some highlights:
- Nevertheless we embraced the recommendation and provided contacts and worked even harder on building ties:


### WP6

Lead: Michael

- all involved stand up
- key players come to the front
  - Markus
  - Florian
  - John
  - Nicolas




## Wrapup

- We had set ourselves bold aims (recall them?)
- I believe we are delivering what we promised
  and having a strong impact, thanks to
  - the toolkit approach
  - contributing to a larger movement
  - identify hard hurdles that keep the ball from rolling
  - exploit the resources entrusted to us by EU to tackle them
  - great people!

Dearest to my heart:
- while fostering to an ecosystem of systems
- we have been fostering a friendly ecosystem of communities


### Future?

- Sustainability built into the approach
- ODK allowed us to attract some great people; how to keep them around?

### Future funding

#### NumFOCUS Europe

Nice fact: companies are using computational open source software, and want to contribute back financially!

Problem: this requires some official body; a pain to setup for a software project

Solution: [NumFOCUS](http://numfocus.org), a not-for-profit umbrella association

ODK action: contribution to the creation of NumFOCUS Europe (secretary: Nicolas)

#### EOSC call

(EOSC = European Open Science Cloud)

- scope: Jupyter centric, with demonstrators in various areas of science
- leader: Min-Ragan Kelley
- Submission January?

#### COST network around computational mathematics

- support community building
- can fund travel, conferences; not RSE salaries

#### ???

#### Challenges

- Running a project the scale of ODK takes a lot of overhead
- Major investment, in particular for the coordinator
- No fitting calls so far for computational mathematics
- It's a hard problem, advice would very welcome

### Thank you

Comments

- give top-level view on 3rd reporting period?
- we delivered VREs that are powerful but not full-featured
  - full-featured in terms of WP6 would mean scalable
  - high-performance
  - flexibility

## Demos

Ideas (from yesterday, not in the list of demos below)

- opendreamkit.org/try/try
- Fix a typo in Sage's documentation (Erik)

For each demo:
- who is in charge,
- if applicable, resources such as Jupyter notebooks.

#### GAP (Alex)

Continuous integration, code coverage

Homophonic quotients: GAP Jupyter notebook at https://github.com/alex-konovalov/gap-teaching/blob/master/notebooks/HomophonicQuotientsOfFreeGroups.ipynb

#### ? GAP in Jupyter with visualisations (Nathan)

notebook

#### JOOMMF (Marijan)

Jupyter notebook?

#### Sage-explorer (Odile)

https://mybinder.org/v2/gh/sagemath/sage-explorer/master?filepath=demo_sage_explorer.ipynb (older version)

#### 2-dimensional hard core model (WP5: Parallel dense matrix multiplication)

Jupyter notebook [fibo_demo_H2020.ipynb](https://raw.githubusercontent.com/OpenDreamKit/OpenDreamKit/master/ReportingPeriod_2/WP5/ExtraMaterial/fibo_demo_H2020.ipynb) (and don't forget the [picture](https://raw.githubusercontent.com/OpenDreamKit/OpenDreamKit/master/ReportingPeriod_2/WP5/ExtraMaterial/hard_core.png))

#### WP6 MMT Demo (Florian?)

resources?

#### WP6 Oculus Rift (Florian?)

No notebooks, link to the video?

#### WP6 Sage Demo (Florian?)

#### Demo notebooks (Jeroen)

If you have a cool notebook showcasing ODK, add it to https://github.com/OpenDreamKit/Demo-Notebooks

On the big screen
