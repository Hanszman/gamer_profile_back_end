// Declarations
const express = require('express');
const routes = express.Router();

// Routes
const user = require('./controllers/userController');

// GET
routes.get('/', (req, res) => res.json({ msg: 'API Online!' }));
routes.get('/teste', (req, res) => res.json([{ msg: 'teste' }]));
routes.get('/user/read/', user.userRead);
routes.get('/user/read/:id', user.userRead);

// POST

// PUT

// DELETE

// Exportation
module.exports = routes;