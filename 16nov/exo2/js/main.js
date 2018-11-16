/* 
Création d'une foncition en ES5
*/
    function sayHello( nameParam ){
        console.log(`Hello ${nameParam}`);
    };

    let sayCiao = function( nameParam ){
        console.log(`Ciao ${nameParam}`);
    };

    // Appeler la fonction
    sayCiao('Julien');
    sayCiao('Sophie');
    sayCiao('Chuck');
//

/* 
Création de fonction en ES6
*/
    const sayHola = (nameParam) => {
        console.log(`Hola ${nameParam}`);
    };

    const sayHolaSecond = nameParam => console.log(`Hola ${nameParam}`);

    // Appeler la fonction
    sayHola('Steve');
    sayHolaSecond('Steve');
//