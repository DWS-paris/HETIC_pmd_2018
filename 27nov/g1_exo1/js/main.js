/* 
Attendre le chargement du DOM
*/
    document.addEventListener( 'DOMContentLoaded', function(){

        /* 
        Déclarations
        - Toutes les variables nécessaires au programme
        */
            let myForm = document.querySelector('form');
            let firstName = document.querySelector('[name="first_name"]');
            let lastName = document.querySelector('[name="last_name"]');
            let age = document.querySelector('[name="age"]');
            let formMessage = document.querySelector('#formMessage');
        //



        /* 
        Méthodes
        */
            // Fonction pour vérifier la présence de valeurs en localStorage
            function checkUser(){
                let userFirstName = window.localStorage.getItem('firstName');
                let userLastName = window.localStorage.getItem('lastName');
                let userAge = window.localStorage.getItem('age');

                if( userFirstName === null && userLastName === null && userAge === null ){
                    // Aucune donnnées, lancer le formulaire
                    activateForm();

                } else{
                    // Les données sont présentes
                    window.location = 'home.html';
                }
            };

            // Fonctionn pour gérer le formulaire
            function activateForm(){

                // Capter la submit sur le formulaire
                myForm.addEventListener('submit', function(event){
                    // Initier un variable pour les erreurs du formulaire
                    let formError = 0;

                    // Vider les messages 
                    formMessage.innerHTML = '';

                    // Penser à bloquer le comportement naturel du fromulaire
                    event.preventDefault();

                    // Vérifier la taille de la valeur de firstName
                    if( firstName.value.length < 4 ){
                        // Afficher un message d'erreur
                        formMessage.innerHTML = 'Minimun <b>5 caractères pour le prénom</b><br>';

                        // Ajouter 1 à la variable formError
                        formError++;
                    };

                    // Vérifier la taille de la valeur de lastName
                    if( lastName.value.length < 4 ){
                        // Afficher un message d'erreur
                        formMessage.innerHTML += 'Minimun <b>5 caractères pour le nom</b><br>';

                        // Ajouter 1 à la variable formError
                        formError++;
                    };

                    // Vérifier l'âge de l'utilisateur (min. 12 ans)
                    if( age.value < 11 ){
                        // Afficher un message d'erreur
                        formMessage.innerHTML += 'Age <b>minimum 12 ans</b>';

                        // Ajouter 1 à la variable formError
                        formError++;
                    };

                    /* 
                    Validation finale du formulaire
                    */
                        if( formError === 0 ){
                            // Stocker la valeur des inputs dans le localStorage
                            window.localStorage.setItem( 'firstName', firstName.value );
                            window.localStorage.setItem( 'lastName', lastName.value );
                            window.localStorage.setItem( 'age', age.value );

                            // Afficher la page home.html
                            window.location = 'home.html';

                        } else{
                            console.error('Formulaire non validé');
                        };
                    //
                });
            };
        //



        /* 
        Lancer le programme
        */
            checkUser();
        //

    }); 
// Fin de la fonction d'attente de chargement du DOM