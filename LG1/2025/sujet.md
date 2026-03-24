# 2025 - Créer une page web sur un endroit de votre choix.

L'objectif de ce TP est de créer une page web présentant un endroit qui vous tient à coeur (un lieu
dit, une ville, un département/région, un pays, etc). Vous trouverez ci-dessous les éléments devant
figurer sur le site ainsi que la mise en forme souhaitée.

Le site sera composé de 5 zones : l'entête, le contenu, la galerie photos, la situation géographique
et le pied de page. Ces 5 zones seront affichées les unes en dessous des autres.

Il vous est demandé de fournir :

- Un seul fichier HTML avec le contenu ;
- Un fichier _css_ pour le rendu sur écran ;
- Un fichier _css_ pour le rendu sur impression ;
- Un fichier _js_ pour le rendu cartographique ;
- Tout ficher de ressource dont votre site a besoin.

**Envoyez un dossier contenant les fichiers de votre site via un partage [_France
transfert_](https://francetransfert.numerique.gouv.fr/upload) à l'adresse mail
_madec.germerie-guizouarn@ign.fr_ avant le lundi 14 avril, 09h00.**.

Note : attention au travail « à plusieurs ». Vous pouvez bien entendu travailler ensemle, mais cela
ne signifie pas que vos fichiers doivent être identiques. Il est même difficile que cela puisse être
le cas. Vous devez par ailleurs vous douter qu'il est très facile de faire des recherches de
similitudes. Si vous êtes bloqués, ou si vous souhaitez réaliser un effet plus avancé, n'hésitez pas
à m'envoyer des mails.

---

## L'entête

Le bloc d'entête doit occuper toute la largeur du navigateur (attention aux marges du "body" par
défaut, qu'il faudra remettre à 0), et avoir une hauteur minimum de 400px. Ce bloc doit avoir :

- Une image d'arrière-plan illustrant le lieu que vous avez choisi. Cette image doit couvrir toute
  l'entête ;
- Un titre avec le nom de l'endroit, écrit assez gros ;
- Un texte écrit en plus petit, précisant la localisation de l'endroit choisi.

Le titre et les textes étant donc au dessus de l'image de fond, les couleurs sont libres, mais
faites attention aux contrastes.

---

> Note : pour les 3 zones qui suivent (contenu, galerie et situation géographique), chacune
> d'elle doit occuper toute la largeur du navigateur, mais le contenu de chaque zone doit se
> répartir dans un espace de 980px, centré.

## Le contenu

Le contenu doit être composé de 3 "parties" affichées l'une à la suite de l'autre. Chaque "partie"
doit présenter une thématique particulière que vous choisirez en fonction de l'endroit décrit par
votre site (histoire, culture, loisirs...). Chaque partie est composée :

- D'un titre de thème ;
- D'un ou deux paragraphes maximum.

Comme précisé plus haut, les 3 "parties" doivent occuper un espace horizontal de 980px et être
centrées dans la page.

À la suite de ces trois parties, ajoutez un lien vers un autre site web présentant l'endroit choisi.
S'il n'existe pas de site présentant cet endroit, un lien vers une recherche google du lieu
conviendra.

Adaptez le style de cette zone à votre convenance (couleur de fond, des textes, espacements, etc).

## La galerie photos :

La galerie photos doit contenir :

- Un sous-titre "Galerie photos";
- Une liste de 6 images, réparties sur une grille de 2 lignes et 3 colonnes.

Attention à bien gérer les tailles des photos et de la grille de manière à ce que le contenu de
cette partie ne déborde pas de l'espace qui lui est impartit.

## La situation géographique :

La situation géographique doit être composée de 2 "parties" affichées cote à cote :

- La première partie est un tableau contenant les distances approximatives en kilomètres par rapport
  à 4 ou 5 grandes villes ;
- La seconde partie est une carte Leaflet centrée sur votre lieu. Cette carte doit comporter un
  marker positionné à l'endroit décrit par votre site, avec une infobulle contenant le nom de
  l'endroit.

Cette zone doit également avoir un sous-titre "Situation géographique" (avant le tableau et la
carte).

Comme pour toutes les autres zones précédentes, le tableau et la carte doivent se répartir dans
980px de large et être centrés. La carte doit représenter environ 2/3 de cette largeur et le tableau
environ 1/3. Gérez les styles à votre convenance (bordures sur le tableau notamment).

Pour rappel, vous trouverez à [ce lien](https://leafletjs.com/examples/quick-start/) le tutoriel
pour utiliser Leaflet.

## Le pied de page

Cette dernière zone doit contenir la phrase suivante : « Site web réalisé par {votre nom et votre
prénom} dans le cadre d'un TP.». Cette phrase devra être centrée et espacée en haut et en bas de
40px. Vous êtes libres sur le reste.

## Version responsive

> Le positionnement imposé par l'énnoncé sera évalué sur un écran HD (1920x1080px).

Appliquez les principes du Responsive Design pour faire en sorte que votre site s'adapte quelque
soit la taille du navigateur. Vous ne pouvez pas savoir à l'avance la taille de l'écran que va
utiliser un visiteur de votre site. Son rendu doit donc être « bon » tant pour les grands écrans que
pour les petits.

Vous êtes entièrement libres sur le rendu graphique final, mais il faut que tout le contenu soit
accessible et visible, sans chevauchements. Faites notamment attention aux tailles fixes, et
prévoyez de réorganiser les éléments les uns en dessous des autres.

## Version imprimable

En utilisant les media queries, créez un style qui s'appliquera à votre site uniquement si l'on
tente de l'imprimer. L'intégralité de votre site devra alors rentrer sur une page a4 recto-verso.
Vous êtes libres concernant ce style (position, tailles, etc), mais essayez de respecter une même
charte graphique entre votre site sur écran et votre site imprimé.

Pour tester votre mise en page imprimable, imprimez vos documents en PDF.

Vous trouverez à [ce
lien](https://www.alsacreations.com/tuto/lire/586-feuille-style-css-print-impression.html) un
tutoriel qui vous aidera à faire un mode impression pour votre site.

---
Bon travail, et n'hésitez pas à me solliciter si vous en éprouvez le besoin.
