/*
Import
*/
    const mongoose = require('mongoose')
//

/* 
Config
*/
    const mongoConnect = () => {
        return new Promise( (resolve, reject) => {

            // Connexion à MongoDB
            mongoose.connect()
            .then()
            .catch();

        });
    }
//

/* 
Export
*/
    module.exports = mongoConnect;
//