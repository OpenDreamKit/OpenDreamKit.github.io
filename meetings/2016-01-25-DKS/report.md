---
layout: subpage
title: Status report of Sage-Gap days
---

# {{ page.title }}

## Mission statement for the workshop

- [Knowledge first strategy](/meetings/2016-01-25-DKS/Kohlhase_slides.pdf) (Michael)

## Knowledge representation in LMFDB

John, Michael + some of his team

- proofreading and annotating lmfdb
- taking the information that the LMFDB stores in knowls
- process to convert to the MMT format, already begun, we did more on that
- spin-off from that: more rules on the LMFDB
- we haven't yet got a process to do conversion automatically in the other direction

Michael:

- the other thing we did: the schema file we showed you yesterday night
  expressed as lists of lists of lists of certain form in JSON
- the codecs between, we've proofread that list, documented it and extended it
  so that that part of the LMFDB we have a 
- I think John realized that 2x2 matrices need to be documented rather
  than the lists of elements that were documented before
- from that documentation we plan to make more of these mmt schema theories
  which will allow us to xxx 
- and we're filling up the codecs repository with xxx

# Comments
Florian
- we should implement a schema validator

Michael
- yes, that's something we discussed as well, it would be very nice to have

John
- we delegated that to other people


### John
- upgraded the description
  - not only does it have the description of key-values pairs
  - and human language description
  - but also mathematical definition of what the thing is to represent
- lmfdb work

### John
- continued working on what i was doing yesterday
- LMFDB has knowls
  which started out as a way to get definition of words like conductor
  - ended up being more
  - each knowl links to other knowls
  - interlinked nuggets of knowledge
  - all are stored in the LMFDB database
  - one consequence is that when you look at the LMFDB API
  - JSON object with all the content and also all the authors and who edited it etc
  - michael had already xxx and converted to his colored cloud
  - yesterday we xxx
  - i checked through that in the morning 
  - about 20 xxx
  - several have been updated, others have been created
  - communicating between the two systems

  - perhaps it could be made more automatic
  - i think that's it really

## Knowledge representation in Findstat

Viviane, Florian, Paul

- first step toward an abstract image of findstat
- gave him read access to our git repo

Florian
- my impression was that the data in findstat is an easily accessible state
- we can export things like we did for the lmfdb
- wiki pages are in latex syntax, we can also export them

Michael
- any idea what other people might want to do with that?
- do you only have human users?

Viviane
- we have users accessing findstat through sage

Paul
- on the query site you could gain
- as well as for the way to compose statistics

Viviane
- we can do that kind of statistics already

Viviane
- I still need to be convinced about this
- right now our main concern is efficiency and quickness of the answer
- we've optimized things on our end for that
- so I'm pretty convinced there would be no gain
- maybe mathematically there would be

Florian
- more support for mathematical formulas on the wiki than with latex + mathjax

Viviane
- we've built our little circle of knowledge
- this could be interesting to link it in different ways

## Knowledge representation in GAP

Alex, Markus, Steve, ...

### Steve
- working with Alexander and Markus
- it's been quite illuminating in that
- there is more structure in GAP than is written anywhere
- because it was not documented it's broken in places
- I think it will have value for the code to document it

Michael
- this is an experience we have
- we are kind of obnoxious in the kind of structures we want
- which leads to people starting thinking about their own structures

### Alex
- explaining how GAP manual is built
- consistency checks
- wrote a small specification
- first catch is 3 pieces of something
  documented in the manual but don't exist in the code
- I submitted an issue on that
- so yes, it was really useful

### Markus
- I've produced a very large JSON file that contains
  all the categories
- hierarchy
- it doesn't have to be a JSON file
- I'm going to submit this to the Mathhub repository for GAP

Michael
- excellent, very good
- because the git repo of mathhub which is called odk/gap
  is going to be the xxx for these theories

Markus
- xxx

Michael
- i'm sure we can deal with this once we have xxx

Markus
- xxx

Michael
- I think our modularity structure will actually allow that

Markus
- a semigroup is defined in the GAP library
- once you load the semigroups package, xxx

Alex
- graph, format
- work with Bremen team, answering some questions on GAP


### Alex
- punished myself with lack of sleep, coding till 1am
- updated the rather big map of the GAP type system
  - it is now available for download
  - core GAP version
  - core GAP + GAP packages version
- continue manual consistency checker
  - checker does the following
    - 7 types: method, attribute, class, function, xxx
    - the manual entries say "this is a function" or "a method" etc
    - sometimes people just copy-paste, and refer to the wrong thing
    - 10% errors in the manual
    - 300 of them has this wrong type
  - my checker now reports the line in the manual or in the code
    that we need to fix
  - automated test in travis
    - when someone submits a pull request
- TODO:
  color code the various keywords
  eg methods pink, etc.

### Markus
- TODO:
  - export GAP types properties attributes
  - JSON
  - I can make a GAP package and deposit this
  - 
Michael: this should stay in GAP
Alex: This is useful, because sometimes people ask
what properties can a group have

### Mihnea
- I made an OMDoc importer for the GAP xxx
- example files don't have a lot of math,
  the only thing I can do is xxx
- kind of works except my importer is not finished
- can check consistency and report a few bugs

Michael: what's the licensing of all the stuff that you're exporting
I guess that since GAP is probably GPL, the things you're exporting

Markus: we require GPL2+ licensing for new GAP code;
there are bits of GAP like the Small groups library where
the license says you're not allowed to change them.

Michael: the other part is the documentation.
Alex, Markus: same as GAP.
Michael: that is something you want to clarify at some point.
It needs to be licensed.
Markus: I'll keep a note of this and I'll try to clarify this.
John: I'll try to get the LMFDB side settled too.

### Mihnea
- Alex explained the GAP internals
- GAP manual XML
- actually have few MB of content
- fixing the exporter

### Dennis
- GAP importer
- running after whatever improvements Markus is doing
- expected outcome: all of the GAP objects map with exports
- translate them in some way into MMT objects
- not know what way to translate them yet
- some connection to the scscp server for gap
- such that we are able to
  - get objects from GAP, convert them to MMT
  - get objects from MMT, convert them to GAP

### Markus
- hacking on exporting all the type information for GAP
- categories filters, attributes
- together with some information
- for attributes, what categories they
- ever growing JSON file
- one  of the outcomes
  - i now understand some of the internals of the GAP type system better
  - i will translate some of what i did into GAP functions

### Markus
- will be working with Dennis
  on exporting categories in Sage to something that can be exported to mmt
- Alex sent me a script which generates XML

### Dennis
- work with Markus, importing that stuff into MMT
- formal description of the type system for MMT
- generate MMT code
- see what we can do with it
- make MMT objects, that are directly connected to xxx


## MMT and Jupyter

### Tom
- got a jupyter kernel for mmt running
- trying to figure out what we want to do with it

Paul
- it would be already useful to me to have that environment

Tom
- mmt xxx

Michael
- i think it should be hard of Florian's web server

Florian
- i have xxx
- xxx

Markus
- you should ditch the hope of a clean jupyter interface
- this thing is changing very fast (daily)
  and poorly documented
- this thing is moving very fast so you have 

- bloomberg is pumping infininte money in the project

Markus
- if you want a multiuser interface
  - you either do it in your mmt initerface if it has user authentication
  - or you use jupyterhub

## MMT and MathHub (Florian, Michael)

- clearing up some things in MMT
- make the parsers to parse arbitrary snippets of MMT
- interactive interpreters

- doing various cleanup, getting people to scream
  because I've moved stuff around in the mathhub directory
  but I see
- looking at various bits and pieces of the LMFDB part
- we already have things like the general linear group,
  affine space,
- learning and re-learning lots of maths in the project

Dennis: speaking of that I just xxx

## Knowledge representation in Sage

### Explaining Sage categories

Nicolas gave a presentation on [Categories/theories in Sage](../survey-Sage/) (Nicolas)
backed up with a ([demo](../survey-Sage.ipynb)).

This was followed by in depth discussions with Florian and Paul toward
formalizing them in MMT.

References:

- [Elements, parents, and categories in Sage: a (draft of) primer](http://doc.sagemath.org/html/en/reference/categories/sage/categories/primer.html)
- [Implementing axioms in Sage](http://doc.sagemath.org/html/en/reference/categories/sage/categories/category_with_axiom.html)

### Very early draft of MMT formalisation of Python / Sage category infrastructure (Paul)

Pushed python repository: TODO: add link

## Sage-GAP semantic interface

During the [first joint GAP-SageMath days](http://gapdays.de/gap-sage-days2016/),

Nicolas worked on a prototype of generic semantic handle Sage-GAP
interface. The idea is to generalize the existing wrappers for matrix
groups or permutation groups which are monolithic and do not scale to
other kind of structures.

Instead, the approach is to enrich the handle `h` to a GAP object `O`
by retrieving from GAP the mathematical properties of `O` and exposing
them to Sage, so that the handle behave as a native Sage object with
those properties.

See: https://github.com/nthiery/sage-gap-semantic-interface/

During this "Knowledge" workshop, Nicolas, with help from Paul,
Florian, Markus, Alex, explored how to scale to intefaces between
multiple systems using the ideas outlined in Michael's talk.

See: https://github.com/nthiery/sage-gap-semantic-interface/#scaling-to-multisystem-interfaces

By the end of the workshop, a very crude proof of concept was
implemented, using the latest Python bindings for MMT to fetch a tiny
bit of information from the MMT specifications of Magmas, and using
that to automatically generate a semantic interface with the adapter
method mapping the `_mul_` method in Sage to the `Prod` method in GAP.

At this point, we did not use a specification of Magmas in GAP, and
instead hardcoded in the Sage annotation the name of the GAP
method. Other than this, the infrastructure is generic, so up to
debugging it should scale.

## Building the Computational Semigroups community

During this workshop and the previous one, Nicolas discussed with the
developpers of the GAP Semigroups package. There are good
opportunities for collaborations; in fact Nicolas's main motivation
for the Sage-GAP interface is to be able to use the GAP Semigroup
package from Sage as a building block for representation-theoretic
calculations.

Those discussions led to the creation of a
[mailing list](https://listes.services.cnrs.fr/wws/info/computational-semigroup-theory)
to better exchange information within the computational semigroup
community, across the various computational systems.

## Discussions around SCSCP and OpenMath support

Nicolas, Alex, Samuel, ...

- open Sage trac tickets for OpenMath and SCSCP interfaces
- No Scala implementation, but a Java one

- For Sage, a reasonable approach would be to implement the SCSCP
  protocol in Python (possibly by wrapping the C++ implementation).


## General discussions about the Knowledge first approach

Steve:

- I think i have more understanding now of what you mean by your
  pictures and how that might possibly pan out

## Python API for MMT (Tom, with feedback from Nicolas, ...)

- been improving the python api for mmt a bit
- would like to demo this at some point today

Python api for mmt: can query mmt from python,
can turn the objects you get from mmt into python literals,
and possibly in the future Sage objects or GAP objects

Demo (repeating Florian's elliptic curves demo in MMT)

up here we set a uri or path

```
# paths to the elliptic curves
lmfdb_elliptic_curves = path.Path.parse("http://www.lmfdb.org/")

TODO: add a link

Misc stuff:

- now i've implemented it in such a way that xxx
  and I get a JSON back, which might not be that useful at this point
  but I can imagine everybody writing their own codec
  so that we can xxx

## Explaining SageMathCloud, Jupyter, ... (Samuel)

## MMT and Mathhub tutorial (Florian, Michael)

The idea for this session is to see how knowledge representation in
[MMT](https://svn.kwarc.info/repos/MMT/doc/html/index.html) could
serve as a generic knowledge backbone for integrating the various
systems.

[See here to browse the mentioned MMT theories](http://ash.eecs.jacobs-university.de:8080/)

[and here to browse the ODK instance of MathHub](https://odk.mathhub.info/ODK/lmfdb/)

## ODK

- Advisory board (Steve, with Michael, Nicolas, ...)
- Steering committee (Benoît):
  Progress on the minutes; will be sent to the committee in a few days
- Yearly meeting for 2016 in June (Michael, Nicolas, ...)
  Planning discussion
- ODK logo proposal (Samuel)
- SageMathCloud pro subscription for the math department in Orsay
- Time sheets (Benoît, Samuel, Nicolas ...)

## Debriefing

Michael & all

Nicolas, Michael: let's all thank the organisers
- Nice and very welcoming organization, with spectacular venues


Michael: seeing things the past two days there seems to be
more potential than we thought in the project.
Let us start a visiting program.
I would like to invite Markus to Bremen for a week or so.
It could also be the other way around, that we send Dennis
or Mihnea to St Andrews.


- one of the things that i've been thinking about
- turn the talk i made about knowledge-first strategy into a talk at cicm
- cicm has a session on projects and systems
- we should probably aim at having something by the whole group here
- take this project that we are starting to embark in
  of actually building a vre in a knowlege-based way
- fits in very well with xxx
- would be a nice outcome to our xxx
- papers are 6-7 pages
- deadline is march 6 at the moment, there might be an extension
- that's soomething we should go for
- if there's a consensus on that, we should just do that
- the content would be:
  - give the picture and the paradigm
    and what we want that for in a vre
    without necessarily instantiating it
    - GAP
    - categories
    - knowls
  - building a small knowledge cloud that binds these systems together
  - maybe have that as a reference for other people who want to try
- if there's a consensus then I'll go and create a repository


##############################################################################
##############################################################################

### Tom
- Florian: interesting challenge would be to have MMT / Sage
- even just for the plain mmt, not clear what we want to do

### Mihnea
- managed to get at least one example in the format
- put it in the odk/gap repo

### Dennis
- Scala data structures
- now need to figure out what to do with them
- this requires spending time understanding GAP

### Alex
- i was able to send a pull request to GAP with the consistency check
  that I mentioned this morning


