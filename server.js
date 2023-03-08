// Declarações
const express = require('express');
const cors = require('cors');
const api = express();
const routes = require('./src/routes');

// Execução
api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use('/', routes);
api.listen(process.env.PORT || 3000);
console.log('Run API Express');