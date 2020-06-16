const CiudadModel = require('../models/ciudadModel');


async function getAllciudades(req, res) {
  const response = await CiudadModel.find();
  res.status(200).send(response);
}


module.exports = {
  getAllciudades
};
