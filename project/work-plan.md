---
layout: page
title: Work plan
menu_order: 2
---

We have set various objectives and tasks. The nine objectives must be
reached thanks to tasks,
which are divided into seven workpackages. The various tasks are
considered accomplished after the deliverables
related to them are implemented and/or published.

We use github as a task management tool: each task and each deliverable is made
into a *github issue* where discussions are carried out. All our discussion and development
process is public.

 * [See all our tasks on github](https://github.com/OpenDreamKit/OpenDreamKit/labels/task)
 * [See all our deliverables on github](https://github.com/OpenDreamKit/OpenDreamKit/labels/deliverable)

## Work Packages

You will find below a list of our work packages linked to the relevant folders on github
which contains a description of the workpackage and source files for the deliverables which
have been completed. 

{% for wp in site.data.workpackages %}
- WP{{forloop.index}}: [{{wp.title}}](https://github.com/OpenDreamKit//OpenDreamKit/tree/master/WP{{forloop.index}}) 
-- [github tasks](https://github.com/OpenDreamKit/OpenDreamKit/issues?q=label%3Atask+label%3AWP{{forloop.index}}) 
-- [github deliverables](https://github.com/OpenDreamKit/OpenDreamKit/issues?q=label%3Adeliverable+label%3AWP{{forloop.index}}) 
{% endfor %}

## Objectives

{% for objective in site.data.objectives %}
- {{ objective.title }}: {% for wp in objective.WP %}[WP{{wp}}](https://github.com/OpenDreamKit/OpenDreamKit/labels/WP{{wp}}){% if forloop.last == false %},{% endif %} {% endfor %}{% endfor %}
