# LG2 2025 - Créer une page web pour la visualisation de données géoréférencées

L'objectif de ce TP est de créer une page web affichant différentes données
géoréférencées.

> Votre travail est à rendre avant le mardi 10 février 2026 à 10h. Vous êtes
> priés pour cela d'envoyer un dossier contenant les fichiers de votre site via
> un partage
> [_France transfert_](https://francetransfert.numerique.gouv.fr/upload)
> à l'adresse mail _madec.germerie-guizouarn@ign.fr_.

## Fonctionnalités attendues

### Affichage d'un visualiseur Leaflet

Votre page web doit afficher sur toute sa largeur et toute sa hauteur un
visualiseur Leaflet. Pour rappel, vous trouverez la documentation de Leaflet
sur leur [site web](https://leafletjs.com).

### Affichage du plan IGN

Vous devez permettre l'affichage du plan IGN, accessible via le flux WMTS
suivant :

```js
"https://data.geopf.fr/wmts?" +
"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0" +
"&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"+
"&FORMAT=image/png" +
"&STYLE=normal" +
"&TILEMATRIXSET=PM" +
"&TILEMATRIX={z}" +
"&TILEROW={y}" +
"&TILECOL={x}"
```

### Affichage des ortho-photographies IGN

Vous devez permettre l'affichage des ortho-photographies IGN, accessibles via le
flux WMTS suivant :

```js
"https://data.geopf.fr/wmts?" +
"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0" +
"&LAYER=ORTHOIMAGERY.ORTHOPHOTOS"+
"&FORMAT=image/jpeg" +
"&STYLE=normal" +
"&TILEMATRIXSET=PM" +
"&TILEMATRIX={z}" +
"&TILEROW={y}" +
"&TILECOL={x}"
```

### Affichage des données sismiques USGS

Vous devez permettre l'affichage des données vectorielles contenues dans le
fichier GeoJSON accessible à l'URL suivant :

```js
"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
```

Ce fichier GeoJSON contient des points répertoriant chacun un séisme de
magnitude supérieure à 2.5 survenu durant les 7 derniers jours.

Ces points devront être représentés sur votre carte par des cercles, de taille
variable : plus la magnitude du séisme est élevée, plus le rayon du cercle doit
être grand. Vous êtes libres du choix de l'ordre de grandeur de ce rayon. La
couleur des cercles doit également être variable : les séismes survenus entre
0km et 40km de profondeur devront être représentés par des cercles rouges. Ceux
entre 40km et 80km de profondeur par des cercles oranges, et ceux au delà de
80km de profondeur par des cercles verts.

### Affichage de données météorologiques

Votre carte doit permettre à l'utilisateur d'afficher des données
météorologiques à l'endroit de son choix. Pour cela, lorsqu'il clique sur la
carte avec la touche `Control` pressée, une popup doit s'ouvrir à l'endroit du
clic. Cette popup doit afficher la température, la vitesse et la direction du
vent, la hauteur de précipitations et le taux de couverture nuageuse sur la
dernière heure.

Pour accéder aux données météorologiques, vous pourrez utiliser l'API
[Open-Meteo](https://open-meteo.com/). Cette API vous permet de récupérer des
données météorologiques à une latitude et une longitude données via l'URL
suivant :

```js
"https://api.open-meteo.com/v1/forecast?" +
"latitude={latitude}&longitude={longitude}" +
"&current_weather=true&hourly=precipitation,cloudcover&timezone=auto"
```

Vous pouvez saisir directement cet URL dans la barre de recherche d'un
navigateur (en remplaçant bien sûr `{latitude}` et `{longitude}` par des
valeurs adéquates) pour avoir un aperçu du format des données envoyées par
l'API.

### Choix des données à afficher

Dans un coin de votre page web devra se trouver un menu permettant à
l'utilisateur de choisir quelle donnée afficher sur la carte. Ce menu proposera
deux parties :

- Une première partie permettra à l'utilisateur de choisir quel fond de carte
  (plan ou ortho-photographies IGN) il souhaite afficher.
- Une seconde partie permettra à l'utilisateur de décider si les données
  sismiques doivent être affichées ou non.

### Déplacement de la vue cartographique par saisie de coordonnées

Dans un autre coin de votre page web devra se trouver un menu permettant à
l'utilisateur de saisir des coordonnées (en latitude et longitude). À la
validation par l'utilisateur, la carte devra être centrée sur les coordonnées
saisies, tout en conservant le même niveau de zoom qu'avant validation.

> Vous êtes libres pour les choix de style des deux menus (choix de données et
> choix de coordonnées). Tâchez toutefois de faire des choix judicieux, afin que
> tous les éléments de votre page web proposent une cohérence graphique.

