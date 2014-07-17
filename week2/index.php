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
    <!-- Résultat souhaité: On veut prendre tous les fichiers images contenus
 dans le répertoire images de notre site et les afficher.
        Méthode: On développe le raisonnement en se posant avant les bonnes questions (comme d'habitude)

        Comment faire pour récupérer tous les fichiers du répertoire images?
        On utilise la fonction scandir() qui prend en argument la chaîne de caractères contenant -->
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

$page = htmlspecialchars($_GET['page']);

function ancre($multidimensional, $page) {
        $precedent = $page - 1;
        $suivant = $page + 1;
        echo '<a href="index.php?page='.$precedent.'">'; 
        echo    'Précédent';
        echo '</a>';

    for($b = 1; $b < count($multidimensional) ; ++$b) {
        echo '<a href="index.php?page='.$b.'">';
        echo 'Page '.$b;
        echo '</a>';
    }

        echo '<a href="index.php?page='.$suivant.'">';
        echo    'Suivant';
        echo '</a>';
}

function boucle($page, $multidimensional){
        for($i = 0; $i < count($multidimensional[$page-1]); ++$i) {
        echo '<div class="image">';
        echo    '<a href="image.php?name='.$multidimensional[$page-1][$i].'">';
        echo        '<img src="images/'.$multidimensional[$page-1][$i].'">';
        echo    '</a>';
        echo '</div>';
}
}
$pagination_number =  4;
$multidimensional = array_chunk($array, $pagination_number);
if(isset($page) && $page != "" && $page > 0 && $page <= count($multidimensional))  {
    boucle($page, $multidimensional);
    ancre($multidimensional, $page);
    }
 else {
    echo " <h1>Sorry.You don't deserve  otters</h1> ";
    $page = 1;
    boucle($page, $multidimensional);
    ancre($multidimensional, $page);
}

/* On réalise une boucle itérative qui part de 2 (en effet, on a supprimé 
 * la paire clef-valeur correspondant aux clefs 0 et 1. ) et on itére 
 * jusqu'à la fin du tableau. On obtient le nombre d'éléments du tableau 
 * en faisant une fonction count sur le tableau $array. Enfin, on demande :
 * à la boucle d'incrémenter la variable de 1 à chaque itération en 
 * utilisant ++$i.
 *
 * Par ailleurs, on aurait pu aussi utiliser la boucle foreach($array as 
 * $element). IMPORTANT: si utilisation, il faut penser à substituer 
 * $element à  $array[i] dans les instructions du bloc.
 *
 */ ?>
    </body>
</html>

