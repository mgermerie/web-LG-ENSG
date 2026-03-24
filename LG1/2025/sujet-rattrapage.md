# 2025 - Rattrapage - Créez une page web sur le sujet de votre choix.

L'objectif de ce TP de rattrapage est le même que celui du TP d'origine : créer une page web
présentant un endroit qui vous tient à cœur. Les consignes de mise en forme de la page web y sont
cependant modifiées. Vous les trouverez ci-après.

Le site sera toujours composé de 5 zones : l'entête, le contenu, la galerie photos, la situation
géographique et le pied de page. Ces 5 zones seront affichées les unes en dessous des autres.

Il est demandé de fournir :

- Un seul fichier HTML avec le contenu de votre site ;
- Un fichier _css_ pour le rendu sur écran ;
- Un fichier _js_ pour le rendu cartographique ;
- Tout fichier de ressource (images ou autres) dont votre site a besoin.

**Envoyez un dossier contenant les fichiers de votre site via un partage [_France
transfert_](https://francetransfert.numerique.gouv.fr/upload) à l'adresse mail
_madec.germerie-guizouarn@ign.fr_ avant le lundi 23 juin 2025, 09h00.**

---

## Positionnement général au sein de la page web

Le positionnement des 5 zones composant votre page web devra être fait en utilisant le mode `grid`.
Il faudra donc veiller à déclarer l'élément `body` de votre page web en un élément `grid` qui, pour
rappel, déclare une grille virtuelle sur laquelle vous pourrez placer le contenu de cet élément.

La grille virtuelle devra contenir 3 colonnes et 5 lignes, respectant les contraintes suivantes :

- La première ligne devra faire 400px de hauteur ;
- La dernière ligne devra faire 100px de hauteur ;
- Toutes les autres lignes devront avoir une hauteur qui s'adapte automatiquement à la hauteur de
  leur contenu ;
- La colonne centrale (2ème colonne) devra faire 980px de largeur ;
- Les première et troisième colonnes devront avoir des largeurs identiques et telles que les deux
  colonnes occupent le reste de la largeur de votre page web.

Schématiquement, votre grille doit ressembler à cela :

![grid](https://github.com/user-attachments/assets/384a810e-b8f4-477a-bcbd-e72c316b535b)


Par ailleurs, les marges par défaut du `body` devront être mises à `0`.

---

## L'entête

Le bloc d'entête doit occuper toute la première ligne de la grille déclarée sur l'élément `body`. Il
fera ainsi 400px de hauteur et occupera toute la largeur du navigateur.

Ce bloc doit contenir :

- Une image d'arrière-plan illustrant le lieu que vous avez choisi. Cette image doit couvrir toute
  l'entête ;
- Un titre avec le nom de l'endroit, écrit assez gros ;
- Un texte écrit en plus petit, précisant la localisation de l'endroit choisi.

Le titre et les textes étant donc au dessus de l'image de fond, les couleurs sont libres, mais
faites attention aux contrastes.


## Le contenu

Le contenu doit occuper la case en deuxième ligne et deuxième colonne de la grille déclarée sur
l'élément `body`. Il occupera ainsi un espace de 980px de large, centré dans la page.

Ce bloc doit être composé de 3 parties affichées l'une à la suite de l'autre. Chaque partie doit
présenter une thématique particulière que vous choisirez en fonction de l'endroit décrit par votre
site (histoire, culture, loisirs...). Chaque partie est composée :

- D'un titre de thème ;
- D'un ou deux paragraphes maximum.

À la suite de ces trois parties, ajoutez un lien vers un autre site web présentant l'endroit choisi.
S'il n'existe pas de site présentant cet endroit, un lien vers une recherche google du lieu
conviendra.

Adaptez le style de cette zone à votre convenance (couleur de fond, des textes, espacements, etc).


## La galerie photos :

La galerie photos doit occuper la case en troisième ligne et deuxième colonne de la grille déclarée
sur l'élément `body`. Elle occupera ainsi un espace de 980px de large, centré dans la page.

Cette galerie photos doit contenir :

- Un sous-titre "Galerie photos";
- 6 images, réparties sur une nouvelle grille de 2 lignes et 3 colonnes.

Attention à bien gérer les tailles des photos et de la grille de manière à ce que le contenu de
cette partie ne déborde pas de l'espace qui lui est impartit.


## La situation géographique :

La situation géographique doit occuper la case en quatrième ligne et deuxième colonne de la grille
déclarée sur l'élément `body`. Elle occupera ainsi un espace de 980px de large, centré dans la page.

Ce bloc doit contenir :

- Un sous-titre "Emplacement";
- Une carte Leaflet centrée sur votre lieu. Cette carte doit comporter un `marker` positionné à
  l'endroit décrit par votre site, avec une infobulle contenant le nom de l'endroit.

Pour rappel, vous trouverez à [ce lien](https://leafletjs.com/examples/quick-start/) le tutoriel
pour utiliser Leaflet. Attention à bien définir une hauteur pour votre carte si vous voulez la voir
apparaître sur votre site web.


## Le pied de page

Le pied de page doit occuper toute la dernière ligne de la grille déclarée sur l'élément `body`. Il
fera ainsi 100px de hauteur et occupera toute la largeur du navigateur.

Cette dernière zone doit contenir la phrase suivante : « Site web réalisé par {votre nom et votre
prénom} dans le cadre d'un TP.». Cette phrase devra être centrée verticalement et horizontalement à
l'intérieur de la zone.

---

Bon travail, et n'hésitez pas à me solliciter si vous en éprouvez le besoin.

