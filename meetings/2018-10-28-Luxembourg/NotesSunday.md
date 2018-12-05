---
layout: page
tags: OpenDreamKit, meeting
title: Project review preparation, Sun 2018-10-28
---

This is the old pad for Sunday.
**Please use instead the [Pad for Monday](https://hackmd.io/P0eWyulZSgGWD6i3VDYDCA)**.
Also remove material that is not relevant anymore here.


## KPIs

Review the KPI from our [2017 work plan revisions](https://github.com/OpenDreamKit/Participants/blob/master/ReportingPeriod1/WorkPlanRevisions.tex#L783).

KPIs (= key performance indicators) are some measurable ways to evaluate our work.

At the M18 review we presented the then current state of our KPIs.
It needed improving! Need more data collection...

Aim 1: improve the productivity of researchers in purerere mathematics

We need more blog posts of stories.

- TODO: review our existing blogs
- story of cocalc adoption for teaching in UK after ODK's Kickoff
- stories of Mike (Michael Croucher)
- getting Katja involved in OpenDreamKit (Katja, Michael, Samuel)
- "Software tools for mathematics" workshops (Katja, Samuel)
- Reproducible GAP experiments on Binder (AlexK) to write about https://github.com/alex-konovalov/gap-teaching 
- AlexK used GAP Jupyter interface in teaching at PGTC 2018 and "Software tools for mathematics" workshop
- Wanted: blog post about Jupyter in GAP and other CAS https://www.gapdays.de/gap-jupyter-days2018/

Aim 2: success stories about odk based VRE deployments

See the list at https://github.com/OpenDreamKit/OpenDreamKit/issues/174


## Sunday Rehearsals

### Case study: Micromagnetics (Beg)
Start: 14:58
Objective: 15:11
Dissemination: 15:19

Reaction of the public

Demonstrator of VRE and ODK technology for Science


### WP3 Component architecture (Luca)

Why do we care about flexibility, portability, ...? 
How do this relate to ODK's aims?
Connect this to ODK's toolkit approach.

Task list a bit early in the presentation?
Deliverables: highlight how does it tie with the rest of ODK

Why did we shift away from cocalc?

Engage users to install software
 - barrier: SageMath was hard to install
 - installer for Windows
 - debian, ... conda packages
 - HPC enabled

Engage users to contribute
 - barrier: complicated development workflow
 - what we did

Sustainability
 - barrier: end of Python 2
 - redirected work from former WP7 to help

Sage / SageMath consistency

Strange to mention J. Rueth by name in presentation but nobody else

### WP5 HPC (Clément)

~~Mention MPIR~~

~~In components mention PPL or/and Normaliz (polytope libraries)
~~
~~Starting with uses cases milestones (e.g. pictures of a bunch of math objects, ... talk to Nicolas) and emphasize
- the Relation with the rest of the project
- why HPC in discrete Mathematics is needed
- mention conjecture testing

-> Possibilities
  - matrix transfer example from statistical physics (would illustate combinatorics + integer matrix multiplication)
  - number theory example (could also emphasize linear algebra)
  - cryptography
~~
~~At the begining:
- Describing algebra over ZZ and Z/pZ is not general enough (exclude combinatorics, groups, etc)
~~
replace
- Sage -> SageMath  CP: the only instances are those written in the proposal (task name, deliv name, etc) 
- Pari -> PARI/GP CP: written without GP in the proposal (little work on the GP interpreter)

Question: how to mention the recommendation without looking defensive?
(e.g. no need to repeat it several times)

Why the focus on linbox and combinatorics?
What challenges / barrier did we attack?
What have we learned?

-> LinBox = linear algebra is central
   combinatorics = good use case for delicate parallelization

Integer vectors and polytopes: what's the relation with HPC?

Mention *what* is SIMD/Cython/Pythran/Cilk

Pythran was just improved by ODK
Pythran hard to integrate: we promised we would try to tackle this challenge

When using Cython properly, it shouldn't be slower than Pythran. Both generate C/C++ code, so the speed should be the same (Jeroen).

-> See benchmarks from https://github.com/videlec/perm_benchmarks

No need to speak about the deliverable merge; focus on content

HPC-GAP: highlight the challenge: HPC-GAP was the main outcome of a previous european project, and had since been dying for years 

GAP: maybe let Alex present it?
combinatorics (D5.11) + PARI/GP: let Vincent present

~~Many typos:
~~- T5.4, D5.13: Paralell -> Parallel
~~- (slide 25) optimisaiton -> optimisation
- bruhat -> Bruhat
~~- lightweitht -> lightweight
- a share of the Input -> a share of the input
~~- can be encoding -> can be encoded
~~ - comm. and serialization layer done
~~  -> communication and serializationlayer done
~~- FLINT now support -> FLINT now supports
- pointwise interactions -> punctual interactions
~~- french -> French~~


Prononciation

- combinatorics: accent tonique sur "tor", pas sur "nat"
- "those" se prononce avec "o" comme hose, pose, rose
  et pas "ou" comme whose ou lose
- management: accent tonique sur "man", pas sur "nag"
- develop: accent tonique sur "vel", pas sur "dev"

### WP4 User Interfaces (Vidar)

✓ Start with: when designing the project, we made a bet on technology Jupyter.

✓ That was a huge bet on what technology to base our VRE kit on.

✓ Jupyter received 2017 ACM software system award!

https://blog.jupyter.org/jupyter-receives-the-acm-software-system-award-d433b0dfe3a2

✓ Note that previous recipients of this award included:
- Unix, TeX, R, TCP/IP, Tcl/Tk, Java, Eclipse, LLVM, Coq, GCC

https://en.wikipedia.org/wiki/ACM_Software_System_Award

✓ Millions of Jupyter notebooks (see e.g. https://arxiv.org/abs/1810.08055: 
"as of September 2018, there were more than 2.8 million Jupyter Notebooks
shared publicly on GitHub")

✓ Background on notebook interface: show a rich widget
       
✓ Three areas of work
- Connection with underlying computational software
- Notebook interface
- Collaborative workspaces


Nice screenshots and drawings

✓ Number of kernels: mention the number of kernels contributed by ODK
✓ Kernels ODK contributed to: cling (C++), GAP, Singular, PARI/GP, SageMath, MMT

The notebooks should be on http://opendreamkit.org/try/try (broken link? doesn't work for me --Katja; fixed now --Vidar)
And add the URL on the slides if they are available (or make the pictures clickable)

✓ Typo: "Has met with ..."

Active document:
- outcome used by the online documentation of Sage, GAP, Singular, ... 
  replaces bespoke code
- KPI?

✓ JupyterHub deployment: we contributed to the deployement of many ...

Make presentation look better
- ✓ use OpenDreamKit style file for latex slides or reveal.js slides
- include interactive demo! - 3D stuff at least, talk with Marcin to choose examples for Wow-factor
 
If possible, Luca would like to do the WP3 talk after this one.

Discuss with Logilab people to report on Jupyter-Simulagora convergence.

[Slide additions by Jeroen Demeyer](https://hackmd.io/iJFP__WiQoGZAePvIC9apg)

### WP6 Data Knowledge Software Bases (Michael)

Each new slide stays blurred for 1/2 sec.
(Maybe particular to Skim under macOS. Not a major issue.)

Typo in slides footer: OKD -> ODK (in "Second OKD review, Oct. '18")

Intereseted -> Interested (slide 9?)

On purpose that the arguments are G,A,p ?

John install a GAP method by calling -> installs

Virtual theories slide: maybe a little hard to read black on purple?
(use a lighter shade of purple?)

"MathHub An Portal": what's "An" here?

Apocalipse -> Apocalypse

compromized -> compromised
docker -> Docker
React.SJ -> React.js

"Success story" blog post for Singular mitm contribution?

Decompose one-liner

  MitM.Singular(MitM.Gap.orbit(G,A,p)).Ideal().Groebner().sage

into several lines:

  o = MitM.Gap.orbit(G,A,p)      # the orbit
  i = MitM.Singular(o).Ideal()   # the ideal
  g = i.Groebner().sage()        # the Gröbner basis

Question: getting rid of the A in the orbit calculation,
considering that acting on variables is the natural default
action for a group on a polynomial?

Suggested puns:
- MathHub as MathHub(ble) telescope?
- MathHub(ble) expansion constant?

Conclusion slide is quite full: make it lighter?
Some slides very busy with text.

In "results of WP6 workshops" slide, could highlight chronology
by putting date before location as follows:

- the WP6 group had a series of workshops
  - 2015-09 Paris: strategies for joint knowledge representation
  - 2016-02 St Andrews: MitM architecture for system interoperability
  - 2016-09 Bremen: ...
  - ...


### WP2 Dissemination (Viviane)

Do not say "we tweet 2-3 times per month". Say "a lot of our tweets
are retweets of community members and ODK components, many of which
are also quite active on twitter"

May want to show a page with screenshots of some of most popular
tweets as reported by twitter analytics

Remember to mention interaction with the Carpentries: we have
several instructors and trainers in the project and even in this room

- Carpentries (Software Carpentry, Data Carpentry)
  - certified instructors:
    - Tania, Alex, Samuel, Erik, Michael Torpey, Mike Croucher
  - instructor trainers:
    - Tania and Alex
  - workshop organisation:
    - Alex, Katja, Samuel, ...
  - lessons:
    - GAP Software Carpentry lesson lead by Alex
    - SageMath Software carpentry lesson (Sam, Alex + external collab. Pierre-Phillippe Dechant)



## Monday Rehearsals

### Introduction (Nicolas)

Brief explanation of the project, based on the web site
Key ideas:
- Use cases
- The toolkit approach
- Some challenges in Pure Maths

What has happened since the last review: 
- Work plan revisions
- ...
- Risk management, man power reshuffling, choice about when to deliver

### Case study: Micromagnetics (Beg)
### Science and Open Source: what do we learn from each other? Viviane Pons

### Demos / posters

### WP3 Component architecture (Luca)
### WP5 HPC (Clément)
### WP4 User Interfaces (Vidar)

### Lunch + demos

### WP1 Management (Nicolas)
### WP6 Data Knowledge Software Bases (Michael)
### WP2 Dissemination (Viviane)
### Wrapup (Nicolas)
