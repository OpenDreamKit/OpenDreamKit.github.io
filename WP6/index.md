---
layout: page
title: "Work Package: 6 Data/Knowledge/Software-Bases" 
---

[WP6 GitHub Space](https://github.com/OpenDreamKit/OpenDreamKit/tree/master/WP6),
[Tasks](https://github.com/OpenDreamKit/OpenDreamKit/issues?q=label%3Atask+label%3AWP6),
[D6.1](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/D6.1/report-final.pdf),
[D6.2](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/D6.2/report-final.pdf),
[D6.3](https://github.com/OpenDreamKit/OpenDreamKit/blob/master/WP6/D6.3/report-final.Open), 
[pdf Deliverables](https://github.com/OpenDreamKit/OpenDreamKit/issues?q=label%3Adeliverable+label%3AWP6),
[Publications](http://kwarc.github.io/bibs/odkWP6/)

The ultimate purpose of a mathematical VRE is to create data (D), knowledge (K), and software (S) by modeling world situations, computing mathematical objects, and running computational experiments. To be effective a VRE needs an infrastructure that supports the creation, management, access, and dissemination of D/K/S-Structures. All the systems considered in this proposal (GAP, SAGE, PARI, SINGULAR, OEIS, arXiv.org, . . . ) already include data, knowledge, and software modules as part of their regular distribution, but not in a form that is interoperable between systems, severely limiting the usefulness of the systems and results. 

## Objectives 

* to design a flexible, knowledge-based integration layer for the OpenDreamKit Systems
* to integrate large-scale data sources into the VRE and make them accessible programmatically at the math level 

## Knowledge-based Integration of Systems

Individually, the OpenDreamKit systems are optimized for particular domains and functionalities, and together they cover many needs of practical and theoretical mathematics.
However, each system specializes on one particular area, and it remains very difficult to solve problems that need to involve multiple systems.
Some integrations exist, but the are ad-hoc and have scalability and maintainability issues. To alleviate this, the OpenDreamKit project introduces the *Math-in-the-Middle* (*MitM*) approach using
* a central system-agnostic formalization of mathematics (the Math-in-the-Middle *MitM Ontology*) as the needed interoperability layer and
* per system a system of *API theories* that specify the system's constructors and interface functions with their types.
* a system of alingments between API theories and the MitM ontology. 



## Integration of Knowledge and Data Sources. 

Mathematical knoweledge sources are usually only accessible via a dedicated web information system or a low-level API at the level of the raw database content.  
What we would want is a ``programmatic, mathematical API'' which would give access to the knowledge-bases programmatically via their mathematical constructions and properties.

The OpenDreamKit project by interpreting large knowledge bases as OMDoc/MMT theories -- modular representations of mathematical objects and their properties. 
For this, we generalize OMdoc/MMT theories to ``virtual theories'' -- theories so big that they do not fit into main memory -- and update its knowledge management algorithms so that they can work directly with objects stored in external knowledge bases.
An additional technical contribution is the introduction of a codec system that bridges between low-level encodings in databases and the abstract construction of mathematical objects.
