/* 
Imports
*/
    // Node
    const express = require('express');
    const frontRouter = express.Router();

    // Inner
    const { readData } = require('../services/mysql.serv');
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

        // Utiliser la fonction readData pour charger le contenu depuis le BDD
        readData('localhost', '8889', 'root', 'root', 'hetic')
        .then( data => {
            console.log(data);

            //=> Envoyer le fichier "index" dans la réponse avec des donnnées
            return res.render('index', { data: todoes });
        })
        .catch( err => {
            console.error(err)

            //=> Envoyer le fichier "index" dans la réponse avec des donnnées
            return res.render('index', { data: todoes });
        });

        
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