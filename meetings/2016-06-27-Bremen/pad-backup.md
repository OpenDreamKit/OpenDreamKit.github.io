---
layout: page
title: "OpenDreamKit annual project meeting: backup of the Pad for taking notes"
---

TODO: go through this, make sure everything is in the minutes of the
steering committee meeting or in the report, and then delete.

Video-conference  https://hubl.in/odk-steering

## Discussion of changes to budget

 - addition of Ghent as ODK partner
 - updates of previously accepted due dates for tasks and deliverables
 - changes in budget: 
    * minor reshuffling 
    * transfers from Paris Sud to UGENt

## Postion of Paul-Oliver DEHAYE in UZH/Michael KOHLHASE in Bremen

Things got better thanks to the SC intervention. A contract is on track.

Michael Kohlhase announces that he has received a job offer from FAU Erlangen Nuremberg. There is a high probability that he will accept this offer, effective September 1. 2016. 
Most of the research group will move with him, Florian Rabe (Co-PI) is not formally decided yet. 
The steering committee congratulates Michael and will support him in moving his group and the OpenDreamKit project to the new university. 

## (internal) financal evaluation

percentage of money spent, only 20.69%
Pre-financing month 1 = 2 134k EUR  (covers 18 months)
Funds spent month 9 = 440k EUR
(not everyone supposed to be hired was hired)

## Brexit

Wait and see. Keep calm and carry on.

## Advisory board

News from Steve Linton:
    - we have a list of potential memebers
    - nobody has been contacted yet. Maybe one person was.
    - POD is volounteering t owrite a template email
    - We want to have 7 people in the AB
    - attention to gender equality
   -  2-3 people should come together and decide to pick the first 7 people asked to be  part of the Board
    
Link in the slides, and below:

https://github.com/OpenDreamKit/Participants/blob/master/AdvisoryBoard.md

## Next meetings

January 2017 (small meeting)
 - workshop PARI/GP Jan 9th-13th 2016 Lyon
 - Bilefeld (group theory)
- USTAN and UJF come together to decide which of their workshops can host ODK meeting 
- Review month 18 (March): located in Brussels and/or Gent?

June 2017 (preparation for month 24 deliveries)
- Keep an eye out  the other conferences, notably FOCM (Barcelona 10-19 July)

## Conferences

- 2017 in ICMS: timeline not so tricky => USTAN  in charge

    Aiming fo January?

- Florian Rabe takes in charge application to Dagstuhl (+ add Wolfram Decker in the process)

## Workshops:
    
    - Hans: planning workshop in US
    - Min: jupyter at SciPy US july / EuroSciPy august
    - Min: 3D visualization at Simula in winter/spring
    - Vincent Delecroix: planning a Julia/flint/Sage meeting about algebra (from polynomials to number fields), 1st semester 2016-2017 Bordeaux (?)
    - Michael Kohlhase: Workshop in Edinburgh as CICM satellite, july 2017
    - Alex: joint event with Codima's training school (Codima = extra booster for dissemination activities)
    - Loic Gouarin: training school
    - Software Carpentry instructor training around Paris

## Communication problem

The website does not advertise enough what we are doing despite the fact that the procedure is described on the readme

    https://github.com/OpenDreamKit/OpenDreamKit/
    
    
    
    
# Progress reports, 2016-07-01 10:21 +0200

Michael:
    - running around starting new discussion group
    - only done one single line of code, and that was a deletion
    - lots of fruitful discussions that hopefully pushed things in the right direction
    - Finalized the job offer negotiations to move to ...

Luca:
 - lots of stuff added at the bottom, per project
- in parallel, I was working on the incomplete CyPari deliverable


Florian
- talked to Nicolas? about Sage, my impression: there's a huge bottleneck
- protocol is negligible because it's too hard to export anything
- there are many operators in Sage which will be very hard to export
  because they are Python objects and it will be very hard to get a handle on them
- constructors tend to be concrete things and are harder to export
- Nicolas's categories ...
- we might know that there is xxx of Groups, but presently we don't know what the constructors for groups are
- Nicolas: or more precisely, generic constructor such as cartesian product...
- Dima: permutation groups in Sage have a GAP implementation
- it seems that there are several ways to get an object, none of which has a complete coverage

Olivier
- starting a page on "who is working on what"

AlexK:
- in GAP, it took a while to get to this idea;
- the initial implementation that was not updated for years
  already gives you a working solution
- in the next step you can xxx
- in Sage you can extract generators of a permutation group,
  you can encode this in OpenMath
- Markus: GAP-system should find a way to tell package authors to do things
  in a way that they can be automatically xxx, without requiring big effort from them

- Michael: Nicolas and Sam should learn from Alex and Markus



DONT TAKE NOTES PER PERSON



## SCSCP GAP/OpenMath
- Alex: setup for a generic GAP SCSCP server to accept OpenMath object or GAP input as a string, 
  evaluate it and return resulting OpenMath object or GAP output as a string: see
  https://github.com/alex-konovalov/scscp-evaluator

## OpenMath in python 
 - participants: Luca, Tom
- the code is on github in a repo that belongs to the OpenMath project
  https://github.com/OpenMath/py-openmath
- once this is done, we can use it to get pretty quickly and fast
  scscp support for Pari (should be doable through CyPari)




## SCSCP Sage/OpenMath
- Luca: working on SCSCP in Sage (demonstrator soon)
- Michael: it is very good to have scscp protocol, because
  as soon as you are able to export something, you are also able to transport it
- Michael: another potentially interesting thing: 
  - as soon as something is OpenMath or MathML capable, which for now
    is the same, we can also harvest it into MathWebSearch;
  - you just need some url that you can point us to and the rest is automatic
  - anything you can search with a pair of eyes we can search with mathwebsearch
- Michael: Alex, is there a list of projects that implement SCSCP
- yes: www.symbolic-computing.org/



## Sage -> MMT export (Nicolas, Sam, Dennis)

- https://github.com/nthiery/sage-gap-semantic-interface
- git@gl.mathhub.info:ODK/Sage.git
- browsable at https://odk.mathhub.info/mh/mmt/?http://www.sagemath.org

- Explained the inner working of categories, axioms, ...
- Expanded the Sage->MMT export with:
  - semantic annotations
  - all methods in categories
  - stuff toward exporting all methods of all classes
- Further annotation work: lie algebras, ...

## GAP -> MMT export (Markus, Alex, Dennis,...)
 - git@gl.mathhub.info:ODK/GAP.git
 - browsable at https://odk.mathhub.info/mh/mmt/?http://www.gap-system.org

## Preparing for curating effort (POD, Michael )
 - discussions with Sage -> MMT group
 - https://github.com/OpenDreamKit/OpenDreamKit/wiki/Curation-Effort
 
 ## Towards a web UI for MMT
 
 - Markus has a student working on a WebIDE for GAP, based on CodeMirror. Might be used as starting point for MMT.
 - Michael: it would be much easier if there was a standard browser-based editor. We also lack manpower.
- Tom has looked into JupyterJS, it might be used for this
 
 
## Dynamic documentation (Florent, Vincent, Nicolas, ...)

(toward D4.5)

Finalization and review of http://trac.sagemath.org/ticket/20690

## Legacy Sage notebook -> Jupyter conversion

(toward D4.5)

Playing around with Volker's implementation, fixing some trivial bugs:

https://trac.sagemath.org/ticket/19877

## Explore how one could reimplement Sage-Explorer using Jupyter (Min, Nicolas)

(toward ...)

## Redesign of the website (Luca, Nicolas, ...)

- Luca and Nicolas had a discussion yesterday on redesigning the website
  - idea: do the design on a temporary version

## Future possibilities
- Alex: contacted ICMS (Edinburgh) regarding the possibility of running dissemination workshop in January 2017

## Upcoming workshops

- Dissemination workshop in ICMS, jointly with CoDiMa
  - Alex wrote to ICMS yesterday, they confirmed that the week of ??16-23?? Jan 2016 is available
  - theme: xxx
  - hope that Peter Cameron could come


- Alex and Dima will talk about the upcoming WP7 workshop to set dates and some concept of the workshops
  - tentative list of speakers
  - tentative list of participants to invite

## WP7 (Dima)

- Dima has been working on understanding a bit more about WP7
- I hope to work more on the Sage and GAP interface

## Future funding discussion: Cost network, ... (Markus, Nicolas, Michael)

Rambling about what the consortium could be, who to encourage to lead, ...


## Docker

- some work by Erik

- we have a wiki page listing docker containers for the various projects in OpenDreamKit
  https://github.com/OpenDreamKit/OpenDreamKit/wiki/D3.1-Virtual-images-and-containers

- Dima: floating-point libraries, polymake, xxx
- Nicolas and Erik had a discussion

- OpenDreamKit container (for branding)
  - will be huge
  - reviewers seem to want a product
  - then they have something tangible
  - it will also be useful in some contexts


## Windows

- some work by Erik

## WP overviews

- Florian: would be nice to have WP overviews
- 2017: WP5 high performance computing
- 2016-04 Cernay WP3 mostly
- WP7 workshop next fall
- it's kind of natural that WP6 which is more overarching needs more face-to-face time

## Sage infrastructure

- Erik been working past few weeks on Sage infrastructure: migrating trac.sagemath.org and git.sagemath.org
- Erik and Dima discussed this a bit this week, and will discuss more today



## Organisation of curation effort
 - Paul + Michael, everyone else
 - figuring out what needs to be done
- assessment of where data is stored, which hooks are ran
 - https://github.com/OpenDreamKit/OpenDreamKit/wiki/Curation-Effort





- Alex: read the new readme, found it illuminating
- not clear when deliverable is ready
- I would in principle be interested in looking at deliverables when they are ready
- the readme says: when deliverable is ready, send email to participants mailing list
- Min did that once, Serge does it and writes a blog post
- maybe send a pre-email shortly written the submission, to ask for feedback



Yesterday Florian suggested that we need to have xxx for GAP scscp server,
  (Markus opened a ticket)
which accepts anything and returns anything, where anything can be of two types

- I set it up, it's available on the repository
- if you wanted to run it locally, you can start xxx
- nobody from outside will be able to run it
- Markus: would be better to have it in the Docker container
- don't think security is so much of a concern
- if somebody starts computing bitcoins, you can just kill the machine

- alex: in our GAP docker container pipeline, we have
  - 
  - 
  - on top of that, third container which contains all packages configured
- but there is no gap development version there
- i need gap development container
- also want to have the master version of the branch for another purpose:
  Jupyter
- my next plan is container with gap-master, automate its generation on the grounds of using one of the base containers
- and then offer a public service
- then I will not be so concerned about security




