/* 
Imports
*/
    //=> Créer des constantes pour importer les modules NPM
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');

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
    server.engine( 'html', ejs.renderFile );
    server.set( 'view engine', 'html' );

    // Config routes
    server.use( '/api', apiRouter );
    server.use( '/', frontRouter );
//

/* 
Start
*/
    server.listen( port, () => {
        console.log( `Server is listening on port ${port}!` );
    });
//