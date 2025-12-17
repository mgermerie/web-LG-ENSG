# TP WEB - LG2 - Créer une ébauche de SIG web

L’objectif est de créer une ébauche de SIG web. Vous devrez produire une page web qui permette l’import de données géographiques, leur affichage, leur modification, leur création et enfin leur export dans un format standard.

Votre SIG doit proposer un affichage en WGS84 (longitude et latitude). Pour simplifier la représentation, vous pouvez considérer que le coin supérieur gauche de votre page web correspond à la longitude -180° et à la latitude +90°. Le coin inférieur droit correspond lui à la longitude +180° et à la latitude -90°. Ainsi, le point de longitude +90° et de latitude +45° doit être affiché au centre du quart supérieur droit de votre page web.
Les points doivent être représentés par des ‘div’ dont les bordures et les dimensions doivent être adaptées pour afficher un disque.

## Données

Votre SIG doit uniquement permettre d’afficher des points. Il doit supporter le format GeoJSON pour l’import et l’export des données. Les coordonnées géographiques sont toutes exprimées en WGS84.

Dans les faits, les points représentent des villes. Chaque point doit donc avoir plusieurs données annexes : un nom et une population.

## Fonctionnalités attendues

Votre SIG doit inclure : 
- La création et l’affichage d’un point lorsque l’utilisateur clique sur votre page web avec la touche Control enfoncée. Le point doit être affiché à l’endroit où l’utilisateur clique.
- L’import d’un fichier GeoJSON à partir d’une URL. Les points contenus dans ce fichier doivent être affichés sur votre page web.
- Le déplacement d’un point lorsque l’utilisateur clique dessus avec le clique droit et déplace la souris en maintenant le clique droit enfoncé.
- La suppression d’un point lorsque l’utilisateur clique dessus avec la touche Alt du clavier enfoncée.
- L’export de tous les points affichés dans un fichier GeoJSON.


## Précisions d’implémentation 

Votre code peut contenir un objet ‘conversion’ qui stocke les fonctions de conversion de coordonnées. L’objet peut donc contenir une fonction ‘wgs84ToScreen’ pour la conversion du WGS84 au repère de coordonnées écran (x, y en pixels). La conversion inverse peut être assurée par une fonction ‘screenToWgs84’.

Vous pouvez créer des fonctions ‘addPoint’, ‘movePoint’ et ‘removePoint’ dont l’action est implicite. Vous pouvez ensuite assurer la gestion des événements (‘click’, ‘mousedown’, ‘mouseup’…) en vous aidant de ces fonctions.

Prévoyez un formulaire pour la saisie de l’URL d’un fichier GeoJSON, et un second formulaire pour renseigner des informations sur un point créé par l’utilisateur.
