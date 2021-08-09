var Bitacora = require('../models/bitacora');

function registrar(req, res){
    let data = req.body;
    var bitacora = new Bitacora();
    bitacora.idUsuario = data._id;
    bitacora.nombre = data._nombre;
    bitacora.rol = data._rol;
    bitacora.accion = data.accion;

    bitacora.save((err,bitacora) => {
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(bitacora_save){
                res.status(200).send({bitacora: bitacora_save});
            }else{
                res.status(200).send({message: 'No se registro en la bitacora'});
            }
        }
    });
}

function listar(req,res){
    Bitacora.find((err,bitacora) => {
        if(bitacora_data){
            res.status(200).send({bitacora: bitacora_data});
        }
    });
}

module.exports = {
    registrar,
    listar
}