const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstacaModel =new Schema ({
    nombreEstaca : { type: String, unique: true }
})

module.exports = mongoose.model('estacas', EstacaModel);