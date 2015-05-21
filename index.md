---
layout: default
title: Home
---

{% include intro.md %}

[Read more...](about)


## News

{% for post in site.posts %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ post.url }})
{% endfor %}

