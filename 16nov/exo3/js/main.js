/* 
Déclarer un tableau userCollection contenant 4 prénoms
*/
    let userCollection = [ 'John', 'Paul', 'Ringo', 'Georges', 'Yoko' ];
//

/*
Saluer chaque item du tableau
*/
    // Créer une boucle WHILE sur une collection de données
    let i = 0;
    while( i < userCollection.length ){
        console.log( `Salut ${ userCollection[i] }` );
        
        // !!ATTENTION!! Incrémenter i
        i++;
    };
    
    // Créer une boucle FOR sur une collection de données
    for( let i = 0; i < userCollection.length; i++ ){
        console.log( `Salut ${ userCollection[i] }` );
    };

    // Créer une boucle FOR OF sur une collection de données
    for( let item of userCollection ){
        console.log(`Hello ${item}`);
    };

    // Créer une boucle FOR EACH sur une collection de données
    userCollection.forEach( item => {
        console.log(`Hello ${item}`);
    });
//

/* 
Déclarer un objet user contenant firstName et lastName
*/
    let user = {
        firstName: 'Julien',
        lastName: 'Noyer'
    };

    // Faire une boucle FOR IN sur les propriétés de l'objet
    for( let property in user ){
        console.log('Propriété :', property);
        console.log( 'Valeur de la propriété :', user[property] );
    };
//