const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioAreaProfesion =new Schema ({
   usuarioId: Number,
   areaProfesionId: Number
})

module.exports = mongoose.model('usuarioAreaProfesion', UsuarioAreaProfesion);