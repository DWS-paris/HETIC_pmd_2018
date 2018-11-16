/* 
Déclaration des variables
*/
    let userCollection = [];
    let myButton = document.querySelector('button:nth-of-type(1)');
    let buttonSayHello = document.querySelector('button:nth-of-type(2)');
    let currentYear = 2018;
//

/*
Définir le model objet (constructor)
*/
    function User( paramFirstName, paramLastName, paramBirthDate ){
        this.firstName = paramFirstName;
        this.lastName = paramLastName;
        this.birthDate = paramBirthDate;
    };

    // Ajouter une fonction au constructeur
    User.prototype.sayHello = function() {
        console.log( `Salut, je suis ${this.firstName} ${this.lastName}` );
    };
//

/* 
Ajouter 3 users dans la collection
*/
    userCollection.push( new User( 'John', 'Doe', 2008 ) );
    userCollection.push( new User( 'Pierre', 'Mektoub', 1980 ) );
    userCollection.push( new User( 'Sophie', 'Niord', 1970 ) );
    userCollection.push( new User( 'Julien', 'Noyer', 1979 ) );
//

/* 
Capter le click sur le bouton
*/
    myButton.addEventListener( 'click', function(){
        // Demander le prénom de l'utilisateur
        let askFirstName = prompt('Votre prénom');
        let askLastName = prompt('Votre nom');
        let askBirthDate = prompt('Votre date de naissance');
        
        // Ajouter un objet dans le tableau
        userCollection.push( new User( askFirstName, askLastName, parseInt(askBirthDate) ) );
        console.log(userCollection);
    });
//

/* 
- Ajouter un bouton dans le Document Object Model (DOM => HTML)
- Capter le click sur ce bouton
- Au click, faire une boucle pour saluer les utilisateurs
*/
    // Capter le click sur ce bouton
    buttonSayHello.addEventListener( 'click', () => {

        // faire une boucle pour saluer les utilisateurs
        for( let i = 0; i < userCollection.length; i++ ){
            userCollection[i].sayHello();

            // Savoir si l'utilisateur est majeur ou pas
            let userAge = currentYear - userCollection[i].birthDate;
            
            if( userAge >= 18 ){
                console.log(`${userAge} : Majeur`);

            } else{
                console.log(`${userAge} : Mineur`);
            };

        };
    });
//