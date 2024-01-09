        // EXERCICE UN.

// let firstName   = prompt('Veuillez entrer un premier prénom');
// let secondName  = prompt('Veuillez entrer un second prénom');
// let firstState  = prompt('Veuillez entrer un premier état du jour');
// let secondState = prompt('Veuillez entrer un second état du jour');
// let hour        = prompt('Veuillez entrer une heure');
// let day         = prompt('Veuillez entrer un jour');


// console.log(`${firstName} : Bonjour !`);
// console.log(`${secondName} : Bonjour ${firstName} ! Comment vas-tu ?`);
// console.log(`${firstName} : ${firstState}, et toi ?`);
// console.log(`${secondName} : ${secondState}, je te remercie.`);
// console.log(`${firstName} : Quelle heure est-il ?`);
// console.log(`${secondName} : Il est ${hour} heures.`);
// console.log(`${firstName} : D’acc, merci.`);
// console.log(`${secondName} : Où manges-tu aujourd’hui ?`);
// console.log(`${firstName} : Je rentre chez moi comme tous les ${day}s`);
// console.log(`${secondName} : D’acc.`);


        // EXERCICE DEUX.

// let age = prompt('Veuillez entrer votre âge');

// if (age < 18) {
//     console.log('Vous êtes mineur');
// } else if (age >= 18 && age < 21) {
//     console.log('Hey ! Vous êtes majeur !');
// } else if (age >= 21) {
//     console.log('Vous êtes majeur dans le monde entier !');
// };


        // EXERCICE TROIS.

// let first  = prompt('Veuillez entrer un premier nombre');
// let second = prompt('Veuillez entrer un second nombre');
// let third  = prompt('Veuillez entrer un troisième nombre');

// if (first == second && second == third) {
//     console.log('Les trois variables sont identiques');
// }
// else if (first == second || second == third || first == third) {
//     console.log('Deux des variables sont de valeurs égales');
// }
// else {
//     console.log('Les trois variables sont différentes');
// };


        // EXERCICE QUATRE.

// const byTwoNumber = prompt("Veuillez saisir un chiffre entre 0 et 10 : ");

// if (byTwoNumber > 10) {
//     console.log("Vous êtes trop gourmand...")
// } else {
//     for (let i = 1; i <= byTwoNumber; i++) {
//         console.log(`${i} -> ${i * 2}`);
//     }
// }

        // EXERCICE CINQ.

// const number = prompt("Veuillez saisir un nombre : ");
// const type   = prompt("Voulez-vous afficher les nombres pairs ou impairs ? (Entrez 'p' pour pair, 'i' pour impair)");

// if (type == "p") {
//         for (let i = 0; i <= number; i += 2) {
//         console.log(i);
//         }
// } else if (type == "i") {
//         for (let i = 1; i <= number; i += 2) {
//         console.log(i);
//         }
// } else {
//         console.log("Veuillez ne choisir qu'entre 'p' pour pair et 'i' pour impair.");
// }

// Variante avec une seule boucle.

// if (type == "p") {
//         for (let i = 0; i <= number; i += 2) {
//         console.log(i);
//         }
// } else if (type == "i") {
//         for (let i = 1; i <= number; i += 2) {
//         console.log(i);
//         }
// } else {
//         console.log("Veuillez ne choisir qu'entre 'p' pour pair et 'i' pour impair.");
// }

        // EXERCICE SIX.

// let floorNumbers = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// // On boucle sur chaque étage (définis dans la variable floorNumbers).
// for (let i = 1; i <= floorNumbers; i++) {
//         let floor = '';

//         //On créé les espaces.
//         for (let j = 0; j < floorNumbers - i; j++) {
//         floor += ' ';
//         }

//         //On créé les dièses.
//         for (let k = 0; k < i; k++) {
//         floor += '#';
//         }

//         //La console affiche un résultat par étage selon floorNumber..
//         console.log(floor);
// }

// Variante avec une seule boucle.

// let floorNumbers = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// for (let i = 0; i < floorNumbers; i++) {
// let floor = '';

// for (let j = 0; j < floorNumbers; j++) {
//         if (j < floorNumbers - i - 1) {
//         floor += ' ';
//         } else {
//         floor += '#';
//         }
// }

// console.log(floor);
// }

// Variante avec une fonction.

function pyramid(nb) {
        for (let i = 1; i <= nb; i++) {
                console.log(' '.repeat(nb - 1) + '#'.repeat(i));
        }
}

let floorNumbers = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid(floorNumbers);


        // EXERCICE SEPT.

// function checkBirthday() {
//         let birthday = prompt("Veuillez entrer votre date d'anniversaire (jj/mm/aaaa) :");
        
//         let [day, month, year] = birthday.split("/");
        
//         let currentDate = new Date();
//         let currentDay = currentDate.getDate();
//         let currentMonth = currentDate.getMonth() + 1; // Les mois sont indexés à partir de 0 en JavaScript
        
//         if (day == currentDay && month == currentMonth) {
//                 console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !");
//         } else {
//                 console.log("En ce moment, une promotion de 15% sur tous les articles");
//         }
// }
        
// checkBirthday();


        // EXERCICE HUIT.

// function fact(n) {
//         let result = 1;
        
//         for (let i = 2; i <= n; i++) {
//                 result *= i;
//         }
        
//         return result;
// }

// let chosenNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
// console.log("Le résultat est : " + fact(chosenNumber));

// console.log(fact(4));
// console.log(fact(6));
// console.log(fact(8));
// console.log(fact(2));
// console.log(fact(1));