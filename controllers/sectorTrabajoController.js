const SectorTrabajoModel = require('../models/sectorTrabajoModel');



async function getAllsectorTrabajo(req, respuesta) {

  const p = new Promise((resolve,reject) =>{
    const response = SectorTrabajoModel.find();
    console.log(response);
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
  getAllsectorTrabajo
};
