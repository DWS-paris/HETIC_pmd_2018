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
                isDone: true
            }
        ]

        //=> Envoyer le fichier "index" dans la réponse avec des donnnées
        res.render('index', { data: todoes });
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