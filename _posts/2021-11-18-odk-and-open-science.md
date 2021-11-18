---
layout: slides_wp
title: "La Science Ouverte dans un Projet Européen de logiciel de recherche?"
theme: white
transition: none
author: Nicolas M. Thiéry<br>Université Paris-Saclay
date: 2021/11/18
fulldate: 18 novembre 2021
location: Secrétariat Permanent de la Science Ouverte, MESRI
img: /public/images/rp3-meeting-rehearsal.jpg
tags:
    - talk
    - blog
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^----\n">
<script type="text/template">

<!--
## La Science Ouverte dans un Projet Européen de logiciel de recherche?

Secrétariat Permanent de la Science Ouverte, MESRI  
18 novembre 2021


<img src="/public/images/rp3-meeting-rehearsal.jpg" align="right" width="55%"/>

Nicolas M. Thiéry<br>
LISN, Université Paris-Saclay
<br><br><br>
----

!-->


## La Science Ouverte dans un Projet Européen de logiciel de recherche?

1.  Contexte: logiciels métier pour la recherche (en mathématiques)

2.  OpenDreamKit?

3.  Données Ouvertes, Publications Ouvertes, Logiciels Libres

4.  Montage et gestion ouvert!

5.  Opinions

---

## Contexte: logiciels métier pour les mathématiques (pures)

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

- Pour quoi faire?
  - **Calculer**, **Tabuler**
  - **Explorer**, **découvrir** et **tester des conjectures**  
    $\Longrightarrow$ *Mathématiques Expérimentales*
  - **Enseigner**
  - (voire **Formaliser**, **Prouver**, hors champ pour aujourd'hui)

----

### 2000-2020: Évolution du paysage du calcul

- de **logiciels en silo** (Maple, Mathematica, Matlab, GAP, ...)

- vers un **écosystème d'écosystèmes libres**  
  avec de l'interopérabilité et des fondements communs  
  dont environnements interactifs Jupyter, langages (Julia, R, Python,
  C++, ...), bibliothèques (scipy, pandas, scikit-learn, ...)

- grâce au logiciel libre, à la science ouverte

----

### Exemple: SageMath (2005-)

- combinaison de centaines de bibliothèques libres  
  plus 1.5 million de lignes de Python/Cython
  
- modélisation de milliers de types d'objets mathématiques

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

- modèle de développement: **par les utilisateurs pour les utilisateurs**
  - des centaines de contributeurs dans le monde
  - mérites intrinsèques (co-construction)
  - adaptation aux (maigres) ressources disponibles
  - limites: travail de fond (maintenance, ingénierie)

---

## OpenDreamKit (2015-2019) #676541

<img src="/public/images/banner.png" align="right" width="55%" style="opacity:0.5;filter:alpha(opacity=40);"/>

<center>

  Open Digital Research Environment Toolkit<br>
  for the Advancement of Mathematics<br>
  [OpenDreamKit.org](OpenDreamKit.org)

</center>

**Consortium**: [15 sites, 50 participants](http://opendreamkit.org/partners)  
... avec la communauté internationale!

**Budget**: 7.6 M€

**Objectif**: soutenir l'écosystème des logiciels libres pour les **maths pure et applications**
- Ingénierie logicielle: portabilité, interoperabilité, distribution, HPC, ...
- Environnements interactifs basés sur Jupyter
- Animation de la communauté

**Programme**: [Horizon 2020](https://ec.europa.eu/programmes/horizon2020/), [European Research Infrastructures](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures)

**Appel à projet**: Environnements Virtuels de Recherche

---

## OpenDreamKit et Science Ouvertes

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### OpenDreamKit et Publications Ouvertes (Trivial)

Longue tradition de publications libres en maths / info:
- Archives ouvertes: arxiv.org, ... (Green Open Access)
- Transition en cours de nombreuses revues (Diamond Open Access)

Question:
- Publication dans des revues en Gold Open Access?
  Finalement non: pas besoin

----

## OpenDreamKit et Logiciel Libre (Facile)

- ~~Réaliser un produit?~~
- Contribuer à un écosystème

Bénéfices:
- Construire sur les épaules des géants
- Travail collaboratif avec la communauté
- Pérennité

À noter:
- Existence de modèles économiques éprouvés
- Collaboration avec des PME: Logilab, QuantStack, CoCalc, ...
- Groupe Logiciel Libre du Pôle de Compétitivité Systematic

----

## OpenDreamKit et Données Libres

### Données en mathématiques?

- Résultats de calculs (parfois très lourds)
- Résultats de recherche:  
  Atlas des groupes simples: plusieurs décennies de travail par toute
  une communauté de chercheurs
- Données très riches, très structurées, très diverses
- Frontière données / calcul floue

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### «Facile»

- Pas de problèmes éthiques
- Peu de données gigantesques
- Peu de problèmes de reproductibilité
- Tradition de partage dans la communauté
- Gestion de la propriété Intellectuelle
- Plan de Gestion des Données (Data Management Plan): Simple liste de jeux de données

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Difficile

- FAIR en pratique:  
  Findable, Accessible, Interoperable, Reusable
- Formation

----

## Une innovation: montage et gestion de projet ouverts

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Mobiliser la communauté et favoriser l'intelligence collective

- Invitation large à la participation à la définition du projet
- Écriture publique du projet
- Construction du bas vers le haut:
    - Analyser les besoins de la communauté  
      quelles tâches requièrent un gros investissement?
    - Chercher un appel à projet adéquat  
	  (Cellule Europe!!!)
    - Trouver une histoire sincère qui les lie tous  
      «a smart and creative interpretation of the call»

----

### Impliquer les participants

#### Développer une **vision partagée** du project

- Qui sommes nous?
- Quels sont nos objectifs?
- De quoi partons nous?
- Quelle est notre stratégie?
- Comment notre projet se positionne dans le paysage?
- Pour quoi sommes nous l'équipe rêvée pour la tâche?

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

#### Encourager

- À définir ensemble la vision du project
- À agir selon leurs convictions: c'est eux les experts!

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

#### Faciliter

- À quel stade en est la rédaction du projet?
- Que reste-t'il à faire?
- Comment peuvent-ils aider?
- **Outils collaboratifs**

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

#### Bienveillance, exigence et joie

<center>

**Sourire, courir devant, espérer ... et remercier**

[Quand cela fonctionne](https://www.youtube.com/watch?v=kM9zcfRtOqo)

</center>

----

## Montage et gestion ouverte du projet: une clé du succès

- Éthique et qualité  
  Expression sincère des besoins (propres/de la science)
- Esprit d'équipe et confiance réciproque
- Soutien de la communauté
- Simplicité, agilité, cohérence
- Fraîcheur et sincérité

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

**Distinction**: Étoiles de l'Europe 2020

---

## Conclusions

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Science Ouverte dans un Projet Européen

- Choix éthique
- Choix pragmatique:  
  Ingrédient essentiel d'une collaboration large échelle

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Innovation: montage et gestion ouverte de projet

Un succès indubitable, dans un contexte particulier
- projet d'infrastructure de recherche
- des besoins à résoudre et non résoudre des problèmes

Généralisation?

- À essayer dans d'autres contextes!
- À encourager?  
  Critères d'évaluation des projets?
- Un objet de recherche en science ouverte?

Ref: [On OpenDreamKit's open and collaborative proposal writing](http://opendreamkit.org/2015/01/31/open-proposal-writing/)

----

## Infrastructure numérique pour la recherche

### Ressources matérielles

Mésocentres, super-calculateurs, grilles, cloud, ...

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Services numériques

Dont environnement virtuels (JupyterHub, Candyce, ...)

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

### Logiciels métiers
    
La couche la plus précieuse (opinion)

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

- **Préserver**:
  - Software Heritage, ...
- **Soutenir**:
  - Reconnaissance de l'implication des utilisateurs-dévelopeurs
  - Ingénieurs de Recherche
- **Financer**
  - La maintenance des communs et pas que le neuf et disruptif

<!-- +++ {"slideshow": {"slide_type": "fragment"}} !-->

#### Difficultés
- Limites du financement par projet
  - alternance d'orages et de traversées du désert
  - tension avec les carrières (notamment IR!)
  - épuisement des porteurs
- Verrouillage par des lobbies
  - plus d'ouverture dans le montage des projets et des appels à projets?
