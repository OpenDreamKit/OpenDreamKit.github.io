---
layout: page
title: "Progress report for Zurich-Partner terminated as of 17/01/2018"
theme: white
transition: none
author: Paul-Olivier Dehaye
period: Reporting period from March 2017 to January 2018
---

# {{ page.title }}

{{ page.author }}

{{ page.period }}

---

## Finance and administration

Since Dehaye/Zurich effectively left at M23, there is little sense in discussing the state of
deliverables here.
It is clear however that many changes were enacted following the first review at M18, and that
Dehaye was involved through WP1 in the preparation of those.
Specifically in WP6 , some titles of the deliverables were modified to respect the change
in priority on system interoperability and distributed computing in the “Math-in-the-Middle”
Paradigm over algorithm verification: D6.5: “GAP/SAGE/LMFDB Interface Theories and
Alignment in OMDoc/MMT for System Interoperability”, D6.7: “GAP/SAGE Interface Views
OMDoc/MMT”, and D6.8: “Curated Math-in-the-Middle Ontology and Alignments for GAP/
SAGE/ LMFDB”

---
## Achievements

T6.1: “Survey of existing DKS bases, Formulation of requirements”. This task was directly
addressed in the WP6 workshops in the first year.

T6.2: “Triform Theories in OMDoc/MMT”. For this task we have specified and implemented
the concept of virtual theories that can contain large – theoretically even infinite –
numbers of declarations and objects (e.g. 3.5M declarations in the LMFDB data base for elliptic
functions) in OMDoc/MMT. Virtual theories are characterized by the fact that they are too large
to keep in main memory of the MMT System and have to be partially and lazily imported from
an external data store. We have reported on the results in D6.2: “Initial DKS base Design
(including base survey and Requirements Workshop Report)”.

T6.3: “DKS Base Design”. This task was directly addressed in the WP6 workshops in the
first year and has led to the design and implementation in D6.2. The design has been published
at an international conference (CICM 2016) and has now been implemented.

T6.4: “Computational Foundation for Python/Sage”. In the course of the deliberations in
the WP6 workshops we saw a shift from the development of computational foundations and verification
towards API/Interface function specifications to enable semantic system interoperability
via the Math-in-the-Middle Ontology. Consequently, emphasis has changed to the generation of
API Content Dictionaries (API CDs) for GAP, LMFDB and SAGE. We have a prototypical set
of GAP and SAGE Content Dictionaries in OMDoc/MMT form (GAP: 218 CDs, 2996 entries;
SAGE: 512 CDs, 2800 entries overall). The computational foundations exist but are rather more
simple than originally anticipated. Much of the functionality has been offloaded to the SCSCP
standard – remote procedure call with OpenMath representations of the mathematical objects –
developed in the SCIENCE Project. As a direct consequence of the work in OpenDreamKit the
OpenMath Society has promoted the SCSCP protocol into as an OpenMath Standard.
676541 OpenDreamKit 5

Conversely, the GAP and SAGE CDs are rather more elaborated than anticipated in the
proposal, and thus form a viable basis for alignment with the MitM Ontology.

T6.5: “Knowledge-based code infrastructure”. This task is ongoing, and the MitM architecture
developed in WP6 has given important impulses to make the code infrastructure of SAGE and
GAP more declarative (knowledge-based). In SAGE, the category infrastructure was validated (it
seems to be the right level of abstraction to generate API CDs) and extended; further annotations
were added into the SAGE code base and accepted by the community. In GAP, the facilities
for “constructors” was reformed, extended by an infrastructure for documentation and static
typing/type analysis, and the code base refactored for 6000 constructors. Similarly, the online
documentation subsystem for GAP has been regularized and synchronized with the constructor
level. Already at this early stage of the task the new “knowledge-based perspective” has revealed
a plethora of errors and inefficiencies and has contributed to the code quality in both systems.

T6.7: “FindStat Case Study (Triformal Theories)”. Due to various reorganisations of the
work, it made sense to start with LMFDB and OEIS as example cases. This task had thus only
seen informal work until M23.

T6.8: “LMFDB Case Study (Triformal Theories)”. Given the concept of virtual theories
developed in T6.2 the task is to build a database connector that converts the MongoDB tables in
LMFDB into “mathematical objects”. We have identified the problems – e.g. that objects are
reduced to ad-hoc database records: for instance elliptic curves are represented as a quadruple of
integers, where the last is represented as a string of digits as the range of MongoDB integers
is too small. We have developed an architecture of language-specific Codecs which mitigate
these problems in a knowledge-centered way (Codecs are OMDoc/MMT objects) that interpret
database records as OMDoc/MMT objects and can thus be used populate virtual theories. As of
M23, the next step was to extend the existing MMT query language by a query compiler into the
underlying data store system; concretely to MongoDB underlying LMFDB for T6.8.




</section>

