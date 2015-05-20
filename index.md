---
layout: default
title: Home
---

**:warning: Website under construction :warning:**

OpenDreamKit is a European Horizon 2020 Research project that will run
for four years, starting from September 2015. It will provide
substantial funding to the open source computational mathematics
ecosystem, and in particular popular tools such as LinBox, MPIR,
Sagemath, GAP, PariGP, LMFDB, Singular, and the IPython/Jupyter
interactive computing environment.

The total budget is about 7.6 million euros. The largest portion of
that will be devoted to employing an average of 11 researchers and
developers working full time on the project. Additionally, the
participants will contribute the equivalent of six other people
working full time. Altogether the project involves about 50 people
spread over 15 sites in Europe.

[Read more...](about)


## News

{% for post in site.posts %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ post.url }})
{% endfor %}

