---
layout: page
title: Participants
participants:

- name: Dominik Bernhardt
  affiliation: RWTH Aachen University

- name: Martin Bies
  affiliation: Université libre Bruxelles (ULB)

- name: Jens Brandt
  affiliation: RWTH Aachen University

- name: Thomas Breuer
  affiliation: RWTH Aachen University

- name: Christian Eder
  affiliation: University of Leipzig

- name: Claus Fieker
  affiliation: University of Kaiserslautern

- name: Johannes Flake
  affiliation: RWTH Aachen

- name: Pedro A. García Sánchez
  affiliation: Universidad de Granada

- name: Sebastian Gutsche
  affiliation: University of Siegen

- name: Max Horn
  affiliation: University of Siegen

- name: Surinder Kaur
  affiliation: Indian Institute of Technology Ropar

- name: Stefan Kohl

- name: Daniel McVeagh
  affiliation: Birkbeck College, University of London

- name: Sebastian Posur
  affiliation: University of Siegen

- name: Iryna Raievska
  affiliation: Institute of Mathematics of NAS of Ukraine

- name: Maryna Raievska
  affiliation: Institute of Mathematics of NAS of Ukraine

- name: Yue Ren
  affiliation: MPI Leipzig

- name: Mahsa Sayyary
  affiliation: MPI MIS

- name: Farideh Shafiei
  affiliation: Institute for Research in Fundamental Sciences (IPM)

- name: Farrokh Shirjian
  affiliation: Tarbiat Modares University

- name: Sandeep Singh
  affiliation: Akal university

- name: Andreas Steenpaß
  affiliation: University of Kaiserslautern

- name: Isabel Stenger
  affiliation: University of Kaiserslautern

- name: Leyli Jafari Taghvastani
  affiliation: Kurdistan university (Iran)

- name: Vinay Wagh
  affiliation: IIT Guwahati, India

- name: Wilf Wilson
  affiliation: University of Halle

- name: Fabian Zickgraf
  affiliation: University of Siegen

- name: Arezoo Zohrabi
  affiliation: University of Ostrava, Czech Republic
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
