const UsuariosModel = require('../models/usuariosModel');


const getAllUsuarios = (req, respuesta) =>{
  // const usuarios = req.body.nombres;
  // const json = {nombres : "William Miguel"}
  const p = new Promise((resolve,reject) =>{
    const response =  UsuariosModel.aggregate([
      {
        $lookup:
          {
            from: "barrios",
            localField: "nombreBarrio",
            foreignField: "_id",
            as: "Barrio"
          }
     },
      {
        $lookup:
          {
            from: "sectores",
            localField: "sector",
            foreignField: "_id",
            as: "Sector"
          }
     },
       {
        $lookup:
          {
            from: "ciudades",
            localField: "nombreCiudad",
            foreignField: "_id",
            as: "Ciudad"
          }
     },
     {
      $lookup:
        {
          from: "estacas",
          localField: "nombreEstaca",
          foreignField: "_id",
          as: "Estaca"
        }
   },
   ])
    
    resolve(response);
  });
 
    p.then(
      res =>
      { 
        respuesta.status(200).send(res);
      }).catch(err =>
      { 
        respuesta.status(200).send("Error: ",  err);
      })
      
}

async function getUsuario(req, res) {
  // const usuarios = req.body.nombres;
  // const json = {nombres : "William Miguel"}
  const response = await UsuariosModel.findOne(req.body);
  console.log(response);

  if (response === null) {
    res.status(200).send({ mensaje: "No se encontro ningun registro" });
  } else {
    res.status(200).send(response);
  }

}

async function setUser(req, res) {
  const modelo = new UsuariosModel(req.body);

  try {
    await modelo.save();
    await res.status(200).send({ respuesta: "Usuario Creado." });
  } catch (err) {
    console.log("Error Creando usuario", err)
   await res.status(400).send({ mensaje: "Error Creando el usuario", detalles: err })
  }
  return res;
};



async function updateUser(req, res) {
  var filter = { _id: req.params.id };
  try {
    const resp = await UsuariosModel.updateOne(filter, req.body);
  if(resp.nModified > 0){
    res.status(200).send({ respuesta: "Registro Actualizado" });
  }else{
    res.status(200).send({ respuesta: "No se encontro Registro" });
  }
  } catch (err) {
    res.status(400).send({ mensaje: "Error Actualizando el usuario", detalles: err })
  }

};

async function deleteUser(req, res) {
  var filter = { _id: req.params.id };
  try {
    const resp = await UsuariosModel.deleteOne(filter);
    res.status(200).send({ respuesta: "Registro Eliminado" });
  } catch (err) {
    console.log("Error Atualizando", err)
    res.status(400).send({ mensaje: "Error Eliminando el usuario", detalles: err })
  }

};

module.exports = {
  getAllUsuarios,
  setUser,
  getUsuario,
  updateUser,
  deleteUser
};
