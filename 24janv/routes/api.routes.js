/* 
Imports
*/
    const express = require('express');
    const apiRouter = express.Router();
//

/* 
Définition
*/
    //=> Route pour récupérer la liste des todo
    apiRouter.get('/todoes', ( req, res ) => {
        
        //> Renvoyer le flux JSON dans la réponse
        res.json( 'todoes' );
    });
//

/* 
Export
*/
    module.exports = apiRouter;
//