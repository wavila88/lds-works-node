const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosModel =new Schema ({
    nombres : String,
    apellidos: String,
    descripcionServicios: String,
    imagen: String,
    celular: { type : String , unique : true, required : true },
    correo: { type : String , unique : true, required : true },
    nombreEstaca: { type: Schema.ObjectId, ref: "estacas" },
    nombreBarrio: { type: Schema.ObjectId, ref: "barrios" },
    nombreCiudad: { type: Schema.ObjectId, ref: "ciudades" },
    sector: { type: Schema.ObjectId, ref: "sectores" },  
})

module.exports = mongoose.model('usuarios', UsuariosModel);