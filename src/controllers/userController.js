// Declarations
const userModel = require('../models/userModel');

// Controller Functions
const userRead = async (req, res) => {
    let result;
    let query = await userModel.selectUser(req.params.id);
    result = query;
    res.status(200).json({error: false, data: result});
};

// Exportation
module.exports = {
    userRead
};