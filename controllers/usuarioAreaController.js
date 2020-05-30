const UsuariosAreaModel = require('../models/usuarioAreaProfesionModel');




async function getUserArea(req, res) {

  try {
    const response = await UsuariosAreaModel.find({ $where: function () { return (this.usuarioId == req.params.id) } });


    if (response === null) {
      res.status(200).send({ mensaje: "No se encontro ningun registro" });
    } else {
      res.status(200).send(response);
    }
  } catch (err) {
    res.status(400).send({ mensaje: "Error obteniendo documento intermedio ", detalles: err })
  }

}

async function setUserArea(req, res) {
  const modelo = new UsuariosAreaModel(req.body);
  try {
    await modelo.save();
    res.status(200).send({ respuesta: "UsuarioArea Creado." });
  } catch (err) {
    console.log("Error Creando usuarioArea", err)
    res.status(400).send({ mensaje: "Error Creando el usuarioArea", detalles: err })
  }
};


async function deleteUserArea(req, res) {
  var filter = { _id: req.params.id };
  try {
    const resp = await UsuariosAreaModel.deleteOne(filter);
    res.status(200).send({ respuesta: "Registro Eliminado" });
  } catch (err) {
    console.log("Error Atualizando", err)
    res.status(400).send({ mensaje: "Error Eliminando el usuarioArea", detalles: err })
  }

};

module.exports = {
  getUserArea,
  setUserArea,
  deleteUserArea
};
