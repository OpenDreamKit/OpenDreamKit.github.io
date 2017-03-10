# Overview at a high level of your system

GAP (http://www.gap-system.org/) is an open-source system for computational
discrete algebra, with particular emphasis on Computational Group Theory.
GAP provides a programming language, a library of thousands of functions
implementing algebraic algorithms written in the GAP language as well as
large data libraries of algebraic objects. It is used in research and
teaching for studying groups and their representations, rings, vector spaces,
algebras, combinatorial structures, and more.

# What data do you have?

GAP includes a number of data libraries which are listed at the page
http://www.gap-system.org/Datalib/datalib.html. Some of them are part
of the core GAP system, while some others belong to GAP packages. Their
exact format may vary, but in all cases there are some text files with
data and there is certain code responsible for processing particular
pieces of information from that files. In some cases, the data library
may only consist of the GAP code which will construct GAP objects on demand.
Documentation is contained in the manual of the GAP system or relevant
packages; however, it may not contain technical details which in the best
case will be placed in README files or as comments in the code.
Usually once produced, the data libraries are only changed when new data
are added to them. Existing data may be altered only in case of discovered
errors.

# What knowledge do you have?

Apart from the knowledge that is stored in data libraries as explained above, there is
a wealth of knowledge about properties of algebraic objects, or how to compute them
encoded in method installation and code.
This knowledge can often not easily be extracted from the system. 

## Some aspects of GAP design

The GAP type system has a number of advantages over a "standard"
object-oriented model for algebraic computation. Among the most important are:
* Method selection based equally on the types of all arguments. Thus, in
implementing an extension field K of an existing field L, new methods for
multiplying k*l and l*k can be added without any special support. Similarly,
inheritance applies to all arguments equally.
* Method selection can take account of information accumulated during the
lifetime of an object. For instance, as soon as a group is found to be abelian,
special methods for abelian groups will be applied to it. Similarly, when the
size of a group has been determined once, not only is it remembered in case it
is needed again, but different methods for other computations may be selected
to take account of this information.  

A central idea in the design of GAP is that as much of possible of the core
functionality should be polymorphic, so that it can be applied to any
mathematical object with appropriate properties, without knowing the underlying
representation. Thus if you create some new kind of GAP object, supply a method
for multiplying such objects, and claim that it is associative, then you should
be able to make semigroups from your objects. With additional methods and some
additional claims of algebraic properties, you can make groups, rings or algebras.

# What software do you have?

GAP has a kernel written in C. It implements:
* the GAP language,
* an interactive environment for developing and using GAP programs,
* memory management, and
* fast versions of time critical operations for various data types.

All the rest of the library of functions is written in the GAP language.
Packages (user contributed extensions) are mainly written in the GAP language,
but some also involve standalone executables. Some packages, for example,
extend mathematical functionality of the system or add data libraries, while
some others add infrastructural capabilities or links to other systems.
