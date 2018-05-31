---
layout: default
title: Home
---


{% include intro.md %}

[Read more...](project/about)

## Recent activities

{% for post in site.tags['front-page'] %}
  {% if forloop.index <= 5 %}
    {% include post_link.html %}
  {% endif %}
{% endfor %}

[See all activites](/events_activities/project_activities/)


*The project was labelled by the [Free and Open Source Software Work Group of the Systematic Cluster](http://www.systematic-paris-region.org/en/get-info-topics/free-and-open-source-software).*

*We acknowledge financial support from the OpenDreamKit Horizon 2020 European Research Infrastructures project (#676541).*

*This website has been produced with the assistance of the European Union. The contents of this publication are the sole responsibility of OpenDreamKit and of its partners, and can in no way be taken to reflect the views of the European Union.*


<p>&copy; {{ site.time | date: '%Y' }}. All rights reserved.</p>





