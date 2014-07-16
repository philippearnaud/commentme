// Le but va être de construire avec le moins de lignes possibles une super table de multiplication avec les conditions suivantes:
	// 1- L'utilisateur choisit le multiplicande et le multiplicateur.
	// 2- Les carrés doivent être en gras.
	// 3- On veut éventuellement transformer les résultats en nombres binaire.
	// 4- On veut décomposer l'exercice en fonction réutilisables pour y aller par étape.

//Méthode: Se poser les bonnes questions.
//Comment faire pour permettre à l'utilisateur de choisir un multiplicande et un multiplicateur? : Il faut utiliser prompt("quelquechose") et stocker le résultat dans deux variables, multiplicateur et multiplicande.
//Comment faire pour vérifier que notre utilisateur entre bien des nombres dans le champ? : Il faut faire une vérification des données rentrées en utilisant un while.
//Quelles vérifications devons-nous faire? : Dans la mesure àù nous voulons vérifier que les données rentrées sont bien des nombres, il faudra utiliser la fonction isNaN() sur les variables 
//Comment faire pour afficher une table de multiplication à l'utilisateur? On va se servir des balises <table>, <tr> et <td> que l'on va insérer dynamiquement dans le DOM grâce à javascript en utilisant document.write()
//Comment faire pour gérer l'affichage avec la table? : Il faut insérer dynamiquement un <table> avant d'utiliser quoi que ce soit. Puis, il faut créer une boucle for qui incrémente  de i = 1 (La table de multiplication de 0 n'est pas très intéressante) jusqu'à multiplicande. Dans cette boucle, on va insérer dynamiquement la balise ouvrante d'un <tr>, ainsi qu'une seconde boucle qui va incrémenter de j = 1 (toujours pour la même raison que supra) jusqu'à multiplicateur.Dans cette dernière boucle, on va insérer dynamiquement un td ouvrant et un td fermant qui va contenir le produit multiplicateur - multiplicande. On n'oublie pas de fermer les balises <tr> et <table> dans le document. 
//

// On fait une fonction binary(number) et on injectera le produit de la multiplication en argument pour que la fonction nous renvoit une chaîne de caractère sous forme binaire. 
function binary(number) {
	//On déclare et instantie un tableau.
var binary_arr = [];
	//On déclare et instantie une variable qui contiendra l'argument + 1 (résolution du bug).
var process = number + 1;
// On fait une boucle qui décrémente de 7 à 0 (codage sur un octet)
for( p = 7 ; p >=  0 ; p--) {
	//A chaque itération, on vérifie que la variable process est inférieure ou égal à 2 à la puissance p correspondante. Si oui, on insère par la droite dans le tableau binary_arr un 0 grâce à la fonction push(0)
	if ( process  <=  Math.pow(2, p)) {
		binary_arr.push(0);
	}
	// Si non,  on soustrait 2*p correspondant à process et on insère par la droite dans le tableau binary_arr un 1 grâce à la fonction push(1).
		else {
		process = process - Math.pow(2, p);
		binary_arr.push(1);
	}
}
// On indique la valeur de retour de la fonction qui est le tableau binary_arr
return binary_arr
}

//Comme prévu on demande à l'utilisateur de choisir un multiplicande et un multiplicateur grâce à la fonction prompt("quelquechose") dont on insère le contenu dans une variable.
var multiplicande = prompt("Quel est le multiplicande?");
var multiplicateur = prompt("Quel est le multiplicateur?");

// On écrit le <table>   en dehors des boucles for pour ne pas répéter le code.
document.write("<table>");
for (i = 1 ; i <= multiplicande ; i++) {
	//On insère dynamiquement le <tr> dans la première boucle pour qu'il soit répété de 1 à multiplicande fois. Graphiquement, nous lui demandons de constuire multiplicande fois des rangées.
	document.write("<tr>");
for (j = 1 ; j <= multiplicateur ; j++) {
		//On stocke le produit dansune variable pour l'injecter dans notre fonction binary(number)
		var resultat = i*j;
		//On insère dynamiquement des <td>. Graphiquement, on lui demande de construire pour chaque rangée les colonnes de notre tableau dans le document HTML.
		if ( i == j ) {
			//On insère dynamiquement des balises ouvrante-fermante dans notre code HTML autour du résultat à l'unique condition que i soit égal à j, soit des carrés.
			document.write("<td><strong>" + i*j + ":" + binary(resultat).join("") + "</strong></td>");
		} else {
			document.write("<td>" + i*j + ":" + binary(resultat).join("") + "</td>");
		}
	}
//On n'oublie pas de refermer sa balise <tr>
	document.write("</tr>");
}
//On n'oublie pas non plus sa balise fermante <table>
document.write("</table>");



