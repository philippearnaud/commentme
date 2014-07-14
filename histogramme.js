// Objectif : Créer un histogramme qui permettent d'afficher les occurences de certains mots de chaque chaîne de caractères d'un tableau.

var arr = ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
		"eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
		"Nemo enim ipsam ipsum ipsum voluptatem quia voluptas sit aspernatur aut odit aut fugit,",
		"sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
		"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
		"consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
		"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,",
		"nisi ut aliquid ex ea commodi consequatur?",
		"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"]

//Methode: Comme d'habitude, on part du résultat souhaité et on fait des allers et reentre input et output pour trouver comment transformer l'input en outpu.
//Résultat souhaité: On veut un tableau associatif qui associe pour chaque mot du tableau une valeur correspondant à son occurence dans le texte.
//Comment obtenir un tableau associatif ? : Avec la syntaxe tableau_associatif = { clef1 : valeur1, clef2 : valeur2, .... , clefn: valeurn} pour un tableau de n valeurs.
//Comment allons nous remplir ce tableau ? : En utilisant une structure if-else qui nous permet d'ajouter une clef à notre tableau associatif via la fonction push si la clef n'est pas déjà enregistrée ou d'incrémenter la valeur correspondant à une clef si le mot est déjà enregistré.
//Comment faire pour écrire la condition d'existence préalable de la clef ? : Il faututiliser l'égalité stricte === undefined. Une égalité simple ( == ) aurait imposé à javascript de convertir les types des données de chaque côté de l'égalité pour que chaque membre de l'égalité possède le même type. Par exemple, ( "3" == 3 ) renvoit true, tandis que ("3" === 3) renverra false. Pour récapituler, l'égalité stricte ( === ) ne convertit pas les types,  à l'inverse de l'égalité simple ( == ).
//Comment faire pour faire passer tous les mots dans la condition if-else ? : On utilise une boucle for sur les éléments du tableau arr qu'on aura transformé. En effet, on veut que chaque élément du tableau soit constitué des mots du tableau actuel.
//Comment faire pour transformer un tableau de chaînes de caractères faites de phrases, en un tableau de chaînes de caractères contenant chacune un mot du tableau sans les espaces? : Il faut utiliser les fonctions join(' ') (qui va permettre de transformer réunir toutes les chaines de caractères en une seule. Néanmoins, entre chaque chaîne de caractère de l'ancien tableau il y aura un espace car nous l'avons défini dans la fonction join(' '). Par ailleurs, en utilisant la fonction join() sur le tableau nous avons changé le type de l'objet qui est devenu "strings". Pour obtenir un tableau de cette chaîne de caractères, il nous suffit de passer une fonction split(" ") à ce tte chaine de caractères. La fonction split va diviser la chaine de caractère selon le caractère de séparation que nous avons rentré en argument. Ici, il s'agit de l'espace. Par conséquent, notre nouveau tableau ne contiendra que les mots et c'est exactement ce que nous voulons.
//Comment faire pour connaître le nombre maximum d'itération de la boucle? : On fait un length appliqué sur le tableau contenant en chaine de caractère chaque mot.
//
// Let's practice a little bit guys !

// On commence par déclarer notre tableau associatif pour pouvoir s'en servir plus tard.
var tableau_asso = {};
// On transforme notre tableau arr maintenant pour utiliser en input dans notre boucle for chaque mot du tableau. On met à jour le contenu de la variable arr pour garder le résultat en mémoire.
arr = arr.join(' ').toLowerCase().split(' ');
// On applique notre length sur notre tableau mis à jour afin de connaître l'amplitude de la boucle for.
var length = arr.length;
//On écrit notre boucle for en entrant i < length en condition. En effet, les index des tableaux commencent à 0 et la fonction length appliqué sur un tableau va nous renvoyer l'index du dernier élément + 1. Par conséquent, lorsqu'on commence à partir de 0, il ne faut pas aller jusqu'à length, mais jusqu'à length - 1. Cela est fait grâce à la boucle for étant donné que i ne peut prendre pour valeur que des entiers et s'arrêtera automatiquement à length - 1 si la condition i < length lui a été spécifié.
for(i = 0 ; i < length ; i++) {	
	//On fait notre if - else. Simplement, à chaque itération, on lui demande de regarder si la valeur contenue dans notre "tableau associatif" possède une valeur existante.Il faut vérifier, ainsi, que la la valeur est strictement du type "undefined" via l'égalité stricte ( === ) et l'utilisation de typeof. Plus précisément, dans notre cas, la valeur à vérifier est celle d'un élément du tableau contenant tous les mots, il s'agit de arr[i] car nous comptons itérer sur l'index i fois.  Cependant, la condition arr[i] === "undefined" n'a aucun intérêt  puisque, d'une part, chaque élément de arr[i] n'est pas undefined et, d'autre part, nous souhaitons remplir notre "tableau associatif" tableau_asso avec les valeurs de arr. Par conséquent, ce sont les valeurs de tableau_asso qu'il dont il faut tester l'existence dès lors qu'elles sont constituées des éléments du tableau arr. Ainsi, on arrive à la syntaxe ci-dessous. Si la condition est vérifiée, on crée une clef constituée d'un élément du tableau arr dans notre "tableau associatif" qui aura pour valeur 1.
	if (typeof tableau_asso[arr[i]] === "undefined" ) {
	  tableau_asso[arr[i]] = 1;
  }	
	else {
		//Au cours de l'itération, si le if-else rencontre une clef  qu'elle connait déjà, elle incrémentera sa valeur de 1.
		tableau_asso[arr[i]]  += 1;
	}
 }

// On affiche le résultat
document.write("<table>");
for(var key in tableau_asso ) {
	document.write("<tr>" + key + " : " +  tableau_asso[key] + "</tr></br>");
}
document.write("</table>");
