// Declarations
const knex = require('../db/dbConnection');

// Model Functions
const selectUser = async (id) => {
    let query = knex({ u: 'user' })
    .select('u.*')
    .where(1, '=', 1);
    if (id)
        query.andWhere('u.id', '=', id);
    let result = await query;
    return result;
};

// Exportation
module.exports = {
    selectUser
}