---
layout: post
author: Jeroen Demeyer
title: Sphinx documentation of Cython code using "binding=True"
tags:
    - blogpost
    - cython
    - sphinx
    - sagemath

---

One of the deliverables ([D4.13](https://github.com/OpenDreamKit/OpenDreamKit/issues/87))
of the OpenDreamKit project is refactoring the documentation system of [SageMath](http://www.sagemath.org/).
The SageMath documentation is built using a heavily customized [Sphinx](http://www.sphinx-doc.org/en/stable/).
Many of the customizations are neccessary to support autodoc
(automatically generated documentation from docstrings) for [Cython](http://cython.org/) files.

Thanks to some changes I made to Sphinx, autodoc for Cython now works provided that:

1. You use Sphinx version 1.6 or later.

2. The Cython code is compiled with the ``binding=True``
   [directive](http://cython.readthedocs.io/en/latest/src/reference/compilation.html#compiler-directives).
   See [How to set directives](http://cython.readthedocs.io/en/latest/src/reference/compilation.html#how-to-set-directives)
   in the Cython documentation.

3. A small monkey-patch is applied to ``inspect.isfunction``.
   You can put this in your Sphinx ``conf.py`` for example:

        def isfunction(obj):
            return hasattr(type(obj), "__code__")

        import inspect
        inspect.isfunction = isfunction

This was used successfully for the documentation of
[cysignals](http://cysignals.readthedocs.io/en/latest/)
and [fpylll](http://fpylll.readthedocs.io/en/latest/).
There is [ongoing work](https://trac.sagemath.org/ticket/22747) to do the same for SageMath.

## Implementation of functions in Python ##

To understand why items 2 and 3 on the above list are needed,
we need to look at how Python implements functions.
In Python, there are two kinds of functions
(we really mean functions here, not methods or other callables):

1. User-defined functions, defined with ``def`` or ``lambda``:

        >>> def foo(): pass
        >>> type(foo)
        <class 'function'>
        >>> type(lambda x: x)
        <class 'function'>

2. Built-in functions such as ``len``, ``repr`` or ``isinstance``:

        >>> type(len)
        <class 'builtin_function_or_method'>

In the CPython implementation, these are completely independent classes
with different behaviours.

## User-defined functions binding as methods ##

Just to give one example, built-in functions do not have a
``__get__`` method, which means that they do not become methods when used in a class.

Let's consider this class:

    class X(object):
        def printme(self):
            return repr(self)

This is essentially equivalent to

    class X(object):
        printme = (lambda self: repr(self))

    >>> X().printme()
    '<__main__.X object at 0x7fb342f960b8>'

However, directly putting the built-in function ``repr`` in the class
does not work as expected:

    class Y(object):
        printme = repr

    >>> Y().printme()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: repr() takes exactly one argument (0 given)

This is simply something that built-in functions do not support.

## User-defined vs. built-in functions ##

Here is a list of the main differences between user-defined and built-in functions:

* User-defined functions are implemented in Python,
  built-in functions are implemented in C.

* Only user-defined functions support ``__get__`` and can become methods
  (see above).

* Only user-defined functions support introspection such as
  ``inspect.getargspec()`` and ``inspect.getsourcefile()``.

* CPython has specific optimizations for calling built-in functions.

* The ``inspect`` module and profiling make
  a difference between the two kinds of functions.

Cython generates C code, so Cython functions must be built-in functions.
This has unfortunate disadvantages, such as the lack of introspection support,
which is particularly important for Sphinx.

## The Cython function type: cyfunction ##

Luckily, the Cython developers came up with a solution:
they invented a completely new function type (called ``cyfunction``),
which is implemented like built-in functions
but which behaves as much as possible like user-defined functions.

By default, functions in Cython are built-in functions.
With the directive ``binding=True``, functions in Cython become cyfunctions.
Since cyfunctions are not specifically optimized by CPython,
this comes with a performance penalty.
More precisely, calling cyfunctions from Python is slower than
calling built-in functions from Python.
The slowdown can be significant for simple functions.
Within Cython, cyfunctions are as fast as built-in functions.

Since a ``cyfunction`` is not a built-in function
nor a user-defined function (those two types are not subclassable),
the ``inspect`` module (and hence Sphinx) does not recognize it as being a function.
So, to have full inspect support for Cython functions,
we need to change ``inspect.isfunction``.
After various attempts, I came up with ``hasattr(type(obj), "__code__")``
to test whether the object ``obj`` is a function (for introspection purposes).
This will match user-defined functions and cyfunctions
but not built-in functions, nor any other Python type that I know of.

## The future: a PEP to change the function types? ##

I have some vague plans for a Python Enhancement Proposal (PEP)
to change the implementation of the Python function types.
The goal is that Cython functions can be implemented
on top of some standard Python function type,
with all features that cyfunctions currently have,
the performance of built-in functions
and introspection support of user-defined functions.

At this point, it is too early to say anything about the implementation
of this hypothetical future Python function type.
If anything happens, I will surely post an update.
