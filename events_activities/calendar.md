---
layout: page
title: Events calendar
menu_order: 2
id: Calendar
source: _data/events.yml
redirect_from: "/calendar/"
---

{% comment %}
    Edit the file _data/events.yml for adding new events
{% endcomment %}

Please find here some past and upcoming events. Events organized by the
OpenDreamKit team are in blue. In yellow, you will find external events that
we think are interesting for the community.

[ICAL link](/calendar.ics)

<div id="calendar"></div>

## ODK events

{% assign events = site.data.events.InternalEvents | sort:"start" | reverse %}
<ul>
{% for event in events %}
  <li>
     {% if event.url %}<a href="{{ event.url }}" >{{ event.title }}</a>{% else %}{{ event.title }}{% endif %}
     {% id event.location %}({{event.location}}){% endif %}
	 </li>
{% endfor %}
</ul>

## External events

{% assign events = site.data.events.ExternalEvents | sort:"start" | reverse %}
<ul>
{% for event in events %}
    <li>{% if event.url %}<a href="{{ event.url }}" >{{ event.title }}</a>{% else %}{{ event.title }}{% endif %}</li>
{% endfor %}
</ul>
