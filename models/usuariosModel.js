const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosModel =new Schema ({
    nombres : String,
    apellidos: String,
    descripcionServicios: String,
    celular: String,
    correo: String
})

module.exports = mongoose.model('usuarios', UsuariosModel);