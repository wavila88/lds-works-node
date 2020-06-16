const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const BarrioModel =new Schema ({
    nombreBarrio : { type: String, unique: true },
    nombreEstaca: { type: Schema.ObjectId, ref: "estacas" }
})

module.exports = mongoose.model('barrios', BarrioModel);