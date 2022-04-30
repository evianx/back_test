var express = require('express');
var Convertidor = require('../controllers/convertidos');
var api = express.Router();

api.get('/listarCurrencies', Convertidor.listarCurrencies);
api.post('/convertir', Convertidor.convertir);

module.exports = api;