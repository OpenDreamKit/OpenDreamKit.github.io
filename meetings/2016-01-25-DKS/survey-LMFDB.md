1. Overview at a high level of the LMFDB system

 The [L-functions and Modular Forms DataBase](http://www.lmfdb.org) aims to aggregate and integrate computational and mathematical knowledge about L-functions and other number theoretic objects, and to present these complex and interconnected objects reliably while maintaining accessibility. At a mathematical level, this could help provide a uniform view of the concept of L-function, objects which can (sometimes conjecturally) be produced out of very different mathematical constructions. The collaboration involves around 50 mathematicians of varying coding skills and with different mathematical expertise.

1. What data do you have?
 The entirety of the data held by the LMFDB is [accessible through an API](http://www.lmfdb.org/api/). One counts around 30 different types of objects stored, for a total of a few Tb. The data is downloable  [here](http://www.lmfdb.org/data/dump/).

 1. Structure
 The data is held in a Mongo database server, holding around 30 or so databases, each with their own collections. 
 
 1. Format
 The data is held in the database as BSON (binary JSON), the internal format of Mongo documents. 
 
 1. How is it produced?
 Data that ends up in the LMFDB has many different origins. Some are historial computations. Most are done in either GAP, Pari, Sage, Magma, etc, with the person who coded these original sources a member of the LMFDB who aims to make their data more accessible to their peers. Some of the data shown on the website is actually computed on the fly. 
 Data comes in through a variety of ad hoc ways, but essentially always transits through a JSON format before upload ot the Mongo database. At some point there was discussion of allowing anyone to upload their data [through an online form](http://www.lmfdb.org/upload/?related_to=/). This option is still there, but sees little use. 
 
 In general, proper referencing of data sources and documentation of its quality is a struggle. 
 
 1. How is it changed?
 Updating is mostly done through some form of overwriting. 
 
 1. How do you document it?
 The various formats are [in the process of being formalised](https://github.com/LMFDB/lmfdb-inventory). The most advanced example is [on elliptic curves](https://github.com/LMFDB/lmfdb-inventory/blob/master/db-elliptic_curves.md). The formalisation format itself does not have a spec. 

1. What knowledge do you have?
 1. Sources of external knowledge?
 Each participant in the LMFDB brings on specific mathematical knowledge about the objects studied, which might not be available to others in the collaboration. The LMFDB has the concept of "knowls", which are encyclopedic bits of content integrated alongside the data, and editable collaboratively. 
 1. Can you point to implicit knowledge? Is it common knowledge?
 There is a lot of implicit knowledge in the encodings chosen for the data (ad hoc formats and references), some of it is made explicit (for instance [here](http://www.lmfdb.org/knowledge/show/ec.conductor_label)). There is also a lot of implicit knowledge in the source code. There is little common knowledge across the collaboration, or at leats there is a lot that is not common. 
 
 1. What would you gain if it was made explicit/machine actionable?
 I (Paul) think the development process could be made more robust and efficient. The knowls currently serve as entry points for users and crucially also for onboarding future collaborators, as a stable basis for further collaboration. LMFDB could gain in productivity, robustness and ultimately utility if this process could be extended a bit further. 
 
 1. Have you gone in this direction? How did you represent the knowledge then?
 The furthest the LMFDB has gone into the direction of formalising knowledge is in modularising as much of the mathematical through knowls, creating an ad hoc ontology to classify them, and aligning it to the mathematical data objects that are presented. The LMFDB also tries to adhere to the concept of "one URL per object". 
 
 1. How do you collaborate on knowledge representation? 
 Edition of the knowls requires an account, which the LMFDB intends to offer to anyone. There is some versioning in place for knowls. 
 
1. What software do you have?
 The LMFDB is mostly written in python, relies on sage and pari/GP as libraries. It uses the database MongoDB (and possibly also an SQL one), uses the web framework Flask, and the templating engine jinja. 
 
 1. What custom software are you running?
 In a way sage is custom, since lots of LMFDB developers also contribute to sage. Otherwise a whole lot of the logic is embedded in the website code. 
 
 1. In which language?
 In the flask framework. 
 
 1. How does it use the data and the knowledge?
 Generally, a URL path will be associated to a jinja template, requiring simultaneous fetching of pre-entered knowledge (Knowls, Mongo DB), precomputed data (Mongo DB), and on-the-fly computation based on this precomputed data or existing functions implemented in some of the Computer Algebra Software already used. 
 
 1. How does your software act on represented knowledge?
 As far as I know, it doesn't, except to display knowls. 
 
1. Mixing (revisit?)
 1. Which knowledge is implicit in the data you have?
 Again, a lot of the data encoding is implicit in the data. `[0,4,5,1]` might represent the polynomial 4*x+5*x^2+x^3 or the polynomial x(x-4)(x-5)(x-1).
 
 1. Which knowledge is implicit in the software you have?
 When populating templates, some of the mathematical knowledge might be really entered through the code, by completing the template in different ways according to the calling class (example: elliptic curve's L-functions are of degree 2).
 
1. Anything else?
 Nope
