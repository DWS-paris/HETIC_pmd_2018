/*
Afficher un message dans la console
*/
    console.log('Hello Javascript');
    console.error('Bad value...');
//

/*
Création de variables
*/
    // Version ES5
    var userName = 'Julien Noyer';
    
    // Version ES6
    let firstName = 'Chuck'; // Version ES6 de var
    const birthDate = 1979; // Nouveauté ES6
//

/*
Les types de variables primitives
*/
    let isBoolean = true; // true || false ( 1 || 0 )
    let isString = 'Du texte';
    let isInteger = 1234567890;
    let isFloat = 123.5678;
    let isArray = [ 'Hello', 123, false, isString, [ 'world', isInteger ] ];

    console.log( isBoolean, isString, isInteger, isFloat, isArray );
//

/*
Intégrer une balise HTML dans une variable
*/
    let myTitle = document.querySelector('h1');
    console.log(myTitle);
//

/*
Templating de string
*/
    let firstCar = 'Volvo';
    let secondCar = "Nissan";

    // Concat. version ES5
    let message = "J'ai deux voitures, une " + firstCar + " et une " + secondCar;

    // Concat. version ES6
    let newMessage = `J'ai deux voitures, une ${firstCar} et une ${secondCar}`;

    console.log(message, newMessage);
//

/*
Déclarer un objet
*/
    let myObject = {
        firstName: 'Julien',
        lastName: 'Noyer',
        birth: 1979,

        sayHello: () => {
            console.log(`Hello, my name is ${myObject.firstName}`);
        }
    };

    // Afficher l'objet dans la console
    console.log(myObject);

    // Exécuter la fonction de l'objet
    myObject.sayHello();
//