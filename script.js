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

// function pyramid(nb) {
//         for (let i = 1; i <= nb; i++) {
//                 console.log(' '.repeat(nb - 1) + '#'.repeat(i));
//         }
// }

// let floorNumbers = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// pyramid(floorNumbers);


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




// EXERCICES EN PEER PROGRAMMING.

// EXERCICE UN.

let dogs = ['Akita Inu', 'Bouvier bernois', 'Beagle'];

dogs.push('Chihuahua', 'Bulldog');

console.log(dogs);

dogs.sort();

console.log(dogs);


let dogsObject = [
        {
                name: 'Akita Inu',
                nativeCountry: 'Japon'
        },
        {
                name: 'Bouvier bernois',
                nativeCountry: 'Suisse'
        },
        {
                name: 'Beagle',
                nativeCountry: 'Angleterre'
        },
        {
                name: 'Chihuahua',
                nativeCountry: 'Mexique'
        },
        {
                name: 'Bulldog',
                nativeCountry: 'Angleterre'
        }
];

console.log(dogsObject);

let breeds = [];

let nativeCountries = ['Japon', 'Amerique', 'Angleterre', 'Allemagne', 'Suisse'];

dogs.forEach(dog, index => {
        breeds.push({
                name: dog,
                nativeCountry: nativeCountries[index]
        });
})

console.log(breeds);


// EXERCICE DEUX.

// Créé un objet appelé `user` avec : 

// - la propriété `firstName` et une valeur quelconque de type string
// - la propriété `lastName` et une valeur quelconque de type string
// - la méthode `fullName()` permettant de retourner le nom complet
// - la méthode `isMajor()` permettant de retourner si l'utilisateur est majeur ou non (boolean)
//     - Cela mène donc à l’ajout de la propriété `age` avec une valeur quelconque

// Utilise le `console.log` afin de vérifier que l'objet retourne bien les informations souhaitées

const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        fullName() {
                return this.firstName + ' ' + this.lastName;
        },
        isMajor() {
                return this.age > 18;
        }
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());
console.log(user.isMajor());


// Exercice trois.


const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
];

function filterByYear(entrepreneursArray) {
        let entrepreneursYear70 = [];

        // Parcourir le tableau
        entrepreneursArray.forEach(entrepreneur => {
                // Si l'attribut qui est dans l'objet est entre 1970 et 1980
                if (entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
                        entrepreneursYear70.push(entrepreneur);
                }
        })

        // Autre solution : L'utilisation de la fonction prédéfinie .filter()
        /*
        entrepreneursYear70 = entrepreneursArray.filter(entrepreneur => 
                                        entrepreneur.year >= 1970 && entrepreneur.year < 1980
        );
        */

        // Affichage
        console.log(entrepreneursYear70);
}

function filterFullName(entrepreneursArray) {
        let entrepreneursFullName = [];

        // Parcourir le tableau
        entrepreneursArray.forEach(entrepreneur => {
                entrepreneursFullName.push(entrepreneur.last + " " + entrepreneur.first);
        })

        // Affichage
        console.log(entrepreneursFullName);

        // S'intéresser au .map() : cela peut-être une alternative
}

function ageToday(entrepreneursArray) {
        const currentYear = new Date().getFullYear();

        entrepreneursArray.forEach(entrepreneur => {
                console.log(entrepreneur.first + " " + entrepreneur.last + ` aurait ${currentYear - entrepreneur.year} ans aujourd'hui.`);
        })
}

console.log('Les entrepreneurs nés dans les années 70 :');
filterByYear(entrepreneurs);
console.log('Les noms et prénoms des entrepreneurs :');
filterFullName(entrepreneurs);
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
ageToday(entrepreneurs);


// Exercice quatre.

const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented: 33 },
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function wasRented(books) {
        let response = true;
        books.forEach((book) => {
                if (book.rented === 0) {
                        response = false;
                }
        })
        console.log(response ? 'Oui' : 'Non');
}

function mostRented(books) {
        let arrayRented = [];

        books.forEach(book => arrayRented.push(book.rented));

        let mostRented = arrayRented.sort().reverse()[0];
        let mostBookRented = books.find(book => book.rented == mostRented)

        console.log(mostBookRented);

        // Ou
        /*
        let mostRented = books.sort((a, b) => {
return a.rented + b.rented;
})
console.log(mostRented[0]);
        */
        // sources : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // Ou 
        // s'intéresser au Math.max()
}

function lessRented(books) {
        let arrayRented = [];

        books.forEach(book => {
                arrayRented.push(book.rented);
        })
        let lessRented = arrayRented.sort()[0];
        let lessBookRented = books.find(book => book.rented == lessRented)
        console.log(lessBookRented);
}

function findId(books) {
        let idFind = books.find(book => book.id === 873495);
        console.log(idFind);
}

function deleteBook(books) {
        let findBook = books.findIndex(book => book.id === 133712)
        books.splice(findBook, 1);
        console.log(books)
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
wasRented(books);

console.log("Quel est le livre le plus emprunté ?");
mostRented(books);

console.log("Quel est le livre le moins emprunté ?");
lessRented(books);

console.log("Trouve le livre avec l'ID: 873495");
findId(books);

console.log("Supprime le livre avec l'ID: 133712");
deleteBook(books);