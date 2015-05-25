---
layout: default
title: Home
---

==========================================================================================
OpenDreamKit: Open Digital Research Environment Toolkit for the Advancement of Mathematics
==========================================================================================

{% include intro.md %}

[Read more...](about)


## News

{% for post in site.posts %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ site.baseurl}}{{ post.url }})
{% endfor %}

