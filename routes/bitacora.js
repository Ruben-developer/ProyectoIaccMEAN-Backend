var express = require('express');
var bitacoraController = require('../controllers/BitacoraController');

var app = express.Router();

api.get('/api/seguridad/bitacora', bitacoraController.listar);
api.post('/api/seguridad/bitacora/registrar', bitacoraController.registrar);

module.exports = api;