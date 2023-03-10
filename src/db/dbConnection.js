// Connection
const Knex = require('knex')({
    client: process.env.DB_CLIENT || 'mysql',
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_SCHEMA || 'gamer_profile_db',
        timezone: 'UTC'
    }
});

// Exportation
module.exports = Knex;