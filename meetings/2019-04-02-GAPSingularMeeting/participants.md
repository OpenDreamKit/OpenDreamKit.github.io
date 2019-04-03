---
layout: page
title: Participants
participants:
- name: Thomas Breuer
  affiliation: RWTH Aachen University

- name: Christian Eder
  affiliation: University of Kaiserslautern

- name: Claus Fieker
  affiliation: University of Kaiserslautern

- name: Pedro A. García Sánchez
  affiliation: Universidad de Granada

- name: Sebastian Gutsche
  affiliation: University of Siegen

- name: Max Horn
  affiliation: University of Siegen

- name: Sebastian Posur
  affiliation: University of Siegen

- name: Andreas Steenpaß
  affiliation: University of Kaiserslautern

- name: Isabel Stenger
  affiliation: University of Kaiserslautern
---

<ol>
{% for p in page.participants %}
  <li>
    <strong>{{ p.name }}</strong>
    {% if p.affiliation != null %} ({{ p.affiliation }}){% endif %}
    {% if p.links != null %}
        {% for item in p.links %}
            <a href="{{ item[1] }}">({{ item[0] }})</a>
        {% endfor %}
    {% endif %}
    <br/>
      {% if p.talk != null %} Talk: {{ p.talk }}{% endif %}
  </li>
{% endfor %}
</ol>
