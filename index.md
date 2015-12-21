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

*The project was labelled by the "[Free and Open Source Software Work Group of the Systematic Cluster](http://www.systematic-paris-region.org/en/get-info-topics/free-and-open-source-software).

*We acknowledge financial support from the OpenDreamKit Horizon 2020 European Research Infrastructures project (#676541).*

*This website has been produced with the assistance of the European Union. The contents of this publication are the sole responsibility of OpenDreamKit and of its partners, and can in no way be taken to reflect the views of the European Union.*


<p>&copy; {{ site.time | date: '%Y' }}. All rights reserved.</p>




