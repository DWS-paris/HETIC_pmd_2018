/* 
Attendre le chargement du DOM
*/
    document.addEventListener( 'DOMContentLoaded', function(){

        /* 
        Déclarations
        - Toutes les variable nécessaire au programme
        */
            let myForm = document.querySelector('form');
            let firstName = document.querySelector('[name="first_name"]');

            // Sélectionner les autres balises
        //



        /* 
        Méthodes
        */
            function activateForm(){

                // Capter la submit sur le formulaire
                myForm.addEventListener('submit', function(event){
                    // Penser à bloquer le comportement naturel du fromulaire
                    event.preventDefault();

                    // Vérifier la taille de la valeur de firstName
                    if( firstName.value.length < 4 ){
                        // Afficher un message d'erreur
                        console.log('Erreur first name');
                    };
                });

            };
        //



        /* 
        Lancer le programme
        */
            activateForm();
        //

    }); 
// Fin de la fonction d'attente de chargement du DOM