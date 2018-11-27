/* 
Attendre le chargement du DOM
*/
    document.addEventListener( 'DOMContentLoaded', () =>{

        /* 
        Déclaration des variables
        */
            let myForm = document.querySelector('form');
            let userEmail = document.querySelector('[type="email"]');
            let userPassword = document.querySelector('[type="password"]');
            let errorMessage = document.querySelector('#errorMessage');
            let popin = document.querySelector('#popin');
        //


        /* 
        Méthodes
        */
            const activateForm = () => {
                // Capter le submit (event) sur le formulaire (myForm)
                myForm.addEventListener('submit', (event) => {
                    // Bloquer le comportement naturel du formulaire
                    event.preventDefault();

                    // Réinitialiser les messages d'erreur
                    errorMessage.innerHTML = '';

                    // Initaliser une variable pour les erreurs
                    let formError = 0;

                    // Vérifier le nombre de caractères dans la valeur de userEmail
                    if( userEmail.value.length <= 4 ){
                        // Afficher un message d'erreur dans errorMessage
                        errorMessage.innerHTML = 'Minimum 5 caractères pour l\'email<br>';

                        // Ajouter 1 à formError
                        formError++;
                    };

                    // Vérifier le nombre de caractères dans la valeur de userPassword
                    if( userPassword.value.length <= 4 ){
                        // Afficher un message d'erreur dans errorMessage
                        errorMessage.innerHTML += 'Minimum 5 caractères pour le mot de passe';

                        // Ajouter 1 à formError
                        formError++;
                    };

                    /* 
                    Validation finale du formulaire
                    */
                        if( formError === 0 ){
                            console.log('le Formulaire est validé !');
                        };
                    //
                });
            };
        // 


        /* 
        Lancer la programme
        */
            activateForm();
        // 
    });
// fin d'attente de chargement du DOM