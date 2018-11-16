/* 
Déclarer des variables
*/
    let first = 0;
    let second = 2;
    let third = 10;
    let fourth = 22;
    let fifth = true;
//

/* 
Opérateurs de comparaison
*/
    console.log( first > second );
    console.log( first >= second );
    console.log( first < second );
    console.log( first <= second );

    console.log( fourth % third ); // Reste d'une division
    console.log( !fifth ); // Invercer une valuer boolean

    console.log( ++first ); // Incrémenter de 1
    console.log( --second );
//

/* 
Les conditions IF, ELSE..IF, ELSE
*/
    let userAge = 40;

    if( userAge >= 40 ){
        console.log('Sénior');

    } else if( userAge >= 18 ){
        console.log('Majeur');

    } else{
        console.log('Mineur');
    };

    // Utilisation du et logique : &&
    if( userAge >= 20 && userAge <= 40 ){
        console.log('Entre 20 et 40');
    };

    // Utilisation du ou logique
    if( userAge == 20 || userAge == 40 ){
        console.log('20 ou 40');
    };
//

/* 
Comparer la valeur et le type des deux variables
*/
    let firstNumber = 12;
    let secondNumber = '12';

    if( firstNumber === secondNumber ){
        console.log('Vrai');

    } else { 
        console.log('Faux') 
    };
//

/* 
Conditions ternaires
*/
    let myTest = true;

    myTest ? console.log('Vrai') : console.log('Faux');
//