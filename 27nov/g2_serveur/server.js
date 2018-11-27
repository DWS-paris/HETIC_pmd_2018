/* 
Imports & declaration
*/
    // Importer express pour configurer le serveur
    const express = require('express');

    // Importer ejs pour le moteur de rendu
    const ejs = require('ejs');

    // Importer pth pour gérer le dossier des vues client
    const path = require('path');

    // Définir le port
    const port = 9876;

    // Créer une variable pour le serveur
    const server = express();

    // Importer le router princial
    const { mainRouter } = require('./routes/main.router');
//

/* 
Server config
*/
    class ServerClass {

        // Créer une méthode pour initialiser le serveur
        init(){
            // Configurer le moteur de rendu (engine)
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );

            // Configurer le dossier pour les vues client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static( path.join(__dirname, '/www') ) )

            // Configurer le router
            server.use('/', mainRouter);

            // Lancer le serveur
            this.launch()
        }

        // Méthode pour lancer le serveur
        launch(){
            // Ecouter le port pour lancer le serveur
            server.listen( port, () => {
                console.log( `Le serveur est lancé sur le port ${port}` );
            });
        }
    }
//

/* 
Start server
*/
    new ServerClass().init();
//