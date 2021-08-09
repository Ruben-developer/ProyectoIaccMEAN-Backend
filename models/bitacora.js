var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BitacoraSchema = Schema({
    
    idUsuaro: {type: Schema.ObjectId, ref:'user'},
    nombre: String,
    rol: String,
    accion: String,
    fecha: {type: Date, default: Date.now}

});

module.exports = mongoose.model('bitacora', BitacoraSchema);
