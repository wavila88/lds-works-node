const CiudadModel = require('../models/ciudadModel');


 function getAllciudades(req, respuesta) {

// const json = {nombres : "William Miguel"}
const p = new Promise((resolve,reject) =>{
  const response = CiudadModel.find();
  
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
  getAllciudades
};
