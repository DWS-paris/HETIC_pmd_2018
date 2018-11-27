/*
Import & definition
*/
    const { Router } = require('express');
    const mainRouter = Router();
//

/* 
Importer et définir les routers "enfant"
*/
    const FrontRouterClass = require('./front/front.router');
    const frontRouter = new FrontRouterClass();
//

/* 
Définition des routes
*/  
    mainRouter.use( '/', frontRouter.init() );
//

/* 
Export
*/
    module.exports = {
        mainRouter
    };
//