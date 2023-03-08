// Declarações
const mysql = require('mysql');

// Conexão
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamer_profile_db'
});

// Exportação
module.exports = connection;