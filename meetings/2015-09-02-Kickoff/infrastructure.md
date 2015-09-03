---
layout: subpage
title: Kickoff meeting, infrastructure
---

It was decided to:

- Use existing infrastructure whenever possible (e.g. Sage's trac
  server), and in particular when contributing to existing software.

- Use ODK's github organisation for most public ODK specific
  infrastructure

- Create one repository per workpackage? Or just one label?

- Create a public issue on github per task and per deliverable, to
  track the progress and run design discussions.

  Possibly this can be automatized using Min's scripts and the
  metadata produced in proposal-www.pdata.

  Two options: include the original task text in the proposal, or just
  point to it.

  Whenever natural, the issue and discussion should be created in the
  issue tracker of the relevant software, with just a minimal issue on
  github containing a pointer.

- Any trick to cross reference tasks and deliverables?

- Use labels to mark tasks/deliverables/workpackages

- Use milestones

- Create specific repositories for actions that require access
  management (e.g. storing personal data about the recruitement of a person).

  Remaining question: where to host private repositories. Github?
  That would be around $2000 for the whole project, so totally
  doable. But:

  - Hosting personal data on the cloud?
  - What happens after the end of the project?

  Alternative: host our own gitlab repository.

  - Reliability?
  - Requires duplicating some of the info (e.g. accounts, ...)
  - What happens after the end of the project?
  - Less homogeneous user interfaces

- Use the OpenDreamKit repo OpenDreamKit.github.io/meetings/<date> to
  host the web page and public documents about each meeting

- Create mailing lists for all information that requires all person in
  a given body to be informed.

  - participants@opendreamkit.org      (public, archived)
  - community@opendreamkit.org         (public, archived)
  - coordination_team@opendreamkit.org (private)
  - advisory_board@opendreamkit.org    (private)
  - steering_commitee@opendreamkit.org (private)
  - coordinator@opendreamkit.org       (private, coordinator, coordinator deputy, manager)

- Make sure any private information is PGP encrypted, especially given
  that some of us use gmail.

# Recommendations

- Use gitter for chat

- Use Hubl.in for video conferences

- Use Framapad for temporary collaborative text editing

- Use adoodle.org for anonymous votes

Nicolas, Hans, Luca, Michael, ...

- Communication: mailing lists? Gitter? slack? OpenPaas?
- Private repositories
- Live collaboration: framapad, hubl.in, whiteboard, ...
- How do we want to track progress on the various tasks?
  Systematically open an issue on OpenDreamKit's github repo, possibly
  being just a link to some tracker elsewhere (e.g. Sage's trac
  server)
  - How to make lists of all tasks?
  - Could we create the issues automatically from the proposal?
  - Do we want a separate repo just for the tasks? Or per work package?
  - TODO: create an issue for doing this, and assign this to Benoit

# Hosting a machine for ODK?

Use cases:

- website analytics
- private github/gitlab
