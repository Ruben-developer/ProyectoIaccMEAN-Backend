var express = require('express');
var respaldoController = require('../controllers/RespaldoController');

var api = express.Router();

api.post('/respaldo/respaldar',respaldoController.respaldar);
api.get('/respaldo/listar',respaldoController.listar);
api.get('/respaldo/restaurar/:backup',respaldoController.restaurar)
api.delete('/respaldo/eliminar/:backup',respaldoController.eliminar)

module.exports = api;