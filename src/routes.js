// Declarações
const express = require('express');
const routes = express.Router();

// Rotas
routes.get('/', (req, res) => {
    return res.json('API Online!');
});

routes.get('/teste', (req, res) => {
    return res.json([{'titulo': 'teste'}]);
});

// Exportação
module.exports = routes;