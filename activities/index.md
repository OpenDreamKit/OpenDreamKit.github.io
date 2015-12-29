---
layout: page
title: Activities
---

{% for activity in site.activities %}
<hr>
{{ activity }}
: [{{ activity.title }}]({{ site.baseurl}}{{ activity.url }})
<hr>
{% endfor %}
