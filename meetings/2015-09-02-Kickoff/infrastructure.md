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

  - participants@opendreamkit.org      (public, archived)
  - community@opendreamkit.org         (public, archived)
  - coordination@opendreamkit.org (private)
  - advisory@opendreamkit.org    (private)
  - steering@opendreamkit.org (private)
  - coordinator@opendreamkit.org       (private, coordinator, coordinator deputy, manager)

- Make sure any private information is PGP encrypted, especially given
  that some of us use gmail.

# Progress tracking on tasks, deliverables, ...

- Create a public issue on github per task and per deliverable, to
  track the progress and run design discussions.

  Automatized using Min's scripts and the metadata produced in
  proposal-www.pdata.

  Two options: include the original task text in the proposal, or just
  point to it.

  Whenever natural, the issue and discussion should be created in the
  issue tracker of the relevant software, with just a minimal issue on
  github containing a pointer.

- Any trick to cross reference tasks and deliverables?

- Use labels to mark tasks/deliverables/workpackages

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

- gitter for chat

- appear.in / hubl.in for video conferences

- Framapad for temporary collaborative text editing

- adoodle.org for anonymous votes

- whiteboard?

# Hosting a machine for ODK?

Use cases:

- website analytics
- private github/gitlab
