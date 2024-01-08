// let firstName   = prompt('Veuillez entrer un premier prénom');
// let secondName  = prompt('Veuillez entrer un second prénom');
// let firstState  = prompt('Veuillez entrer un premier état du jour');
// let secondState = prompt('Veuillez entrer un second état du jour');
// let hour = prompt('Veuillez entrer une heure');
// let day  = prompt('Veuillez entrer un jour');


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


// let age = prompt('Veuillez entrer votre âge');

// if (age < 18) {
//     console.log('Vous êtes mineur');
// } else if (age >= 18 && age < 21) {
//     console.log('Hey ! Vous êtes majeur !');
// } else if (age >= 21) {
//     console.log('Vous êtes majeur dans le monde entier !');
// };


let first  = prompt('Veuillez entrer un premier nombre');
let second = prompt('Veuillez entrer un second nombre');
let third  = prompt('Veuillez entrer un troisième nombre');

if (first == second && second == third) {
    console.log('Les trois variables sont identiques');
}
else if (first == second || second == third || first == third) {
    console.log('Deux des variables sont de valeurs égales');
}
else {
    console.log('Les trois variables sont différentes');
};
