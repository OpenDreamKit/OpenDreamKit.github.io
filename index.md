---
layout: default
title: Home
---

# OpenDreamKit: Open <br>Digital Research Environment Toolkit<br>for the Advancement of Mathematics

{% include intro.md %}

[Read more...](about)


## News

{% for post in site.posts %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ site.baseurl}}{{ post.url }})
{% endfor %}

