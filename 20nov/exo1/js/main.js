/* 
Déclaration des variables
*/
    let myNav = document.querySelectorAll('nav a');
    console.log(myNav);
//

/* 
Activer la navigation
*/
    // Faire une boucle sur myNav (collection de liens)
    for( let item of myNav ){
        // item => lien de la nav

        // Capter le clic sur le lien
        item.addEventListener( 'click', (event) => {
            // Bloquer le comportement naturel de la balise
            event.preventDefault();

            // Récupérer la valeur de l'attribut link-data
            const pageName = item.getAttribute('link-data')

            // Ajouter le contenu dans le DOM
            fetchHtmlData(pageName)
        });
    };
// 

/* 
Création d'une fonction fetch
*/
    const fetchHtmlData = (page = 'contacts') => {
        // Requête asynchrone sur un fichier HTML
        fetch(`./content/${page}.html`)

        // 1er callback : analyse et traitement du fetch
        .then( rawResponse => {
            // Renvoyer la réponse au fromat texte
            return rawResponse.text()
        })

        // 2ème callback : manipuler les données
        .then( textResponse =>{
            // Ajouter le contenu dans le DOM
            document.querySelector('main').innerHTML = textResponse

            // Envoyer le nom de la page dans le dernier then
            return page
        })

        .then( page => {
            // Vérifier le nom de la page active
            if( page === 'contacts' ) submitForm()
        })

        // Capter les erreurs
        .catch( error => {
            console.error(error)
        })
    }
//

/* 
Gestion du formulaire
*/
    const submitForm = () => {
        // Déclaration des variables
        let myForm = document.querySelector('form');
        let msgSubject = document.querySelector('[placeholder="Sujet"]');
        let msgEmail = document.querySelector('[placeholder="Email"]');
        let msgMessage = document.querySelector('[placeholder="Votre message"]');
        let messageList = document.querySelector('form + ul');

        // Capter le submit du formulaire
        myForm.addEventListener( 'submit', (event) => {
            // Initier une variable pour la gestion des erreurs
            let formError = 0;

            // Bloquer le comportement naturel de la balise
            event.preventDefault();

            // Le sujet est valide SI il contient au minimum 2 carctères
            if( msgSubject.value.length < 2){
                // Incrémenter formError de 1
                formError++

                // Ajouter la class formError sur msgSubject
                msgSubject.classList.add('formError')
            }

            // L'email est valide SI il contient au minimum 5 carctères
            if( msgEmail.value.length < 5){
                // Incrémenter formError de 1
                formError++

                // Ajouter la class formError sur msgEmail
                msgEmail.classList.add('formError')
            }

            // Le message est valide SI il contient au minimum 5 carctères
            if( msgMessage.value.length < 5){
                // Incrémenter formError de 1
                formError++

                // Ajouter la class formError sur msgMessage
                msgMessage.classList.add('formError')
            }

            // Validation finale du formulaire
            if( formError === 0 ){
                console.log('Le formulaire est validé !');

                // Afficher le message dans la liste
                messageList.innerHTML += `
                    <li>
                        <h3>${msgSubject.value}</h3>
                        <p>${msgMessage.value}</p>
                        <p>${msgEmail.value}</p>
                    </li>
                `
                // Vider le formulaire
                msgEmail.value = ''
                msgMessage.value = ''
                msgSubject.value = ''
            }
        })

        // Supprimer les messages d'erreur au focus
        msgSubject.addEventListener( 'focus', () => {
            msgSubject.classList.remove('formError')
        })
        msgEmail.addEventListener( 'focus', () => {
            msgEmail.classList.remove('formError')
        })
        msgMessage.addEventListener( 'focus', () => {
            msgMessage.classList.remove('formError')
        })
    };
//

/* 
Charger le contenu de la page d'accueil
*/
    fetchHtmlData()
// 