// Declarations
const express = require('express');
const routes = express.Router();

// Routes
routes.get('/', (req, res) => {
    return res.json('API Online!');
});

routes.get('/teste', (req, res) => {
    return res.json([{'titulo': 'teste'}]);
});

// Exportation
module.exports = routes;