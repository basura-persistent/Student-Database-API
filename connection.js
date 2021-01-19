const mysql = require('mysql');

const connection = mysql.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'rbasu_cs355fl20',
    user: 'rbasu_cs355fl20',
    password: 'ba4826073'
});

module.exports = connection;