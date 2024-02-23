---
layout: page
tags: OpenDreamKit, meeting
title: OpenDreamKit Project Review, Tue 2018-10-30
---

OpenDreamKit Project Review
===

## Tuesday 30 October 2018

**See [Agenda](https://opendreamkit.org/meetings/2018-10-28-Luxembourg/ProjectReview/)**.

## Reviewer feedback and unanswered questions

### R1

Suggestion: use VRE to make digital artifacts citable

Is there collaboration with CoCalc?

MitM: make a comic about it

specifically on D6.5,6.8, but applicable in general: include informal KPIs and success stories (e.g., uptake by other communities) in the deliverables

### R2

What is our position on CoCalc, and its closed architecture?
Suggestion (Cremona): invite Bill Stein to next review

MathHub, 4.11: find outside evaluation, users

Make conclusion of D4.12 (or was it a diferent 4.x?) more precise, maybe add guidelines

D5.11: Add explanatory paragraph to table on speedups. (Critical remark: alreadyy told us last time)

### R3

Geographical distribution of users, eg Eastern Europe

### 

Deliverable 5.11:
- should be updated to explain why we can't reach maximal speedup due to unbalance 
- proofread

Include success stories (like logipedia) in the Deliverable and Technical Report

Comic about Math in the Middle

## 09:00 Welcome

- Welcome by the Project Officer
- Round of self-introductions
  - project participants
  - project officer
  - project reviewers (R1, R2, R3 below)
      - R1 = Maria
      - R2 = Peter
      - R3 = Wil
- Nicolas proposes updated agenda
- no WP1 presentation, will come back to this later (R2 says: please do)
- Word about work on the website to better present our work
- Interview video
- "Jane" use case comic
  - Example of notebook: Variant of Allombert's algorithm (number theory)
  - Jane describes the experiment in detail
  - publish in public repostory (GitHub, GitLab, Bitbucket, etc)
  - ensure that others may run the calculation
  - binder: create url, share it
  - from this url anyone can get a live version of Jane's notebook
  - nice side-effect: Software Heritage archives all of GitHub, GitLab, Bitbucket, ...
    so Jane's work is archived
  - not developed one VRE where Jane might be locked
  - instead, contribute to the ecosystem
    - make sure GAP, PARI/GP, and all our projects work in that ecosystem
    - this means proper packaging in Conda, Debian, PyPI, etc.
  - Jane will not be locked to one monolithic VRE which might lose support when ODK ends
  - in all: make sure everything works well together

- We have this comic finished and we are working on five more
  - ! We should have a comic about WP6 as well, but I (MiKo) have not been contacted about this yet. 
- We started discussing with PixVideo about an explainer video based on the comic
- Jane uses toolkit to build a specific VRE using which other research will be able to reproduce her work
- Four aims of the project presented
  - Aim 1: improve productivity of researchers in pure math and applications
  - Aim 4: We care about long-term reproducibility and sustainability

- Challenge: rich variety of objects (not only numbers) and their hierarchy
  - expressions; polynomials; cominatorial objects; graphs; polytopes; manifolds...
- No one-size-fits-all VRE
  - variety of use cases that we know
- Solution: VRE toolkit, based on
  - variety of math software
  - emerging Jupyter ecosystem

- OpenDreamKit's proposal recap: Knowledge / Data / Software; researcher communities

- What happened since beginning of project
  - we knew hiring good people would be hard
    especially in these days where AI pays very well
    but we managed to hire excellent people
  - made a bet on Jupyter, containers... our bets paid off!
  - EGI and other deployments based on JupyterHub
  - toolkit approach is proving its value: maximising impact, adoption
  - reached, trained, got feedback from many users

- Risk mitigation
  - working with the community means we depend on their calendar
  - choice between deliver now or ask extension
  - some reports mention that most of the work is done, and a few remaining things
  - Benoît Pilorget, project manager, left late august
    - been through three rounds of hiring

R3. How do you measure impact and adoption?

Nicolas. See the presentations, but please ask again if needed

- Possibility of moving to a larger room!
- 
- Deliverables merged
  - no prior European project experience
  - last review: advice to merge deliverables
  - all merges have been the object of an amendment
  - thanks to Project Officer for support on this,
  - it makes our life better
- WP7 removed
  - social aspects inherent to open source communities
  - we have a lot of practice into social aspects, community building, ...
  - Ursula at Oxford, hope for opportunity to collaborate
  - decided to include some social science research
  - the collaboration did not materialise
  - we don't have the people to work on it
  - and it is not critical for the course of the project
  - so drop the social science research part; too bad
  - once that was removed, remaining WP7 tasks and deliverables moved to other WP
  - social aspects present in other activities, e.g. micromagnetics (to be seen later)
  - we followed Project Officer & reviewers' recommendation
  - allowed to redirect person-months to more critical work for us

- Consortium has evolved
  - happens usually when you have high-profile people involved
  - Michael moved Jacobs -> FAU
  - Sheffield
    - Neil Lawrence -> Amazon
    - Mike Croucher -> Leeds
  - Hans Fangohr: 
    - Southampton -> European XFEL 
    - partly because of Brexit
  - people moved but kept working

End: 09:55

## 09:30 Some context: case studies, impact

## Science and Open Source: what do we learn from each other?

Talk by Viviane Pons

Start: 09:56

- How this talk appeared: Viviane invited to do opening keynote at PyCon-Fr 2018
- my research notes: drawings on paper; and code
- see specific talk "Experimental pure mathematics using Sage" for more on this
- today: scientist and open-source developer
- survey: academics across disciplines, UK only
  - no survey for math only; or for Europe-wide; or other European countries
  - silent remark (AK): Survey for UK, conducted by SSU, but the US survey shows similar stats
- some non-open-source software for math
  - Maple, Mathematica, Maple; and their pricing
- as a scientist I *use* but also *contribute to* software
  - also, paid by the public money to do my work and want my outputs to be public
- as a scientist I want to: contribute; create; share; collaborate; see my resuts reused and improved
- steps
  - my papers are online with their latex source
  - my teaching material is open-source under CC license
  - my code is open-source
    - some as part of Sage, some as external package, some as notes
- "I told you love story that exissts between science and open source. Now about challenges"
  - we need funding, recognition, and sustainability
  - we need better recognition for research software development
  - 21% of academics who develop software have had training
    - R3. That casts some doubts on the quality of their code...
  - that's why we need Research Software Engineers!

Q (R1): will you tell more about sustainability for ODK
  - yes, in later presentations

Q (R1): how many RSEs vs researchers do you have
  - not a clear cut in our project

- check your privileges
- take-home message: for everybody, by everybody
End: 10:27

R2. You're in love with SageMath
REading all the deliverables this year, I get this conflicts
with your love of open-science. Maybe SageMath is not the most
open environment, the way you want to go in the future.

Nicolas: make it more friendly, diverse, make it easier to contribute.

R2. Feeling when reading about SageMathCloud becoming CoCalc.

Is there a confusion SageMath <-> SageMathCloud? 
Viviane explains one of the reasons to rename the latter to CoCalc.

Nicolas: what we're doing is in a way make things modular and making sure
someone could do a CoCalc from modular pieces.

End of questions: 10:33

## Case study: Micromagnetics

Talk by Beg Marijan (Start: 10:34)

Nicolas: our proposal claimed our main target is mathematics but it would have
impact outside mathematics.

Marijan will present micromagnetics.

- emphasising reproducibility needs
- some barriers to reproducibility
- we in ODK make it easier
- what is micromagnetics
  - we've reached the limits of conventional magnetism in electronics (hard drives etc)
  - if we want higher storage density in a few years, need new approach
  - one promising idea is spintronics
- magnetisation
  - Zeeman energy; uniaxial anisotropy energy; exchange energy; DM energy
  - all four, start from random array of magnetic moments: tends to "vortex"
- OOMMF
  - 2.2k+ citations; likely used in 10k+ papers
  - widespread workflow: iterate many steps
  - very time-consuming; difficult to log, to reproduce
- ODK work on this: objective Micromagnetics VRE
  - python interface; etc
  - collaborations: nbval, etc
  - future work for reporting period 3
- easy to install: conda
- easy to use online: JOOMMF cloud: tryjoommf.soton.ac.uk

Q(R1): can you do this in cocalc? If so what is the added value of ODK work on this?

A (Nicolas): the ODK work here was enabling the technology.
Most of the effort is to connect OOMMF to Jupyter. 
From there on, it can be used either in JupyterHub, in CoCalc, or other.

- main benefit of exposing micromagnetics to python:
  can then use scipy bisect etc. 

Q(R2): I can't install it
A(Marijan): ok we'll have a look.
Comment(R2): I will have physics question too.

Q(R3): what kind of conferences?
A: usually choose three biggest conferences in the field in a year
- magnetics and materials
- IEEE
- ...
Q(R3): not compumag?
A(Marijan) no.


- surveys reveal people don't attend our workshop to learn a new tool
  but to actually learn micromagnetics
- half of the workshop we teach people physics and numerical analysis
- second half we teach JOOMMF
- goal: end of day they have enough knowledge to reproduce a Nature paper
- sense of usefulness: "with this training they can write Nature paper"
- what people like
  - easy to install
  - straightforward
  - document work in same document as the code
- what people do not like
  - ...
- what problems are encountered
  - no way to know or contact participants in advance
  - installation was a pain; alleviated by online JOOMMF VRE
  - "what can I do not what I can not do before?"
  - some see JOOMMF as stealing OOMMF
  - confusion between user support and scientific collaboration

End: 11:03

Q(R1): how do you cite this artefact or whatever JOOMMF is.
If you want somebody to reproduce your work how do you cite it.

Some journals allow to submit supplementary material
- pdf where you describe your experiments
- video

If not we can create a github repo for each paper which has the supplementary material
- one notebook per picture
- that notebook gets a zenodo DOI, can be cited in the paper

Comment(R1): I find this is an interesting aspect.
Marijan: binder link lets you get all those notebooks live and play with them.
Some journals are not happy with notebook links; the whole culture needs to be changed.



## 10:20 Coffee break, with demonstrators and posters

Demos stay in original room

Agreed: this seems to be the most reasonable option
- curious to which room the coffee will be delivered
- (+1) i'd say we prepared everything for this room, let's stick to it
- maybe explore the other room first, send some scouts to see if it's worth?
- we're already behind schedule let's not waste time setting up another room

## 11:20 Achievements, by work package, session 1

In new room; start 11:45.

## WP4: User Interfaces

Lead: Vidar Fauske filling in for Benjamin Ragan-Kelley

Start: 11:47

- Categories of work
    - connect with math software
    - good working interfaces
    - make collab workspaces
    - more interactivity

- milestone 6: quote original user story from proposal
  - in short: make tools accessible by researchers
  - and allow researchers to share their tools


- bet on Jupyter notebook was good
  - now millions of notebooks online
  - 2017 ACM software system awards to Jupyter
    - Min was in a group who actually were given the prize in 2018 presentation

- background
  - Lorenz attractors
  - design diagrams for Jupyter and Jupyter Hub 
  - JupyterHub lets you use your favourite authentication,
    e.g. easily use existing university authentication

We did:
- improve working in notebooks
- imrpove working with notebooks

Kernels: 49 -> 117, and 6 contributions from ODK: Cling, GAP, MMT, PARI/GP, SageMath, Singular

Notebooks found on Github for different kernels:
    - SageMath - ~6.2k

Silent comment (Samuel): would be nice to also show stats for some non-ODK kernels.


Highlights: 
- real-time collaboration (D4.15)
- should be part of JupyterLab 1.0 should be released this year
- 3D visualisation in Jupyter notebooks (Silesia for computational fluid dynamics)

LIVE DEMO!!!

- based on Py3js
- k3d
- server-side data processing in VTK (= visualisation toolkit?)
- unray: tetrahedral meshes; example: brain
- in K3D there is also support for volumetric rendering
- plot big point structure

Work to improve distribution
- contributed back to jupyter ecosystem
- package, cookie-cutters

R2. At the end of D4.12 "it's not necessarily apparent which package or
combination of packages"
Are you or will you be in a position to make recommendations.
At the moment it seems a little bit inconclusive.

A: trying to make as modular as possible

ipyvolume + scivijs
"might include"

I get the impression you don't know what you want to do, and I have to
judge this deliverable.

A (Michael): toolkit approach at work: flexibly allow people to choose tools

R2: The conclusion at the end of page 15 of D4.12 is not convincing
(i.e. not conclusive about which technology is best)
It might be better to write what you just said: ie say that our products
are flexible and write guidelines.

Vidar: it's a lot easier to do 3d visualisation now than in 2015.

R2. As R1 says, provide a list of recommendations.
"These are not firm recommendations but ..."

Plan to write a blog post on this.

Next highlights:
- Sage Explorer D4.16
  - we hosted a workshop on live documents in Oslo.
  - result: new package Thebelab
  - allows to do pretty cool things in short amount of time
- MathHub notebook integration
  - interact with notebook document online
- Sage documentation
- improve sphinx support for Cython projects
  - 
(R2) D14: reformatting needed in the pdf (url trailing out of the page)


- KPI

(R1): comment on KPIs in general: you have a webpage listing the KPIs,
but I could not find the value associated to each KPI.
Am I doing something wrong?

(Nicolas): we have worked hard on KPIs for this review,
we now need to centralize them as you suggest.


COOL THAT THE TIMER ON THE OTHER SCREEN IS ALSO DONE IN JUPYTER - SOMEONE MAY POINT THAT OUT :)

To summarize: made life easier for people inside ODK and outside ODK.

(R1,R3): really good work
end: 12:14

(R2): one small one
D4.11 (MathHub) expect ready at end of November - is it ready now?
(Michael): will talk about it; still needs love and attention but
it is running and we're not very embarrassed by it.

Michael: these project reviews are very good motivators

(R2): The particular area of computational mathematics is the core of what
we funded the project to do.

End questions: 12:16

## WP3: Component Architecture

Lead: Luca De Feo

Start: 12:17

Tool: slides = Jupyter notebook running on Binder!

All participants in WP3, please stand up.

Binder starting...

Note: CoCalc does not give you anything like this.

Nicolas: Binder now supports more than GitHubs

Binder is running on Cloud infrastructure all over the world.
The reason it's slow to start is everyone is using it: it's very popular!

- Host a repo of notebooks somewhere public
  and then everyone can use them live
  
- Binder gives a static view of the notebook as a preview
- so i can start on the first slide while it's starting
- by the way it could be much faster it it had more funding!

- hit refresh: and it's live almost instantly
- note it auto starts a slideshow! it's a RISE-enabled notebook
  - we all need to learn how to do this. Blogpost needed!
- want our components
  - flexible
  - portable
  - modular
  - open

- use cases: how ODK components may be used in different scenarious
  - Charlie: from GAP, make a remote Singular compute something
    without knowing Singular syntax; and go on with computation in GAP
  - Dan: sysadmin at his math department
    - uses docker compose
  - Élise, engineer at CNRS, wants to set up Jupyter service for CNRS
    - she uses Kubernetes
    - at this point the HPC version is not ready, but will be by next review

- Explain connections between WP3 and WP4, WP5, WP6
- reporting period 2 highlights

- Aim 3: identify and promote best practices
  - lower entry barrier
  - modernise SageMath dev tools to allow interaction with GitHub and GitLab
  - make it extremely easy to propose fixes to SageMath documentation
  - now we have "edit on GitLab" link in SageMath online doc
  - this will open a pull request to include the fix in SageMath
    which can then be reviewed 

- Continuous integration, continuous testing
  - what is CI
  - standard pracice in every software project
  - related to Aims 3 and 4
  - we did modernisation under D3.8. Highlights:
    - for sagemath: docker based CI prototype on GitLab
      - instantaneous code coverage
      - get a docker image of Sage with that particular change
      - allows to test it live
    - GAP: code-cov gamification
      - GAP metrics dashboard
      - can see code coverage going up with time
      - number of user-developed package that work with gap
      - silent comment (AK): 140 packages will be in GAP 4.10, 
        and 102 out of them released this year! (and furthermore
        15 in 2016 and 38 in 2017)
        
- Done: Packaging and deployment
  - Rewritten GAP build system
  - libGAP becoming part of GAP
  - Docker images (D3.1 from Reporting period 1)
  - SageMath Windows installer (D3.7)
- Coming up
  - packaging for major Linux distributions
  - hpc-enabled Sage

- SageMath for Windows
  - before ODK: only way = virtual machine
  - that was one of the motivation for starting OpenDreamKit
  - alomost 1/2 of our users are Windows users

(R2): what is the speedup of cygwin native version vs virtual machine solution?

The virtual machine had an overhead of running the virtual machine,
which often made this option non usable.

Additionally, the additional step of installing VirtualBox or VMware was a barrier.

(Erik) It does not matter so much in term of CPU computational intensive things.
Now there's a desktop icon that you click.

(Luca): this is more about usability at all than about speed.

(Olexandr) You may want to interact with native Windows applications, and that is hard if SageMath is in the VM

(R1) Why such a variation in the number of users?
-> not users but clicks on SageMath website to download Sage-Windows

Spikes are corresponding to releases
silent answer (Clement): and seasonal variations (low download rate in July-Aug)

- Deploying VREs
  - Dan's use-case: 100-user deployment
    - at my department, took 1 person (me), ~20 hours; and 244 lines of configuration
    - compare to SageMath's legacy SageNB notebook
  - blog post: deploying JupyterHub on Kubernetes on OpenStack cluster
  - Binder compatible Docker images, see https://opendreamkit.org/try
  - CoCalc offers deployments based on similar technologies


(R2): cocalc and ODK, isn't some duplication effort? How could be more effective
this collaboration.
(Luca/Nicolas): cocalc is more exploratory / our work is adding sustainability
many different answers and experiences
(Viviane): Binder and CoCalc are both useful and answer different needs

- Linux distributions
  - packages available for all components on
    Arch Linux, Debian, Fedora, Gentoo, Ubuntu
  - now working on conda-forge packaging

- Arch voluntary reports (~30k users)
  - compare
    - two browsers: Firefox, Chrome
    - ODK software: PARI/GP, GAP, SageMath
    - non-ODK software: Scilab
  - beware: bias in sample:
    - Arch Linux users vs rest of Linux users
    - among Arch Linux users: those who contribute their usage stats

- Debian

- Ubuntu: based on 2.8M voluntary submissions
  - ...

- DockerHub (= standard way to install Docker images)
  - stats for sagemath-jupyter, sagemath, gap-docker
  - note that our CI contributes to these stats
  - 

(R3): information on geographical spread of downloads and installation?

(ODK): Binder likely has such statistics, we should get them

- check out these:
  - https://github.com/binder-project/binder-data
  - https://github.com/choldgraf/binder-stats

- The future
  - packaging
  - move SageMath to Python 3, which is our horizon 2020
  - conda packages

- Revisit aims: hope I convinced you we reached these aims

- List of KPIs
  - Looks like this is by far the most KPI-intensive presentation...

- Lessons learned
  - well defined components allow us to better work together
  - when you separate out a component, new usages appear
  - tech moves fast, need keep updating not to fall behind

12:59 end talk.

Let's go eat.


## WP5: High Performance Mathematical Computing

Lead: Clément Pernet

Start: 14:04

- Mathematical computing: many different objects
  - integers, rationals, modular integers, finite field elements
  - polynomials over the above rings
  - ...

(R1): HPC is not the same as cloud, do you help your users with recommendations?

(Clément): we have code for simd, multicore, hpc; ideas for cloud not translated into code yet

- Vincent presents combinatorics involving Fibonacci

(Luca): Suggestion for next iteration of such a presentation:
use JupyterLab when Vincent is showing fibonacci things

Clément again

- Combinatorics is useful throughout mathematics

(suggestion) The slide should say: 7 papers published, more in preparation

- interctions with numerical HPC community
  - existing connections
  - recently established connections

- in math, linear algebra is a central area
  - often try to reduce problems to linear algebra
- similarities with numerical HPC
  - high compute/memory ratio
- specificities of exact linear algebra

- contributions
  - ISSAC 2018 symmetric triangular factorisation

- quasiseparable matrices
  - breakthrough: flat representation (i.e. non recursive)
  - follow-up: collaboration

- LinBox ecosystem
  - givaro
  - fflas-ffpack
  - LinBox

- Ongoing deliverable (for next year)
  - 2 full time engineers on it
  - prototype MPI parallelisation of chinese-remainder-based solver

(R1): why MPI and not OpenMP

(Clément): we actually use both
- MPI is for distributed computing
- OpenMP for multicore

(R1): ok; and does it make sense to use GPUs in this setting

(Clément): yes; not clear we can offer something but working on it

(R3): do you work with people who do non-linear solving

(R1): nice publications but ]
- some did not acknowledge EU funding 
    -> I did not hear that point. After checking, I see not published paper failing to cite EU funding in D5.12.
- some were not included in the deliverable report

Vincent again

- HPC infrastructure for combinatorics
- illustrate using two examples
- polytopes: very useful to model combinatorial objects
- we care about integer vectors inside a polytope
- as dimension increases, complexity blows up
- PPL, Normaliz, with contributions by OpenDreamKit
  - Python interface to PPL: pplpy
  - e-antic: C/C++ library, used in Normaliz
  - Sage Days 84 got this all started
- numerical semigroups
  - implementation in SageMath
  - work-stealing map-reduce

(R2): is this the same table as figure xxx in the deliverable

Why only 2.8 speedup for 8 cores

(Vincent): because of the unbalancedness of the tree;
a lot of time is used in communication to reallocate tasks to workers

(R2): The deliverable needs to make that clear.

We discussed that last time and I don't see any amendments.

- SIMD code for combinatorics

(R2): how small are these objects

(Vincent): only up to permutations of 16 elements
but if you iterate on all of them that's factorial(16) objects;
with SIMD this takes one hour instead of years

For larger permutations nothing; maybe in the future if
CPU registers become larger.

- PARI/GP

- GAP (by Olexandr)
  - kept regular releases cycle
      - 8 releases in total
      - including the next major release of GAP 4.9
  - integration of HPC-GAP merged in GAP 4.9
  - WIP
    - Meataxe64
    - introspection functionality: on-the-fly optimisation decision
    - regression tests of GAP 4.10 going well, expect release in Nov 2018

- Singular (Clément)
  - FLINT now supports fast sparse multivariate polynomials
  - parallelisation of sparse multiplication
    - sometimes superlinear speedup
    - very successful story
  - more improvements in progress

(R3): tell us more about this superlinear speedup

(Clément): this tells us the 1-core implementation is probably inefficient.

- Lessons learnt
  - early instances of HPC computer algebra focused on RSA or some other one thing
  - general purpose HPC component is challenging but brings long-term sustainability

- next year: work actively with WP3
  - expect lots of new surprises
  - confident to deliver by end of project

(R1): what are yoru plans regarding Cilk

(Clément): we did exploratory work on Cilk, but had no commitment to Cilk.

There is a competitor to Cilk;
there is a competitor developed at Uni Barcelona.
We can experiment more.

14:44 end talk.

## 13:00 Lunch in the premises, with demonstrators and posters

This took place before WP5 talk.

## 14:30 Achievements, by work package, session 2

## WP6: Data/Knowledge/Software-Bases

Lead: Michael Kohlhase

Start: 14:44.

- Connecting systems
- start with conclusion slide, then all the rest is bonus
- promise to cover the KPI slides

- would be nice to have the open-source systems talk to each other
- the python way used in Sage:
  - I would like an interface to X, let me hack one
  - one week later, the thing exists
  - problem: have to do everything from Sage
  - what about GAP users?
  - safety, flexibility, extensibility issues
- we try to take the high road
  - start from GAP, or start from LMFDB, or other, and use Sage as a slave
  - need semantic safety: avoid misunderstanding what objects you're sending around
  - we're doing a new framework, which is why it gets delivered late in the project
  - in the three review periods
    - proof-of-concept prototype in RP1
    - some use-cases in RP2
    - scale this up by end of project

that's the end of my talk; questions?  : )

- ecosystem of knowledge, data, software
- we should have math in the middle
- integrate between these systems by system-close APIs

- Jane studies invariant theory of finite groups
  - she's a Sage user
  - for orbits you would really need GAP
  - for Gröbner bases, Singular is your system
  - D_4 or D_8 for a dihedral group of order 8?

(R3): are you trying to make up for the gender imbalance by having
female characters in your user stories?

(Michael): we actually hired a female for the data aspects

(Nicolas): we need female characters in user cases so female users can identify

(silent Samuel): we also have an actual user story: Andrea wanted
to call Sage from GAP; she ended up using Homalg GAP package for that.
She needed GAP because her PhD advisor, Gabriela, and former PhD students
of Gabriela, including Myriam, had programmed a lot of things in GAP.
Andrea Thevis; Gabriela Weitze-Schmithüsen; Myriam Finster.
She learnt about the Homalg way in GAP days Fall 2018 in Siegen.

"Steve who naturally prefers GAP" :)

Future work: make PARI/GP MitM-compliant

Use case on LMFDB
- 3.5 million concepts is a challenge!
- need to reconcile database level
- only insiders understand this: John and 5 of his friends if not only 3
- (John says: 20)
- codecs and codec functions
- schema theories
- magically (actually that was a lot of work)
- we can query...
- all in a few lines of Python code
- can do it all in Jupyter notebooks
- this is an old screenshot (from 07:00 today), it's constantly improving
- system-agnostic
- we want to use FindStat, OEIS, ...

- we've integrated JupyterHub into MathHub.
- confession: we were hoping to do much more with MathHub which was based on Drupal
- "Drupal apocalypse": server hacked repeatedly
- in April we were so fed up: drop Drupal, use web frontend
- this was very liberating; helped integration of Jupyter
- took some work, kept us busy all summer

KPIs and deliverables
- MitM-connected systems
  - GAP, SageMath, LMFDB from ODK
  - Singular contributed by Sebastian Gutsche (OSCAR project, not ODK member) who needed it
- multi-site appointment for Florian Rabe
  - Felix Schmoll had internship in St Andrews
  - Nathan Carter comes from all outside to see what we're doing
- Logipedia just released in Paris, using MitM principle for integrating logics systems
  - we've been collaborating with them for years
- first ODK-external MitM user for the next months: Andrea Thevis
  who wants to use this for PhD 

(R1): it seems the logipedia success story should be included in your impact reports

(Michael): Logipedia was released yesterday, give us some time.

(R2): very interesting; both Logipedia and interest from theorem-proving community
Explain in layman terms what this is about.

(Michael): a blog post is the least we want to do.
Florian and I are from the theorem proving community originally.
We want to make this a big story.

(R2): make sure it goes into the deliverables.

(Michael): it seems to us you are suggesting we update the deliverable?

(R1): no: use the deliverables for the next reporting period.

(Nicolas): should we update deliverables with your previous suggestions?

(R2): I would like you to.

(R1): maybe do some comic about the math-in-the-middle

(Michael): absolutely: i would love to have my first comic

(Michael): I hope we will be able to continue at the European level.

The Jane story is maybe a little limited.
If you think of what MitM has to offer to the computer algebra community...
There is slight opposition to that.
Whereas in the databases area, there is work to do.

End comments 15:17.


## WP2: Community building, training, dissemination, exploitation and outreach

Lead: Viviane Pons

Start: 15:17

- WP2 - bidirectional link between ODK and scientific communities
  - example: Katja hired by Michael after she organised a workshop with Samuel
- keywords: community building, training, dissemination, outreach, exploration

- new website
  - at the last review we had a new website with all the info
  - you alerted us to its poor communication of the big picture
  - redesigned last spring with 3 master students in "Web culture and careers"
  - last June we showed new design to the team; what should we put forward
    to show to the scientific community at large 
- yearly visits
  - did not measure in 2016
  - 4.6k in 2017
  - 6k in 2018 so far

- visits by country (weird A
- laska shows up same colour as rest of USA)

- Many ODK members are active Twitter users
  - Mike Croucher, Luca De Feo, POD, Viviane Pons, Dima Pasechnik
- (note): there are also twitter accounts for GAP, SageMath, ...
- we have a new YouTube channel: https://www.youtube.com/channel/UC1CljnZtssn4YyARaBD6i5Q
- twitted about first video; it has 100 views
- channel has 6 interview videos
- explainer video is coming up

- Planetaryum (D2.7)
  - https://github.com/OpenDreamKit/planetaryum
  - allows to create galleries of notebooks
- interactive books (T2.9, D2.8)
  - linear algebra
  - another one
  - two more on the way
- T2.6 teaching aspects
  - 1200 students each year (taught by ODK members or course materials had ODK input)
- Workshops
  - over 50 events
    - organised or co-organised by ODK or ODK members
    - or ODK member invited speaker
  - 22 training events; increased a lot since beginning of project

(silent Olexandr): many learners learn Jupyter at Software/Data Carpentry
workshops: see e.g. lessons at https://software-carpentry.org/lessons/
Making more robust and usable Jupyter helps to "Carpenters", and we
also get feedback from them.

(silent Samuel+1): the organisation is now "The Carpentries"
after merger of Software Carpentry and Data Carpentry.

(silent Samuel): Lelière -> Lelièvre

(R1, R2): if some Software Carpentry work has been funded by OpenDreamKit
then this should be acknowledged on the Carpentries website.

The Carpentries has a page of friend organisations, OpenDreamKit could
be listed there.

Olexandr: https://software-carpentry.org/join/projects/ lists GAP already
(submitted by me). I will suggest adding OpenDreamKit there.

(R3): Why only twitter? What about Linkdn?

(Viviane): I use Twitter, and I know that there is an open science
community there, and it has been efficient for me in the past. I
haven't yet been convinced that LinkedIn would be as useful.

## 15:45 Wrap up

Nicolas M. Thiéry

(PO): Final review - within 60 days after the end of the project.
After the end of the projct only costs related to the final review
are eligible.

() What can be delivered next week concerning finances?
   By tuesday, at least two tables for level absorbed so far from 
   the begining of the period until now per organization
   Any important change in the finances should be reported as a note
   to the PO


Nicolas:
- we already delivered VRE toolkit, deployed and used
- from prototype to production in the 3rd period in all aspects
- Future: sustainabilty built into the approach
- accelerate and steer the ball
- communuty spirit
- career paths for people to keep around?
- NumFOCUS Europe - preparation in progress
- EOSC call: Jupyter centric, demonstrators in various areas of science
    - INFRAEOSC-02-2019 (Deadline Jan 2019)
        - silent remark (Olexandr): at least before 29 March for UK partners
            - but if the announcement will come after, will it work?
- COST network
    - community building, conferences - but no RSEs :-(

## 16:00 Assessment preparation by Reviewers and the Project Officer

## 17:00 Feedback and discussion with reviewers

(R1) this pad is public so we don't include reviewer names
lead reporter for this round of assessment

Nice review. Interesting and clarifying.


The project has achieved most of its objectives with
minor deviations

We encourage you to .. final review.

From the technical point of view we consider you made very good technical work.

Congratulatiosn for this.
Demo clarifyin

Impact is higher than expected, this is good and not so good.

- try to put everything in the deliverables in order to sell yourselves better
- A very good sustainability plan: combine different alternative


Very good management work considering difficulty of managing large project
with many goals and challenging goals.
However some delays with the financial reports
although they didn't have major impact on the project and were solved finally

The financial statement is pending, submit it by Tuesday.

Recoommandation for the current period: reopen one deliverable D5.11 (justify timings + typos)

also try to improve a little bit the presentations which have some mistakes.
Àlso inlcude centralized KPI:

Recommendation for next reveiwing period.
Financial statement available 15 days before formal review.

(R2) you have done extremely well

(R3) additional dimension to mathematical reearch
 new theorem? maybe for next time
Informal review some time ago: long list of deliverables, long list of workshops
we see you reduced number of deliverables but not the number of workshops
 congratulations for what had been achieved


clap clap clap







## 18:00 End of review


Question: can someone share the `Timer` code please?


```
from ipywidgets import *
import time

def timer(total, start=0):
    total = int(total)
    w1 = FloatProgress(max=total, bar_style='info', orientation='horizontal',
                       layout=Layout(width="950px", height="200px"))
    w2 = HTML(layout=Layout(height="100px"))
    w = VBox([w1, w2])
    display(w)
    
    T0 = time.time() - start
    while True:
        T1 = time.time()
        D = T1 - T0
        w1.value = D
        remain = total - D
        if remain >= 0:
            sign = "&nbsp;"
        else:
            sign = "-"
            remain = -remain
        remain_minutes = int(remain // 60)
        remain_seconds = int(remain - remain_minutes * 60)
        w2.value = "<strong style='font-size:130px'>&nbsp;{}{}:{:02}</strong>".format(sign, remain_minutes, remain_seconds)
        
        fraction = D / total
        if fraction < 0.8:
            w1.style.bar_color = "#66ff66"
        elif fraction < 0.9:
            w1.style.bar_color = "#ffe000"
        elif fraction <= 1:
            w1.style.bar_color = "#ff8000"
        else:
            w1.style.bar_color = "#d00000"
        sleeptime = 1.1 - (D - int(D))
        time.sleep(sleeptime)
```

## Debriefing


very good rehearsal for next year
next time no financial-report unpleasant moment


Michael
- I could kind of predict what the wP talks would be
- I still learned a lot listening to them
- learnt the most in context-setting and wrap-up phases
- amazed at how you see things happening
- we have a very good way of presenting the project by now
- it's about time


Nicolas
- we can see many of us are used to teaching and are communicators
- seeing suggestions after the rehearsals

Olexandr
- found this very inspiring, learnt new ways to tell others about opendreamkit

Michael
- use this impetus to make an outward-facing thing
- we have so much to show and tell
- say a summer school where we get together and teach each other + the community

Nicolas
- workshop at Cirm, 11-15 Feb 2019
- 5 keynote talks: broad picture on computational math
  - dissemination; how systems are developed; etc
  - a lot of time for tutorials
  - when we wrote the proposal, emphasis on best practices
  - time to write what best practices are
  - that workshop will be a good time to practice that

John
- some of us know how to do some of these things

Olexandr
- CoDiMa joint event
- instead of week-long training this year CoDiMa did
  many shorter events
- can be organised on shorter notice

Nicolas
- something about writing a software carpentry lesson

Michael
- next time we should be better at keeping time
- in each talk, prepare some things we know we can skip

Nicolas
- next time we should budget time for questions,
  whether they happen at the end or during the talk
- we did not leave enough time for demos

Michael
- we should show the demos to each other

Nicolas
- one demo of a virtual research environment with all the features

Michael
- we will need a week, a week before the review

Nicolas
- thanks Florian for help with practical aspects
- thanks Michael for taking the lead

Olexandr
- next time we should have posters, stickers, other publicity material

Nicolas
- big ODK logo for the group picture

They kept saying "very good" but not "excellent".

- one deliverable had typos

Implications of late financial reports

- please everybody check with your organisation accounting for any nontrivial deviations
  - usage of person-months
  - use of other spending

Nicolas
- we have a mailing list for the project site leaders, make sure it's up to date
- we had a few emails saying "I'm no longer in charge",
- make sure this does not happen next time

Nicolas
- late deliverables in this reporting period
  - one was 2 hours late
  - one was 2 days late
  - one was 2 months late

- like last time, send the deliverables to me + one extra person
- please have a draft ready early July
- for example write everything now, and just 

Remaining deliverables
- HPC in GAP
- HPC in Singular
- HPC in PARI/GP
- technical report

Michael
- Might be a good idea to write a book about OpenDreamKit
- where all the highlights are written up
- Springer Lecture notes
- Viviane: position paper
- technical reports
- context and overview by Nicolas, in the spirit of today's wrap-up
- that book would be a leftover of OpenDreamKit

Nicolas
- who would read this book?

Michael
- blog post have a very small half-life time
- books have a much longer half-life and are much more citable
- there are books for 65th birthday, some are influential, some less
- they can be a legacy of a person, why not of a project
- we'te thinking of writing the report for Dxxx into a paper,
- which could be extended into a book chapter
- John is writing xxx, and I would like to read about it and teach my students about it
- some of the HPC things would be interesting to write up
- that all might gain visibility and a little more long-term

Bill Hart
- how do you make it known

Marcin
- most of the technical aspects will be obsolete in a few years

Nicolas
- it depends if you focus on the nitty-gritty details or on the approach

Michael
- the talks evolved into higher abstractions "lessons learned"
- giving a venue for that might be interesting

Marcin
- you can't write a book about K3D jupyter extension

Odile
- in Viviane's talk and conclusions

Michael
- how to install Jupyter x.y.z will be obsolete, but we've learned more

Olexandr
- we could help people publish a collection of reproducible experiments
- approach Rescience journal by Konrad Hinsen
- have a special issue

Nicolas
- reproducible proposal, that can be resubmitted and get funding again! : )

Florian
- a single coherent publication would be helpful for future proposals

Michael
- the website will decay
- for most projects that are over for 3 years, you cannot find out anything about them
- this is something we should think about, because it will affect future proposals

Nicolas
- do we have a leader?

Michael
- we need a team, not too big, but distributed
- a team consisting in Florian and me would be bad
- interested: Michael, Florian, Olexandr, Dima

Nicolas
- we need a central place for KPIs
- Marijan will be around tomorrow morning


