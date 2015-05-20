---
layout: default
title: Home
---

OpenDreamKit is a European Horizon 2020 Research project that will run
for four years, starting from September 2015. It will provide
substantial funding to the open source computational mathematics
ecosystem, and in particular popular tools such as
[LinBox](http://linalg.org/),
[MPIR](http://mpir.org),
[SageMath](http://sagemath.org/),
[GAP](http://www.gap-system.org/),
[Pari/GP](http://pari.math.u-bordeaux.fr/),
[LMFDB](http://lmfdb.org/),
[Singular](http://www.singular.uni-kl.de/), and the
[IPython/Jupyter](http://jupyter.org/) interactive computing
environment.


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

