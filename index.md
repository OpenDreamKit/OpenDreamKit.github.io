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

<p>&copy; {{ site.time | date: '%Y' }}. All rights reserved.</p>


*WE ACKNOWLEDGE FINANCIAL SUPPORT FROM THE OPENDREAMKIT HORIZON 2020 EUROEPEAN RESEARCH INFRASTRUCTURES PROJECT (#676541).*

*THIS WEBSITE HAS BEEN PRODUCED WITH THE ASSISTANCE OF THE EUROPEAN UNION. THE CONTENTS OF THIS PUBLICATION ARE THE SOLE RESPONISBILITY OF OPENDREAMKIT AND OF ITS PARTNERS, AND CAN IN NO WAY BE TAKEN TO REFLECT THE VIEWS OF THE EUROPEAN UNION.*

