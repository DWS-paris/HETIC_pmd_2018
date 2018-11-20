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
    const fetchHtmlData = (page = 'accueil') => {
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
        })

        // Capter les erreurs
        .catch( error => {
            console.error(error)
        })
    }
//

/* 
Charger le contenu de la page d'accueil
*/
    fetchHtmlData()
// 