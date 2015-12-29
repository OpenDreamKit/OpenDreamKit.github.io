---
layout: slides
title: "Retour d'expérience: licences pour les logiciels de maths pures"
theme: white
transition: none
author: Nicolas M. Thiéry
fulldate: 17 novembre 2015
location: "Journée LOOPS: «Je code, je diffuse, oui mais comment ?»"
---

<section data-markdown data-separator="^---\n" data-separator-vertical="^--\n">
# {{page.title}}

{{page.author}}

{{page.fulldate}}

{{page.location}}

---
# Logiciels pour les maths pures

- Algèbre
- Théorie des nombres
- Géométrie
- Calcul symbolique
- Mathématiques discrètes
- ...

--

## Des logiciels, pour quoi faire?

- Exploration informatique
- Vérification de conjectures
- Preuves mécanisées
- Assistants de preuves & preuves certifiées
- Travail collaboratif
- Enseignement
- Applications

--

## Micro historique

### 50's-80's

- Les mathématiciens écrivent du code ad-hoc pour leur recherche

- 1976: démonstration mécanisée du théorème des quatre couleurs

--

### 80's - 90's

- Systèmes généralistes commerciaux:

  Maple, Mathematica, ...

- Systèmes libres spécialisés:

   Maxima, GAP, Pari/GP, Singular, Macaulay, ...

- OVNIS:

  Axiom, MuPAD, ...

### Début des années 2000

La frustration gagne la communauté

--
## 2005-2015: SageMath

- Une distribution des logiciels libres spécialisés

- Une bibliothèque Python:
  - 1.5 M lignes code/doc/tests
  - Interfaces et intégration
  - Fonctionalités natives

- Un bloc-note :

  - Source d'inspiration pour IPython/Jupyter
  - En cours de migration vers celui-ci

- Un Environnement Virtuel de Recherche ([SageMathCloud](cloud.sagemath.org))

- 300 contributeurs

---
# Étude de cas: Sage-Combinat

## Constat dans mon domaine

- 95% des efforts de développement sont génériques
- Opportunité de mutualisation


## Mission de Sage-Combinat (2000-)

«Améliorer MuPAD/Sage comme boîte à outils extensible pour
l'exploration informatique en combinatoire algébrique, en fédérant et
mutualisant les efforts de développements des chercheurs»

http://combinat.sagemath.org

--
## Quelques éléments de stratégie

- Développé par des chercheurs pour des chercheurs 

  *Avec un usage plus large en vue*

- Développement décentralisé et international 

  *Garantie d'indépendance vis-à-vis des tutelles*

- Chaque ligne de code justifiée par un projet de recherche 

  Avec une vision à long terme (développement agile)

- Coeur du développement par des permanents 

  *Les doctorants se concentrent sur leurs propres besoins*

- Concepts et méthodologie de développement modernes

--
## Choix de la licence

- Licence libre:

  - Choix éthique et pragmatique
  - Mutualiser et diffuser
  - Se protéger des tutelles

- MuPAD-Combinat: LGPL

- Sage-Combinat: GPL

---
# Licences dans SageMath

- SageMath: GPL

- Paquets standards: GPL-Compatible

- Paquets optionnels: toutes licenses

- Interfaces avec des logiciels privateurs

--
## Quelques problèmes rencontrés

- Logiciels sans licence

- Logiciels sous licence non standard:

  - GAP3: moralement libre, mais développeurs dispersés voire décédés
  - Nauty: interdit pour les militaires; donc non libre

- SageMathCloud: libérer ou pas le code?

--
# Évolution récente

- Reconnaissance des valeurs éthiques et pragmatiques du libre, par
  les tutelles et les financeurs

- Projets Européens H2020 e-Infrastructure: 

  quasi-obligation de données, code, et publications libres

- Exemple: [OpenDreamKit](http://opendreamkit.org/)

--
# Résumé

## Spécificités du contexte

- Objectif principal: 

  mutualisation d'efforts de développements

- Code à forte composante métier

- Tradition de partage

- Opinions éthiques fortes

## Choix de licence

- Libre; typiquement GPL

</section>
