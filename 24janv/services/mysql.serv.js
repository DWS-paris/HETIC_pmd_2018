/* 
Imports
*/
    const mysql = require('mysql');
//

/* 
Config
*/
    const connect = ( bddHost, bddPort, bddUser, bddPassword, bddBase ) => {
        // Mettre en place une Promise
        return new Promise( (resolve, reject) => {

            // Config. MySQL
            const connection = mysql.createConnection({
                host     : bddHost,
                port     : bddPort,
                user     : bddUser,
                password : bddPassword,
                database : bddBase
            });

            // Connexion à MySQL
            connection.connect( (err) => {
                // Vérifier la connexion
                if( err ){
                    // Rejeter la Promise
                    return reject(err);

                } else{
                    // Résoudre la Promise
                    return resolve( connection );
                };
            })

        });
    }

    const readData = ( bddHost, bddPort, bddUser, bddPassword, bddBase ) => {
        // Mettre en place une Promise
        return new Promise( (resolve, reject) => {

            // Config. MySQL
            const connection = mysql.createConnection({
                host     : bddHost,
                port     : bddPort,
                user     : bddUser,
                password : bddPassword,
                database : bddBase
            });

            // Connexion à MySQL
            connection.connect( (err) => {
                // Vérifier la connexion
                if( err ){
                    // Rejeter la Promise
                    return reject(err);

                } else{
                    // Récupérer les données depuis la bdd
                    connection.query('SELECT * FROM todoes', (error, results, fields) => {
                        if( err ) {
                            return reject(err);

                        } else{
                            // Couper la connexion
                            connection.end();

                            // Résoudre le résultat
                            return resolve( { results: results, fields: fields } )
                        }
                    });
                    
                };
            })

        });
    };
//

/* 
Export
*/
    module.exports = {
        connect,
        readData
    }
//