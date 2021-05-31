---
layout: slides_wp
title: "Retour d'expérience: OpenDreamKit et Science Ouverte"

theme: white
transition: none
author: Nicolas M. Thiéry<br>Université Paris-Sud
date: 2021/06/01
fulldate: 1 juin 2021
location: Atelier Science Ouverte, Wébinaire Horizon Europe
img: /public/images/rp3-meeting-rehearsal.jpg
tags:
    - talk
    - blog
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^----\n">
<script type="text/template">

## Plan

1.  OpenDreamKit?

2.  Données Ouvertes

3.  Publications Ouvertes

4.  Logiciels Libres

5.  Montage et gestion ouvert!

---

## OpenDreamKit (2015-2019) #676541

<center>
  Open Digital Research Environment Toolkit<br>
  for the Advancement of Mathematics<br>
  [OpenDreamKit.org](OpenDreamKit.org)
</center>

**Objectif**: soutenir l'écosystème des logiciels libres pour les **maths pure et applications**
- Ingénierie logicielle: portabilité, interoperabilité, distribution, HPC, ...
- Environnements interactifs basés sur Jupyter
- Animation de la communauté

**Consortium**: [15 sites, 50 participants](http://opendreamkit.org/partners), ... together with the international community!

**Programme**: [Horizon 2020](https://ec.europa.eu/programmes/horizon2020/), [European Research Infrastructures](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures)

**Appel à projet**: Environnements Virtuels de Recherche

**Budget**: 7.6 M€

---

## OpenDreamKit et Données Ouvertes

### Données en mathématiques?

- Résultats de calculs (parfois très lourds)
- Résultats de recherche  
  Atlas des groupes simples: plusieurs décennies de travail par toute
  une communauté de chercheurs
- Données très riches, très structurées, très diverses
- Frontière donnée / calcul floue

### Facile

- Pas de problèmes éthiques
- Peu de données gigantesques
- Peu de problèmes de reproductibilité
- Tradition de partage dans la communauté
- Gestion de la propriété Intellectuelle
- Plan de Gestion des Données (Data Management Plan)   
  Simple liste de jeux de données

### Difficile

- FAIR en pratique: Findable, Accessible, Interoperable, Reusable
- Formation

---

## OpenDreamKit et Publications Ouvertes

Longue tradition de publications libres en maths / info:
- Archives ouvertes: arxiv.org, ... (Green Open Access)
- Transition en cours de nombreuses revues (Diamond Open Access)

Question:
- Publication dans des revues en Gold Open Access?  
  Finalement non


## OpenDreamKit et Logiciel Libre

- ~~Réaliser un produit~~
- Contribuer à un écosystème

Bénéfices:
- Construire sur les épaules des géants
- Travail collaboratif avec la communauté
- Pérennité

À noter:
- Existence des modèles économiques éprouvés
- Collaboration avec des PME: Logilab, QuantStack, CoCalç, ...
- Groupe Logiciel Libre du Pôle de Compétitivité Systematic

---

## Montage et gestion de projet ouverte

<center><img src="/public/images/haut2.jpg" alt="just a nice picture" width="60%"/></center>

Note:

- Depuis 25 ans, je suis engagé dans le développement de logiciels de
  calcul pour les maths -- parce que j'en ai besoin -- et dans la
  promotion de la mutualisation, du partage, du logiciel libre. Bref,
  de la science ouverte.

  Aussi longtemps que j'ai pu, mon cœur de stratégie c'était comment
  fonctionner sans financement spécifique. Pour préserver mon temps
  pour le développement et l'animation de communauté. Parce que je
  pense que le financement par projet n'est souvent pas un bon système
  de financement de la recherche. Et pour préserver ma liberté.

  Chercher des sous, c'est risquer de vendre son âme.

----

## L’étincelle initiale

{% include vspace.html length="15%" %}

**Une question de Bruce Westbury at [FPSAC 2013](http://fpsac.org) in Paris:**
<center>
    *Given unlimited funding, what would you do with it for Sage?*
</center>

----

## Le montage du projet: approche

### Suivre mes rêves

- Logiciel libre, données ouvertes, publications ouvertes, **projet ouvert**

- Construction du bas vers le haut:
    - Analyser les besoins de la communauté:<br>
      quelles tâches requièrent un gros investissement?
    - Chercher un appel à projet adéquat (Cellule Europe!!!)
    - Trouver une histoire sincère qui les lie tous<br>
      «a smart and creative interpretation of the call»

----

### Mobiliser la communauté et favoriser l'intelligence collective

{% include vspace.html %}

#### Projet ouvert

- Invitation large à la participation à la définition du projet
- Écriture publique du projet

{% include vspace.html %}

#### Développer une **vision partagée** du project

- Qui sommes nous?
- Quels sont nos objectifs?
- De quoi partons nous?
- Quelle est notre stratégie?
- Comment notre projet se positionne dans le paysage?
- Pour quoi sommes nous l'équipe rêvée pour la tâche?

----

### Impliquer les participants

#### Encourager

- à définir ensemble la vision du project
- à agir selon leurs convictions: c'est eux les experts!

{% include vspace.html %}

#### Faciliter

- À quel stade en est la rédaction du projet?
- Que reste-t'il à faire?
- Comment peuvent-ils aider?

{% include vspace.html %}

#### Bienveillance, exigence et joie

#### Sourire, courir devant, espérer ... et remercier

{% include vspace.html %}

<center>[Quand cela fonctionne](https://www.youtube.com/watch?v=kM9zcfRtOqo)</center>

----

### Les outils collaboratifs

#### Échelle:

- 100 pages
- 20 coauteurs
- 3000 e-mails; 400 dans les deux derniers jours

Ne même pas penser à Word, Dropbox, ...

----

### Collaborative tools: some recommendations

#### Proposal writing

- Version control and forge: e.g. [GitHub](github.com) or [GitLab](gitlab.com)
- Automate whatever you can: tables, graphics, computation of the budget, ...
- Source files in text: for example LateX + [proposal](http://www.ctan.org/tex-archive/macros/latex/contrib/proposal) style file

{% include vspace.html %}

#### Communication

- General discussions and progress tracking: mailing list, e.g. on sympa
- Discussions on specific topics: e.g. GitHub issues
- Videoconferences: jitsi, BBB, ...
- Chat: gitter / slack / mattermost
- Live text editing and note taking: e.g. [hackmd.io](hackmd.io) / codimd

{% include vspace.html %}

<center>Train, train, train your team; learn, learn, learn</center>

---
## Montage et gestion ouverte du projet: une clé du succès

- Éthique et qualité
- Esprit d'équipe et confiance réciproque
- Soutien de la communauté
- Fraîcheur et sincérité

**Distinction**: Étoiles de l'Europe 2020


## Science Ouverte
- Choix éthique
- Choix pragmatique:  
  Ingrédient essentiel des collaborations large échelle

----

## More reading

- [On OpenDreamKit's open and collaborative proposal writing](http://opendreamkit.org/2015/01/31/open-proposal-writing/)

- The [developer's perspective](/about-developers) on OpenDreamKit

- [About OpenDreamKit](/about)
</script>
</section>
