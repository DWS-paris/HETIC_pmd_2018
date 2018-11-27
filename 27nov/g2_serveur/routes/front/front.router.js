/*
Import & definition
*/
    const { Router } = require('express');
    const frontRouter = Router();
//

/* 
Class definition
*/
    class FrontRouterClass {

        // Define routes
        routes(){
            // Homepage
            frontRouter.get( '/', (req, res) => {
                console.log('home')
                // Renvoyer le fichier index.html dans la réponse
                res.render('index');
            });

            // Me
            frontRouter.get( '/me', (req, res) => {
                console.log('me')
                // Renvoyer le fichier index.html dans la réponse
                res.render('me');
            });
        }

        // Initialize routes
        init(){
            this.routes();
            return frontRouter;
        }
    }
//

/* 
Export
*/
    module.exports = FrontRouterClass;
//