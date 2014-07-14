//Objectif :  calculer dans le tableau la phrase la plus longue.
// On génére un tableau bidon pour les besoins du jeu.  
var array = [
		"dazadzdaazdahazdhazjadzazdhadzhdazhdaz",
		"dqhazuadhadzhdadzhadzhdhzah", 
		"dazdhadzhdazhdazhdzahzddhzahdzhdazhdzahdzhdzh", 
		"daadhadzhdahdahdzadzhdzahdzahdzahdzhdzadhkkazo",
		"alzdkadazlk azdamdjfhcbbbbdazyuzaus  azdauzdhazdha",
		"dzahdaodpazuihdauzhd aizdhadzoah	phdpaudhazpuzaddhaizd",
		"zdhuZAU	BEERWAREADU	HD	PDbzzuhdazudhazuhdzhpid dzipdjajd",
		"dzap	hudpahz	dh	zdbauazdb zduhadazdhupadpauzdhuaz"];

// Méthode : Se poser les bonnes questions en partant du résultat souhaité.
// Résultat souhaité: "La phrase la plus longue est la numéro 2"
// Comment connaître la longueur d'une chaîne de caractères : utiliser la fonction length() sur une variable que j'appelle arbitrairement max_strings => Problème: il faut le faire sur chaque élément du tableau.
// Comment appliquer cette fonction sur tous les éléments du tableau : On utilise la fonction length sur chaque valeur correspondant à chaque index du tableau grâce à une boucle for => Problème: Je ne connais pas le nombre d'éléments du tableau et j'en ai besoin pour définir la condition de ma boucle for.
// Comment connaitre le nombre d'éléments du tableau : utiliser à nouveau la fonction length mais  sur le tableau. => Problème : Il faut que je compare la longueur des phrases. 
// Comment comparer la longueur des phrases entre elles.: faire un if-else  selon le résultat de max_strings en fonction de la longueur de la phrase précédente a une longueur supérieure à la précédente et stocker le résultat de la chaine de caractère la plus longue dans une variable. Il faut mettre ce if-else dans la boucle for pour que le résultat soit mis à jour à chque itération de la boucle. 
// Comment stocker le résultat dans une variable? : var nomDeMaVariable = valeurdemavariable; Problème : car j'ai stocké dans ma variable le résultat de la chaîne de caractère du tableau la plus longue mais je ne l'ai pas affiché pour l'utilisateur.
//Comment afficher le résultat pour l'utilisateur: Ne marche que si le script est appelé dans le document HTML,  soit en faisant un console.log(nomDeMaVariable) pour affichage en console; soit en faisant un document.write(nomDeMaVariable) pour affichage dans le document HTML.
//Il est temps de tester tout ça, mais il faut remettre les choses dans l'ordre.


// On déclare la variable max_strings, ce qui permet à l'ordinateur de lui allouer de la mémoire.
var max_strings = 0;
var answer;
// Je construis ma boucle for avec une condition i < array.length
for(i = 0 ; i < array.length ;  i++) {
	//On fait notre if-else qui va trier les cas où la chaîne de caractères est ou non supérieure à la chaine de caractère précédente.
	if ( array[i].length > max_strings ) {
// Si la chaine de caractères actuelle est supérieure à la chaine de caractères actuel, alors on met dans une variable le  résultat.
		max_strings = array[i].length;
		answer = i;
	}
}
// On affiche dans le document web la réponse 
document.write("La phrase la plus longue : La réponse est la " + answer + "ligne, avec " + max_strings + "caractères");

