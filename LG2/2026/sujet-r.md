# LG2 2025 - Rattrapage - Créer une page web pour la visualisation de données géoréférencées

L'objectif de ce TP est de créer une page web affichant différentes données
géoréférencées.

> Votre travail est à rendre avant le jeudi 30 avril 2026 à 23h59. Vous êtes
> priés pour cela d'envoyer un dossier contenant les fichiers de votre site via
> un partage
> [_France transfert_](https://francetransfert.numerique.gouv.fr/upload)
> à l'adresse mail _madec.germerie-guizouarn@ign.fr_.

## Fonctionnalités attendues

### Affichage d'un visualiseur Leaflet

Votre page web doit afficher un visualiseur Leaflet occupant toute la fenêtre du
navigateur. Pour rappel, vous trouverez la documentation de Leaflet sur leur
[site web](https://leafletjs.com).

### Affichage du plan IGN

Vous devez permettre l'affichage du plan IGN, accessible via le flux WMTS
suivant :

```js
"https://data.geopf.fr/wmts?" +
"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0" +
"&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"+
"&FORMAT=image/png",
"&STYLE=normal" +
"&TILEMATRIXSET=PM" +
"&TILEMATRIX={z}" +
"&TILEROW={y}" +
"&TILECOL={x}" +
```

### Affichage des ortho-photographies IGN

Vous devez permettre l'affichage des ortho-photographies IGN, accessibles via le
flux WMTS suivant :

```js
"https://data.geopf.fr/wmts?" +
"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0" +
"&LAYER=ORTHOIMAGERY.ORTHOPHOTOS"+
"&FORMAT=image/jpeg",
"&STYLE=normal" +
"&TILEMATRIXSET=PM" +
"&TILEMATRIX={z}" +
"&TILEROW={y}" +
"&TILECOL={x}" +
```

### Affichage des données de stations de Vélib

Vous devez permettre l'affichage de points, représentant chacun une station de
Vélib et diverses informations associées.

Vous pourrez récupérer les coordonnées des stations de Vélib dans le fichier
JSON suivant :

```js
https://velib-metropole-opendata.smovengo.cloud/opendata/Velib_Metropole/station_information.json
```

Vous pourrez par ailleurs récupérer les informations liées à chaque station dans
le fichier JSON suivant :

```js
https://velib-metropole-opendata.smovengo.cloud/opendata/Velib_Metropole/station_status.json
```

Les descriptions des contenus de ces deux fichiers vous sont données dans la
documentation de l'API velib-metropole, accessible à
[ce lien](https://www.velib-metropole.fr/fr/donnees-open-data-gbfs-du-service-velib-metropole?utm_source=chatgpt.com)

Chaque station devra être représentée sur votre carte par un cercle de couleur
variable : rouge si la station ne dispose d'aucun vélo disponible à l'emprunt,
vert si le nombre de vélos disponibles à l'emprunt est supérieur à la moitié de
la capacité totale de la station, orange sinon.

Au clic sur un points, une popup doit s'ouvrir. Elle doit afficher le nom de la
station, le nombre de vélos disponibles à l'emprunt et le nombre de bornes
libres (susceptibles donc d'accueillir un vélo en retour).

> Tout l'enjeu consiste donc à parcourir la liste des stations de Vélib au
> premier lien, y associer les informations de disponibilité des vélos et des
> bornes trouvables au deuxième lien, et créer des entités géographiques
> compréhensibles par Leaflet (soit des Points, soit un objet GeoJSON).

### Choix des données à afficher

Dans un coin de votre page web devra se trouver un menu permettant à
l'utilisateur de choisir quel fond de carte (plan ou ortho-photographies IGN) il
souhaite afficher. Vous êtes libres pour les choix de style du menu.

