var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : '123qwe',
    database : 'test'
});

module.exports = connection;