const EstacaModel = require('../models/estacaModel');



async function getAllestacas(req, res) {

  const response = await EstacaModel.find();

  res.status(200).send(response);
}


module.exports = {
  getAllestacas
};
