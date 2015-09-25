---
layout: subpage
title: Kickoff meeting, infrastructure
---

# General recommendations

- Use existing infrastructure whenever possible (e.g. Sage's trac
  server), and in particular when contributing to existing software.

- Use ODK's github organisation for most public ODK specific
  infrastructure

# Mailing lists

- Create mailing lists for all information that requires all person in
  a given body to be informed.

  [https://github.com/OpenDreamKit/OpenDreamKit/issues/13]()

- Make sure any private information is PGP encrypted, especially given
  that some of us use gmail.

# Progress tracking on tasks, deliverables, ...

- Create a public issue on github per task and per deliverable, to
  track the progress and run design discussions.

  [https://github.com/OpenDreamKit/OpenDreamKit/issues/12]()

  This was automatized by Min using the metadata produced in
  Proposal/final.pdata

  Whenever natural, this should be just a pointer to an issue of the
  relevant software where the actual discussion will happen.

- Use milestones

# Other repositories

- Create specific repositories for actions that require access
  management (e.g. storing personal data about the recruitement of a person).

  Remaining question: where to host private repositories. Github?
  That would be around $2000 for the whole project, so totally
  doable. But:

  - Hosting personal data on the cloud?
  - What happens after the end of the project?
  - Administratively possible?

  Alternative: host our own gitlab repository.

  - Reliability?
  - Requires duplicating some of the info (e.g. accounts, ...)
  - What happens after the end of the project?
  - Less homogeneous user interfaces

# Workshop organisation

Create one issue to discuss the organization of the workshop (choosing
the date, ...).

Send a first mail to participants@opendreamkit.org /
communit@opendreamkit.org announcing the plan to organize the
workshop.

Send a second mail when the date is fixed.

Use the OpenDreamKit repo OpenDreamKit.github.io/meetings/<date> to
host the web page and public documents about each meeting.

# Recommendations

- [http://gitter.im]() for chat
- [http://appear.in]() / [http://hubl.in]() for video conferences
- Framapad for temporary collaborative text editing
- [http://framadate.org]() for polls
- [http://adoodle.org]() for anonymous votes
- [http://limesurvey.org]() for surveys
- whiteboard?

# Hosting a machine for ODK?

Use cases:

- website analytics
- private github/gitlab
- hosting our own limesurvey instance
