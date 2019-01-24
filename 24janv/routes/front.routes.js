/* 
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
//

/* 
Définition
*/
    //=> Homepage
    frontRouter.get('/', ( req, res ) => {
        //=> Envoyer le fichier "index" dans la réponse
        res.render('index');
    });

    //=> Todo page
    frontRouter.get('/todo', ( req, res ) => {
        //=> Envoyer le fichier "todo" dans la réponse
        res.render('todo');
    });
//

/* 
Export
*/
    module.exports = frontRouter;
//