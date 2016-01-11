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
 {{activity.relative_path}}
 {% unless activity.relative_path contains 'README.md' %}
  : [{{ activity.title }}]({{ site.baseurl}}{{ activity.url }})<br>
  {{ activity.location }}
 {% endunless %}
{% endfor %}
