const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectorTrabajoModel = new Schema({
    nombreSector: { type: String, unique: true }
})

module.exports = mongoose.model('sectores', SectorTrabajoModel);