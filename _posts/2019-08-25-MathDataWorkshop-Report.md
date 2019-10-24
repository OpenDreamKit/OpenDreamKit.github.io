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

The organisers had to limit participation partly because of the early stages of the project.
Because the system is not mature yet, many developers were needed during the workshop 
to support the dataset authors.
This number will decrease quickly as the system matures, and we expect to be able to invite
more dataset authors to future installments of the workshop.



Testimonials

AK: We had a super intense workshop with people with very different, complementing competencies all strongly willing to work together towards the same goal of pushing the data on MathHub idea: a real team evolved and with that a push beyond my expectations.

JK: For me this was a great way of getting to know people working towards open math data. It was also an opportunity to see the general idea from different perspectives, including concrete databases, user interfaces, and formal and informal logic interconnecting the data. All this and good concrete steps taken within a superbly leisurely setting -- I was absolutely enjoying my time!

GC: By bringing together the developers of the MathHub with the mathematicians who are producing and analyzing math data, the workshop accomplished in a week what would have otherwise taken months. It was immensely gratifying to see how quickly the system evolved into something that is already better than the state of the art for most mathematicians.


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

### Discussions about a possible journal

The participants discussed the wider problems that members of the
mathematical community face when it comes to authoring software and datasets.
There is a real need in the community to give some sort of academic recognition
to software and dataset authors.
It was pointed out that senior researchers should at this point advise young people
to not invest time in dataset libraries or software, because they are not going
to get credit for it.
At the same time, it is precisely the young people who are contributing most 
to datasets libraries and software.

To provide a basis for giving academic recognition, Michael Kohlhase pointed out
that a variety of personal resources will be needed:
* mathematicians with good standing in the field who can become guardian angels,
* people who can provide hosting, so we can point to some landing page,
* people who are actually willing to review datasets.

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
