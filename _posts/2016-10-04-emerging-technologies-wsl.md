---
layout: post
title: "Emerging Technologies: Windows Subsystem for Linux"
author: Erik M. Bray

date: 2016/10/04
tags:
    - blogpost
    - emerging-technologies
    - windows
---

One of the goals of the OpenDreamKit project is to improve support for open
source mathematics software on a wider range of hardware platforms and
operating systems (see [Task 3.1:
Portability](https://github.com/OpenDreamKit/OpenDreamKit/issues/50)).  Among
the largest portability challenges is improving installation and operation of
such softwares on Microsoft Windows--still the dominant OS in many user
communities, especially on desktop and laptop computers.  Despite there being
many large communities of Windows users, most open source software developers
have traditionally preferred UNIX-like software development environments.  The
UNIX environment differs in many significant ways from Windows, such that
support for Windows has often been neglected by those developers.

As part of our series reviewing *emerging technologies*, we look at a new
development from Microsoft that has the potential to open up a smörgåsbord
of open source mathematical and scientific software to Windows users that
was never previously available to them.


# Introducing Windows Subsystem for Linux

In late March of 2016, at its annual developers' conference, Microsoft
announced a surprising new technology.  Dubbed [Windows Subsystem for
Linux](https://msdn.microsoft.com/commandline/wsl/about) (WSL), this new
feature premiering in the Windows 10 "Anniversary Update" would add a Linux
system call compatibility layer to the Windows NT kernel, and a Windows-native
port of the popular "bash" shell.  And furthermore, in partnership with
Canonical, creators of the popular [Ubuntu](http://www.ubuntu.com/) Linux
distribution, the WSL supports Ubuntu's "apt" package repository, giving
Windows users access to a large swath of open source software built for Ubuntu,
but running directly on Windows.

In short, what this means, is that Windows users will now have a
Microsoft-supported Unix-like shell environment, and the ability to run
Linux-based software directly on Windows, without a virtual machine.  This
would have been unthinkable to most even a decade ago.


# Why porting UNIX software to Windows is hard

Software that is compiled from languages like C and C++, often favored by
researchers, is generally built in such a way that the compiled *binaries*
support a specific operating system.  Each OS has a particular *binary
format*--the way the program is organized on disk and copied into memory at
runtime.  So any compiled software built for that OS has to be arranged
in the binary format for that OS in order for the OS to know how to interpret
and execute it.  It is not typical for one OS to be able to understand
binaries for another OS.  For example, software built for Linux uses the
[ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) binary
format; normally if one tried to run a program built for Linux on Windows,
which only understands the [PE](https://en.wikipedia.org/wiki/Portable_Executable)
format, it will not be recognized as a valid executable.

An even deeper complication to writing portable software is the system calls--
software run by users interacts with the operating system to perform low-level
operations such as writing to disk, or making network connections, through
special functions provided by the operating system called "system calls".
Modern UNIX-like operating systems follow, to an extent the [POSIX
standard](https://en.wikipedia.org/wiki/POSIX) for system calls, allowing them
to be generally more interoperable.  Windows, on the other hand, has its own
system call defitions that are not necessarily in one-to-one correspondence
with POSIX system calls.  As such, a program built for Linux has no idea how to
communicate with a Windows operating system.

This can be a problem even on higher-level interpreted languages like Python.
Although code writing in Python abstracts away most operating system
differences, Python code *can* still access OS-specific features such as
system calls, and this is sometimes necessary to access more advanced OS
features needed by some scientific software.  So Python code that uses Linux-
specific features, for example, can only run on a version of the Python
*interpreter* built for Linux.

A third difficulty has to do with minor differences in user interface
standards.  For example, a common issue in Windows support is its different
standard for representing file paths.  While Windows paths contain a "drive
letter" and uses the backslash ("`\`") to separate between folders (e.g.
`C:\Windows\cmd.exe`), UNIX-like systems have no concept of a "drive letter",
and use forward-slashes ("`/`") (e.g. `/bin/bash`).  Issues like this can cause
many small, but pervasive bugs when porting software between operating systems.


# How WSL gets around it

The Windows Subsystem for Linux does two main things:

1. It enables with Windows NT kernel to understand the ELF binary format, and
   *translate* it, as closely as possible, to the binary format used by
   Windows.

2. It implements a sizeable subset of the POSIX system call standard on top of
   Windows.  Although Windows' own system calls do not map directly the POSIX,
   because Microsoft has access to how its underlying operating system is
   implemented, they are able to implement the POSIX interface on top of the
   lower-level details of their NT kernel.

WSL also provides its own *bash* shell--a command-line interface favored by
many users of Linux.  This provides a UNIX-like command-line interface within
Windows, also has an underlying system for transparently translating things
like file paths between the Windows and UNIX formats.

The ultimate goal is to be able to take a program compiled and built on a Linux
system, copy it over to Windows, and allow it to run without any modifications,
with all the system-level translations completely transparent to the user.
Targeting Linux software *specifically* makes this possible, because the system
interfaces it will use are well-specified *predictable* in most cases.  This is
as opposed to running a virtual machine, in which an entire separate operating
system is run in order to run software on that OS, and which needs to be able
to run any arbitrary OS.

This is direct support for Linux software in Windows itself--there is no
virtualization.

This is also an improvement over previous efforts at supporting Linux software
on Windows, such as [Cygwin](https://www.cygwin.com/).  Because Cygwin is
third-party software it cannot modify the Windows NT kernel itself.  It does
not support ELF binaries--to run software with Cygwin it has to be *recompiled*
to the native PE binaries understood by Windows.  It also does its best to
provide emulation of POSIX *system calls*, but it has to do this by building
them on to of the NT system calls which, as noted above, is not a one-to-one
mapping.  WSL, on the other hand, provides support directly from the operating
system for POSIX and other Linux system calls.


# What it means for OpenDreamKit

Because WSL allows binaries built for Linux to run directly on Windows, it
makes much of the enormous repository of software built for Ubuntu (and
potentially other Linux distributions) immediately available to run on
Windows.  No recompilation has to be performed or anything (at least, that
is the goal--as we'll see below it is still not fully realized).

For example, Ubuntu's software repository already includes builds of many of
the packages that are central to OpenDreamKit, such as
[GAP](http://packages.ubuntu.com/trusty/gap),
[PARI/GP](http://packages.ubuntu.com/trusty/pari-gp), and some smaller packages
including many of the dependencies of Sage.  Sage itself has an unofficial
Ubuntu package--this has been found so far to nominally "work" on WSL, but
there have been found to be many bugs.  That said, a great deal of other
mathematical software--especially that which is less dependent on OS-specific
features, should already work out of the box.

An additional potential advantage for WSL (indeed, one of the project's goals
as detailed in [this article at Ars
Technica](http://arstechnica.com/information-technology/2016/04/why-microsoft-needed-to-make-Windows-run-linux-software/))
is to make the development tools and command-line interfaces favored by
UNIX-oriented developers available on Windows.  This makes it possible,
in principle, to develop software like Sage the same way on both Windows
and Linux.

In some sense this could be an end-run around OpenDreamKit's goal of better
supporting Windows--Microsoft has already done the lion's share of the work for
us.  But there is more to be done, and it may not be an end-all be-all
solution.


# Caveats

As mentioned in the previous section, while some OpenDreamKit software has been
found to work in WSL, it is not without issues.  Many bugs were found in
running Sage on WSL (and even more when trying to compile it).  This is not
unexpected--the current release is marked
"[beta](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)" by
Microsoft, and they fully acknowledge that it is buggy and incomplete.

Second, Microsoft has made it clear in several statements, such as in
[this blog post](https://blogs.Windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-Windows/)
that the WSL and "Bash for Windows" are to be considered tools for developer
convenience *only*.  It is not intended for use in a server infrastructure nor,
presumably, as a means of distributing/installing software for end-users (i.e.
who are agnostic about how the software is implemented).  Although one could
take the cynical view that this just Microsoft's way of protecting its own
server products, there are also some practical reasons for this:

1. As a developer tool, the WSL + Bash for Windows are not easy for casual
   users to install.  First, it is only available on Windows 10 with the recent
   (as of writing) "Anniversary Update".  Not all users are on Windows 10 yet.
   It also requires having an account on Microsoft's developer network, and for
   their Windows to be configured to "developer mode" in order to receive
   development-related updates, plus a few extra steps.  This can also involve
   some sizeable downloads.  This is not especially onerous for a developer,
   but is not a serious of steps that can or should be asked of the "casual"
   or first-time user just to install some software.

2. Despite having support directly in the kernel, the WSL is something of a
   walled garden.  It is not possible to run native Windows applications from
   within the Windows *bash* prompt.  Nor is it possible (in any transparent
   sense) to interact with Linux applications from native Windows applications.
   This is probably required, on some level, to maintain a clean abstraction.

Finally, it is not currently supported to run GUI applications on top of WSL,
in part because that requires a lot more than just system call compatibility.
While not supported officially by Microsoft, some hobbyists have made progress
on it though, by integrating with [existing X server implementations for
Windows](http://www.pcworld.com/article/3055403/Windows/Windows-10s-bash-shell-can-run-graphical-linux-applications-with-this-trick.html).
For many mathematical softwares this is a non-issue--they are text based:
numbers in; numbers out.  Additionally, graphical interfaces for interactive
research environments are increasingly moving to the web (see for example
[SageMathCloud](https://cloud.sagemath.com/)).  In such
cases the GUI elements have been moved out to the web browser and the backend
typically runs "headlessly"--it has no reliance on the system's desktop
interface.


# Conclusion

The Windows Subsystem for Linux represents a major step in the right direction
for Microsoft.  It shows that they are listening to the needs of the broader
software developer community (not just those who work exclusively on Windows)
and that they have some interest in cooperating with the open source software
community (this has also been demonstrated in several other ways in recent
years).

For the purposes of OpenDreamKit, this work will make *development* of open
mathematical software more accessible to a wider community.  Although this may
not improve accessiblity for casual end-users, many users of open research
software tend to become *de facto* developers as well, as the more they use
the software the more interested they become in modifying it for their own
purposes.  Making it possible for Windows users to do development on otherwise
UNIX-oriented software, without leaving their personal desktop environments, is
appealing.  Being able to compile one's own software is also important for some
highly optimized numerical software, which tunes itself at compile time to the
computer it is being built on, sometimes with dramatic results.

Although this does not yet provide a fully reliable immediate solution for
porting OpenDreamKit software to Windows, we will continue to keep an eye
on WSL as it evolves.
