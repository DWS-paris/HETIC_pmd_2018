/* 
Imports
*/
    //=> Créer des constantes pour importer les modules NPM
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');

    //=> Services
    const { connect } = require('./services/mysql.serv');

    //=> Routers
    const frontRouter = require('./routes/front.routes');
    const apiRouter = require('./routes/api.routes');
//

/* 
Configuration
*/
    // Config. de base
    const server = express();
    const port = 9876;

    // Config du dossier client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Config du moteur de rendu
    server.set( 'view engine', 'ejs' );

    // Config routes
    server.use( '/api', apiRouter );
    server.use( '/', frontRouter );
//

/* 
Start
*/
    // Connexion à la BDD MySql
    connect( 'localhost', '8889', 'root', 'root', 'hetic' )
    .then( connexion => {
        // Lancer le serveur
        server.listen( port, () => {
            console.log( `Server listening on port ${port}` );
        });
    })
    .catch( err => {
        console.log(err)
    });
//