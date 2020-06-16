const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CiudadModel =new Schema ({
    nombreCiudad : String
})

module.exports = mongoose.model('ciudades', CiudadModel);