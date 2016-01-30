---
layout: subpage
title: Report
---

# Partial status reports for ODK days

## 2016-01-26-T-1403-odk-status-report.md

Status report

Michael
- code sprints for the rest of the time
- regular account of synchronization points
- people
  - say what they are working on
  - say what they are planning to do
  - maybe do a small demo

so, regular points for touching base

Go round the table, everybody says 2 sentences
about what they are expecting to do or "don't know"

### John
- work with Michael + some of his team on proofreading
  annotating lmfdb

### Alex
- graph, format
- work with Bremen team, answering some questions on GAP

### Mihna
- knowledge part, lmfdb part, other systems, Sage, how to parse it,
  next GAP

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

### Florian
- interested in many things
- going to assume that Dennis in charge of GAP
- get together and have a look at FindStat
- exactly how the knowledge is represented
- work with Nicolas on the Sage categories
- later on with Viviane on Findstat

### Paul
- Findstat
- I already pushed something to Tom

### Tom
- been improving the python api for mmt a bit
- would like to demo this at some point today
- (just after this round)
- started to get inspired for jupyter kernel for mmt
- not clear to us what we want that to actually do
- Florian: interesting challenge would be to have MMT / Sage
- even just for the plain mmt, not clear what we want to do

### Steve
- interesting in both the other GAP activities
- try and dig out some more comprehensive exports to some format

### Samuel
- this morning explained Sage, SageMathCloud, Jupyter to the Bremen team
- keep doing that or join some other activity
- or work on SageMath questions
- work on MMT tutorial by Dennis

### Viviane
- findstat modelisation with Florian and Paul
- I am here this afternoon and leaving tonight

### Benoît
- I'll pass

### Nicolas
- making myself available to whoever wants to work

### Michael
- being notified of many successes
- proofreading

### Luca
- teaching duties
- pass

### Ursula
- I'm listening with interest

## Before everyone goes

Nicolas, Michael: let's all thank the organisers
- good organisation and good welcome, spectacular venues

Steve
- about the advisory board:
  - i found a list of suggested people on the odk private repository odk/participants
  - i added a column to indicate who knows them, and would be willing to approach them

## Demo

### Tom

python api for mmt: can query mmt from python,
can turn the objects you get from mmt into python literals,
and possibly in the future sage objects or GAP objects

Florian demoed yesterday elliptic curves

now doing the very same demo for python

up here we set a uri or path 

```
# paths to the elliptic curves
lmfdb_elliptic_curves = path.Path.parse("http://www.lmfdb.org/")
```

## 2016-01-26T1655 ODK days status report

1655 Status report

### Viviane
- worked with Florian on MMT and Findstat
  to build an abstract image of findstat
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

Nicolas
- xxx

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

### Benoît
- we are going to write the minutes by the end of the week
- to be sent to the SC members on Friday
- next ODK workshop: need to choose dates

### John
- Michael and I were taking the information that the LMFDB stores in knowls
- process to convert to the MMT format, already begun, we did more on that
- spin-off from that: more rules on the LMFDB
- we haven't yet got a process to do conversion automatically in the other direction

Michael
- the other thing we did: the schema file we showed you yesterday night
  expressed as lists of lists of lists of certain form in JSON
- the codecs between, we've proofread that list, documented it and extended it
  so that that part of the LMFDB we have a 
- I think John realized that 2x2 matrices need to be documented rather
  than the lists of elements that were documented before
- from that documentation we plan to make more of these mmt schema theories
  which will allow us to xxx 
- and we're filling up the codecs repository with xxx

Florian
- we should implement a schema validator

Michael
- yes, that's something we discussed as well, it would be very nice to have

John
- we delegated that to other people

Tom
- xxx

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
- xxx


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

### Mihnea
- looked at GAP
- managed to get at least one example in the format
- put it in the odk/gap repo

### Samuel
- yesterday put up my ODK logo proposal
- filled in my time sheets after gentle reminder by Benoît
- read stuff
- emailed my department about buying SageMathCloud pro subscription

### Paul
- talked with Viviane about Findstat
- talked with Nicolas about categories in SageMath
- draft implementation of xxx
- I'm trying to understand where xxx
- in Sage I think there are two levels
  - 
  - 
- I'm pushing it right now to the existing ODK repositories
- there is no repository for Python
- probably it would be good to have that

### Florian
- from my perspective it's still early to report
- I think we should code some more tomorrow

Nicolas
- or tonight

### Michael
- we worked on the purple thing
- can we start seeing the blue thing?

Someone
- start from something simpler than elliptic curves

Michael
- magmas

Nicolas
- aim for rings


## 2016-01-27T1002 ODK days status report

Status report about activity since last night + plans for today

### John
- upgraded the descriptoin
  - not only does it have the description of key-values pairs
  - and human language description
  - but also mathematical definition of what the thing is to represent
- lmfdb work

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
- nothing to report
- TODO:
  - export GAP types properties attributes
  - JSON
  - I can make a GAP package and deposit this
  - 
Michael: this should stay in GAP
Alex: This is useful, because sometimes people ask
what properties can a group have

### Dennis
- Scala data structures
- now need to figure out what to do with them
- this requires spending time understanding GAP

Michael: seeing things the past two days there seems to be
more potential than we thought in the project.
Let us start a visiting program.
I would like to invite Markus to Bremen for a week or so.
It could also be the other way around, that we send Dennis
or Mihnea to St Andrews.


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

### Florian
- clearing up some things in MMT
- make the parsers to parse arbitrary snippets of MMT
- interactive interpreters

### Michael
- doing various cleanup, getting people to scream
  because I've moved stuff around in the mathhub directory
  but I see
- looking at various bits and pieces of the LMFDB part
- we already have things like the general linear group,
  affine space,
- learning and re-learning lots of maths in the project

Dennis: speaking of that I just xxx

### Samuel
- open trac tickets for OpenMath and SCSCP interfaces

### Nicolas
- working with Paul and Florian
  thinking about how we want to express the purple blob for Sage
- what syntax we want for the blue blob
- as a target want to have something like this working today
- http://github.com/nthiery/sage-gap-semantic-interface/
  ```
    @mmt("Magma", "additive", file="additive_magmas.py")
    class AdditiveMagmas:

        class ElementMethods:

            @mmt("°", operator="+")
            ...
  ```
- one difficulty we were not expecting
  - both in Sage and GAP we have both additive magma and multiplicative magma
  - at the intersection we have magmas
  - need to figure out how to add a keyword to specify additive vs multiplicative

### Tom
- now i've implemented it in such a way that xxx
  and I get a JSON back, which might not be that useful at this point
  but I can imagine everybody writing their own codec
  so that we can xxx
- plan: code sprint for Nicolas

### Paul
- pushed python repository: very early draft of mmt formalisation

## 2016-01-27T1414 odk-days-status-report

Update round

### Paul
- not been very productive
- sat next to Nicolas and talked to him
- gone for a walk

### Samuel
- discussed MMT and SageMathCloud with Florian, Tom, Mihnea, Nicolas

### Nicolas
- coding sprint MMT
- at this point the code is written
- it parses which doesn't mean much in python
- now need to make it run
- chat with Florian about categories

### Michael
- massaging the LMFDB-inspired blue blog
- chatting with John
- I think we're synchronising quite nicely at a variety of levels
- and make the blue blob slightly better

### Florian
- spoke to markus about GAP
- to Nicolas about categories in sage
- good understanding now about what's going on
- need to go over my notes and digest

Nicolas
- there is a tutorial on Categories
- and another one about Axioms
- the refereeing process for getting that in Sage was long and painful

### Steve
- interesting conversations mostly
- i think i have more understanding now of what you mean by your pictures
- and how that might possibly pan out

### Tom
- coded for Nicolas
- Alex told me about SCSCP
- don't really know what to do with it now

Nicolas
- do we have a Scala implementation of SCSCP?

Someone
- no but we have a Java one

Michael
- Alex, can you point us to the Java implementation

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

### Alex
- in addition to what was mentioned before
- i was able to send a pull request to GAP with the consistency check
  that I mentioned this morning

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

### Michael
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
