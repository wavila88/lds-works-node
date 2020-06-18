const EstacaModel = require('../models/estacaModel');



async function getAllestacas(req, respuesta) {

  const p = new Promise((resolve,reject) =>{
    const response = EstacaModel.find();
    
    resolve(response);
  });
  
    p.then(
      res =>
      { 
        respuesta.status(200).send(res);
      }).catch(err =>
      { 
        respuesta.status(400).send("Error: ",  err);
      })

}


module.exports = {
  getAllestacas
};
