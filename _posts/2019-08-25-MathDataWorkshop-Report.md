---
layout: post
author: Katja Berčič
title: Report on the Workshop on Data in Mathematics, Cernay-la-Ville
image: math-data/math-data-workshop.jpg
tags:
    - blogpost
    - workshop
    - dissemination
---

The [workshop on data in mathematics](https://opendreamkit.org/2019/08/17/WorkshopOnDataInMathematics/) brought together fourteen participants.
They represented authors of mathematical datasets,
interested users of such datasets, data framework developers,
knowledge engineers, and experts interested in integrating mathematical databases 
with computer algebra systems.

## Workshop results

### Rewrite and mayor improvements of infrastructure

The FAU group had developed a working prototype for an infrastructure
for mathematical data in early 2019.
In the two weeks leading up to the workshop and during the workshop,
Tom Wiesing had completely rewritten the system in Django.
The decision to switch backends was made to allow for a more 
agile development in the future.

We named the system [Data.MathHub](https://data.mathhub.info), to indicate integration with [MathHub](https://mathhub.info), 
a portal for active mathematical documents and an archive for flexiformal mathematics.
MathHub Data provides a unified infrastructure supporting deep FAIR relational mathematical data.
It provides storage and hosting for mathematical datasets.
The infrastructure produced includes everything necessary to display 
a simple website with basic search functionality.

During the workshop, the developers made significant improvements 
in the architecture and the data model.
The workshop participants sketched out a submission and editorial process for the platform

### Analysis of interface requirements

Dr. Andrea Kohlhase tested the user experience of the existing web interface
through user interviews. 
She also produced a clickable prototype of an updated interface and used that 
in a few interviews combined with an eye-tracker test.

Discussions on the user interface showed that the system will need to support from 
contributors beyond dataset authors and infrastructure developers. 
The interface
* would reach more users if it were available in multiple languages,
* needs to show definitions of concepts,
* needs to have good defaults for ordering of conditions and columns, and
* needs to have good defaults for which columns are visible.
All of these features are valuable, since they make the system more usable. 

### Building ties with the mathematical community

The mathematicians taking part in the workshop were enthusiastic to see 
the quick results and usefullness of the MathHub Data system, 
despite the system not being mature yet.

### Conclusions

The workshop showed that it can be fruitful to bring together researchers who 
know what kind of datasets their community would benefit from and researchers who know how to generate such datasets. 
One such collaboration started at the workshop.
Finally, but probably most importantly, the workshop showed that the research community 
accepts the idea of a system like data.mathhub.info and is taking it seriously to the extent 
that several participants offered help with tasks such as dataset reviews.

## Future

The workshop was very successful even with the somewhat limited outside participation
(indeed that was probably a factor in the success). As an effect, an outside member of the
math data community has bid for a second installment in spring of 2020 in Slovenia and
organisation is underway for that.
