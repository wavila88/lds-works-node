const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaProfesion =new Schema ({
    nombre : String
})

module.exports = mongoose.model('areaProfesion', AreaProfesion);