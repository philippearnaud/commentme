<!DOCTYPE html>
<html>
<head>
    <title>Ma galerie : accueil</title>
    <ancre rel="stylesheet" href="galerie.css"/>
    <meta charset="utf-8" />
</head>
<body>
    <h1>Ma galerie : accueil</h1>
   <div class="gallery">
<?php 
/* On stocke dans une variable $dir une chaîne de caractères 'images' laquelle correspond au nom du répertoire qui contient nos images.  */
$dir = 'images';
    /* On stocke dans une variable $array la fonction scandir() avec pour argument 
    la variable $dir. Ainsi, on aura stocké dans la variable $array un tableau contenant 
    , outre les noms des fichiers images, . et .. */
$array =  scandir($dir);
/*  On enlève les élements . et .. dans notre tableau $array. Il s'agit des 
 *  éléments 0 et 1.*/
unset($array[0]);
unset($array[1]);

/* On stocke dans une variable $page le contenu de la variable $_GET['page‘] (chaîne de caractères) dont on aura transformé certains éléments pour éviter des attaques XSS grâce à la fonction htmlspecialchars() qui prend en argument la variable $_GET['page'] */
$page = htmlspecialchars($_GET['page']);

/* On créé une fonction ancre($multidimensional, $page) qui va permettre d'afficher les liens de navigation permettant de naviguer entre les pages.
function ancre($multidimensional, $page) {
	/* Pour faire les liens précédent et suivant, il que l'ancre renvoie, respectivement, à la page - 1 et à la page + 1. On écrit insère l'ancre en php en utilisant la fonction echo.*/
        $precedent = $page - 1;
        $suivant = $page + 1;
        echo '<a href="index.php?page='.$precedent.'">'; 
        echo    'Précédent';
        echo '</a>';

				/* Pour faire les liens dynamiques, il faut itérer. Le fonctionnement est le même que ci-dessus */
    for($b = 1; $b < count($multidimensional) ; ++$b) {
        echo '<a href="index.php?page='.$b.'">';
        echo 'Page '.$b;
        echo '</a>';
    }

        echo '<a href="index.php?page='.$suivant.'">';
        echo    'Suivant';
        echo '</a>';
}

/* On crée une fonction boucle($page, $multidimensional) qui va itérer sur chaque élément d'un élément du tableau $multidimensional  */
function boucle($page, $multidimensional){
        for($i = 0; $i < count($multidimensional[$page-1]); ++$i) {
        echo '<div class="image">';
        echo    '<a href="image.php?name='.$multidimensional[$page-1][$i].'">';
        echo        '<img src="images/'.$multidimensional[$page-1][$i].'">';
        echo    '</a>';
        echo '</div>';
}
}
/* On définit le nombre de photos qu'on veut par page et on le met dans la variable $pagination_number */
$pagination_number =  4;
/* On crée notre tableau multidimensionnel avec la fonction array_chunk( $tableau_dont_on_veut_séparer_les_élements_par_groupe, $nombre_délément_par_group). */
$multidimensional = array_chunk($array, $pagination_number);
/* On test les variables de la variable $page, ce qui revient à tester la variable $_GET['page'] échappée. On veut que les bonnes pages s'affichent si $page est définie (isset() ) différente d'une chaîne de caractères vide ("") et si $page est compris entre 0 et la taille du tableau $multidimensional.Le cas contraire, on veut juste que la première page s'affiche.*/
if(isset($page) && $page != "" && $page > 0 && $page <= count($multidimensional))  {
	/* On appelle les fonctions et n'oublie pas de leur passer les variables $page et $multidimensional pour que ces fonctions puissent travailler avec les bonnes valeurs. */
    boucle($page, $multidimensional);
    ancre($multidimensional, $page);
    }
 else {
    echo " <h1>Sorry.You don't deserve  otters</h1> ";
    $page = 1;
    boucle($page, $multidimensional);
    ancre($multidimensional, $page);
}

  ?>
    </body>
</html>

