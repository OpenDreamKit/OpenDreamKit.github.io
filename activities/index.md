---
layout: page
title: Activities
source: _activities/
---

{% comment %}
  To add a new activity, please create a file in the _activities/
  directory, taking the existing activities as examples.
{% endcomment %}

{% for activity in site.activities reversed %}
  {{ activity.date | date_to_string }} ({{ activity.type }} by {{ activity.author }})
  : [{{ activity.title }}]({{ site.baseurl}}{{ activity.url }})<br>
  {{ activity.location }}
{% endfor %}
