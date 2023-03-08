// Declarações
const express = require('express');
const routes = express.Router();

// Rotas
routes.get('/', (req, res) => {
    return res.json('API Online!');
});

// Exportações
module.exports = routes;