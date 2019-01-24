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
        //=> Créeer une collection de todoes
        const todoes = [
            {
                _id: 0,
                content: "Créer un serveur Nodejs",
                isDone: true
            },
            {
                _id: 1,
                content: "Ajouter des routes au serveur",
                isDone: true
            },
            {
                _id: 2,
                content: "Faire une requête API depuis le client",
                isDone: false
            }
        ]
        
        //> Renvoyer le flux JSON dans la réponse
        res.json( todoes );
    });
//

/* 
Export
*/
    module.exports = apiRouter;
//