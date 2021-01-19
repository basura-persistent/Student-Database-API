const dbConnection = require('../database/connection');

class DemoController {
    constructor(){
        console.log("Demo Controller Initialized");
    }

    getDatabases () {
        return new Promise((resolve, reject) => {

            dbConnection.query('SHOW TABLES LIKE \'BK_%\'', (err, res) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
            });
        }).catch(err => {throw err;});
    }

    getdata () {
        return new Promise((resolve, reject) => {

            dbConnection.query('SHOW TABLES LIKE \'BK\\_%\'', (err, res) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
            });
        }).catch(error => {throw error;});
    }

}

module.exports = DemoController;