---
layout: post
title: "pythran 0.7.4"
author: Serge Guelton

date: 2016/01/07
redirect_from: "/activities/2016-01-07-pythran-release-0.7.4/"
tags:
    - release
    - pythran
---

Pythran 0.7.4 has been released. It implements several prerequisites for Sage/Cython integration:

- less binary dependencies (dependency on ``boost-python`` and ``cmake`` removed)
- easier installation (better dependency description)
- partial Python3 port (only the cpp to native code part)
- Windows portability (based on cygwin)

And as usual, several performance improvements, more numpy API support, and
hopefully more bugs solved than the number of newly introduced ones!

- [Read the doc!](http://pythonhosted.org/pythran)
- [Contribute!](https://github.com/serge-sans-paille/pythran)
- [Download!](https://pypi.python.org/pypi/pythran)
