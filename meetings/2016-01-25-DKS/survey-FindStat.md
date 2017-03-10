1. Overview at a high level of your system

FindStat is a database and a web interface accessing the database designed for combinatorists. 
The purpose is to store and search informations on *statistics* over *combinatorial objects*.  
A statistic is mostly a map between a set of combinatorial objects to the natural numbers. As an
example, the number of edges is a statistic on graphs. The main purpose of FindStat is to give an
interface for one to *search* for some statistics the same way one would search for integer sequences
on oeis.

1. What data do you have?
 1. Structure

We have basically 3 categories of objects.

**The combinatorial collections** FindStat stores a list of combinatorial collections: 18 as of today (January 2016).
All our combinatorial collections are actually linked to a *Sage* combinatorial collection. We store the minimal informations
for us to print the collection on our website and recreate the collection in Sage. 

For every collection, we store a list of combinatorial objects. More precisely, we use *Sage* to generate the list of objects,
but we store a standardised version of the printout of the object. This standardised version is homemade: it has to be 
* standardized: a single given graph will always be printed the same way,
* unique: two different graphs will never be printed the same way,
* human readable: when possible, it should be easy to understand for a Human reader and not only a machine (so no hashkey or anything like this).
When possible, we keep the default printout of Sage object. Sometimes, we have to store a little bit of code to convert this printout into a
Sage entry.

**The statistics** A Statistic is a list of couples : combinatorial object from a certain collection / value. As of now, we have 364 statistics, 
each of them containing between 200 and 1000 entries. For each statistic, we store some metadata: Name, identifier 
(specific to FindStat, can be referenced from outside), combinatorial collection, description, code, references, etc. And we also store the data itself: a list of entries, 
each entry is made from combinatorial object (as a string, by its standardised printout) and a integer value. As an example, the values of "The number of Edges of a graph" 
St000081 is a list of all graphs up to size 6 with their associated number of edges.

**The combinatorial maps** A combinatorial map is a mathematical function from a combinatorial collection to another combinatorial collection. For example: binary search
tree insertion turns permutations into binary trees. As of now, we store 107 maps each of them containing between 200 and 1000 entries. We store the metadata of the map: domain, codomain, description, code, etc. And we store the mapdata as a list of (value, image) 
where value and image are combinatorial objects stored as strings through their standardised printout.

As an addition, we also provide some **wiki pages** with informations on combinatorial objects, maps and statistics in a less formalized way.
 
 1. Format

Our low level data format is a SQL database where we store everything we need. Most of the data described above is accessible through the website in HTML.
All information about *statistics* and *maps* can be accessed through *json* files that have standardised url depending on the identifier of said statistics or
maps. It is possible that the url changes if the website organisation is changed in the future but it will always be related to the identifiers which are set once and for all.
The format of the json files are also likely to change but we try to limit those changes and keep backward compatibility as much as possible. Those json files
are the closest we have to an external API, their are used by the *Sage FindStat interface*.

All our data are distributed under Creative Commons Attribution-ShareAlike 3.0 Unported License. 

 1. How is it produced?
 1. How is it changed?

The data are produced and changed through user contributions. As for now, 55 people are listed as contributors. We have an HTML form to submit statistics where
the user receives many informations on what should be submitted and in what format. Once a new statistic is submitted or a change is proposed, it has to be validated
by one of the FindStat developers. We don't receive that much data so the process is usually very quick. Each change is stored and so we have access to the full history
of the statistic informations with authors.

For maps, we don't have yet the "Add Map" form. Each map has to be added by one of the FindStat developers. The reason is just that the maps are a more recent addition and
so the adding process has not been finalized yet.

 1. How do you document it?

We have a very basic documentation for statistic data that we provide to the user who which to contribute. We don't have any documentation for our dataformat (json files).

1. What knowledge do you have?
 1. Sources of external knowledge?

We relate on the knowledge of our contributors about statistics and maps and try to store it. We also depend on some Sage algorithms, for example to generate the combinatorial
objects.

 1. Can you point to implicit knowledge? Is it common knowledge?

Our website is targeted at combinatorists. Even though, we try to give all the basic definitions and information, it might be difficult to use for someone who has no
knowledge of these objects.

 1. What would you gain if it was made explicit/machine actionable?

At the moment, our infrastructure is really Sage oriented (object printouts, names, etc). A language-neutral description of our objects might make it easier for interfaces 
from other system to appear. The gain for us is that the more user we have (from different background), the more contributors we might get and so the more mathematically 
pertinent our database is.

 1. Have you gone in this direction? How did you represent the knowledge then?

Giving access to the statistics and maps data as json files was a first step in this direction. 

 1. How do you collaborate on knowledge representation? 

By referencing those data (statistics and maps) and proposing unique identifiers that can be referenced from the outside (the same way the OEIS 
identifies integer sequences with a unique number). 

1. What software do you have?
 1. What custom software are you running?

We need the software *Sage* to run some computations: basically, generating the objects, printing them, etc. The statistic and maps code are usually given into
Sage for consistency but it is not mandatory.

There is also some FindStat specific code to run the website. Most of this code is just basic webprogramming views of our database. 

The database search is the heart of the service. It is a small algorithm that takes a user given statistics and compares it to the database up to some maps.

 1. In which language?

Our server runs on *Sage* with some imported web packages, so it is written in python. We use the python wiki server *MoinMoin* as a backend 
and have written some customized *MoinMoin* pluggings to run our service.

 1. How does it use the data and the knowledge?

The data is stored in a SQL database. It is preloaded and precomputed when we launch the server then all computations are made on this preloaded data. 
We don't use the knowledge at this stage, we just basically request the database and compare numbers using some parameters. In the future, we might wanna
use the knowledge we have on the maps (bijection, injection, surjection, involution, etc) to improve our algorithm.

 1. How does your software act on represented knowledge?

The software might put into light some mathematical relations between combinatorial objects but doesn't store them or anything like this.
 
1. Mixing (revisit?)
 1. Which knowledge is implicit in the data you have?
 1. Which knowledge is implicit in the software you have?

1. Anything else?
