const BarrioModel = require('../models/barrioModel');


async function getbarrios(req, res) {
 
  var id = req.nombreEstaca;
  console.log("req",req.body);
  const response = await BarrioModel.find(req.body);
  res.status(200).send(response);
}

async function setBarrio(req, res) {
  const modelo = new BarrioModel(req.body);
 console.log("Request", req.body);
  try {
    await modelo.save();
    await res.status(200).send({ respuesta: "Barrio Creado." });
  } catch (err) {
    console.log("Error Creando barrio", err)
   await res.status(400).send({ mensaje: "Error Creando el barrio", detalles: err })
  }
  return res;
}


async function deleteBarrio(req, res) {
  var filter = { _id: req.params.id };
  try {
    const resp = await BarrioModel.deleteOne(filter);
    res.status(200).send({ respuesta: "Registro Eliminado" });
  } catch (err) {
    console.log("Error Eliminando", err)
    res.status(400).send({ mensaje: "Error Eliminando el Barrio", detalles: err })
  }

};


module.exports = {
  getbarrios,
  setBarrio,
  deleteBarrio
};
