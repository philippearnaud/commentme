/* 6 couleurs mais 4 pions: 1296 étudiants.

   Algorythme

   Les étapes 

   1) On veut la structure d'une table

   2) On veut un code qui permet d'itérer sur le nombre d'essais

   3) On veut un code qui se bloque à la fin de chaque itéraition 
   et qui prompt dans une variable le choix du joueur. 

   4) */

//COULEURS: BLEU, ROUGE, VERT, JAUNE, ORANGE, NOIR

// PARTIE 1: COMPUTER
// Choix l'ordinateur combinaison de 4 couleurs. --Working

function isEven(val) {
	return val % 2 === 0;
}
function computed() {
    var possible_choice = ['b', 'r', 'v', 'j', 'o', 'n'];
    var computer_choice = [];
    for( var b = 1 ; b <= 4 ; b++) {
        var choice = Math.floor((Math.random() * 6-1) +1);
        computer_choice.push(possible_choice[choice]);
    }
    return computer_choice;
}

//  Affichage combinaison computer --Working
var computer_choice = computed();
document.write("<h1> Choix de l'ordinateur :"+ computer_choice + "</h1>");

// PARTIE 2: UTILISATEUR
// Validité du USER INPUT --  Tested and Working
function test(user_choice) {
    for(var c = 0; c < 4 ; c++) {
        if( user_choice != null && isNaN(user_choice[c]) && user_choice == 'b' && user_choice == 'r' && user_choice == 'v' && user_choice == 'j' && user_choice == 'o' && user_choice == 'n') {
            return true;
        }
        else {
            return false;
        }
    }
}
// Choix Utilisateur -- Not Working
function ask() {
    var guess =  prompt("Choisissez une couleur entre Bleu, rouge, vert, jaune, orange et noir.N'inscrivez que la première lettre de chaque couleur séparée d'un espace");
    var guess_lowered = guess.toLowerCase();
    var guess_tested = [];
    var tableau_megacool = guess.toLowerCase().split(' '); 
    for(var w = 0 ; w < 4 ; w++) {
        if( test(guess[w])) {
           guess_tested.push(guess[w]); 
        } else {
            guess_tested[w] = prompt("Remplacez par un jeton valide pour la:"+w); 
    }
  }
    return guess_tested;
}
 // Comparaison choix utilisateur.
function compare(computer_choice, user_choice) {
	if(computer_choice === user_choice) {

	}
}

    // Affichage choix Utilisateur --Working
    document.write('<table>');

    for( var i = 1; i <= 20 ; i++) {
        var tableaumoinscool = ask();
        document.write('<tr>');
        for(var j = 0; j < 4 ; j++) {
            document.write('<td>'+ tableaumoinscool[j]  + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

