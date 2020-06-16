const express = require("express");
const usuariosController = require("../controllers/usuariosController");
const ciudadController = require('../controllers/ciudadController');
const userAreaController = require('../controllers/usuarioAreaController');
const barrioController = require('../controllers/barrioController');
const estacaController = require('../controllers/estacaController');

const api = express.Router();

//Usuario
api.get("/getUsers", usuariosController.getAllUsuarios);

api.get("/User", usuariosController.getUsuario);

api.post("/User", usuariosController.setUser);

api.put("/User/:id", usuariosController.updateUser);

api.delete("/User/:id", usuariosController.deleteUser);

//Area Profesión
api.get("/UsersArea/:id", userAreaController.getUserArea);

api.post("/UserArea", userAreaController.getUserArea);

api.delete("/UserArea/:id", userAreaController.deleteUserArea);
//Ciudad
api.get("/ciudad", ciudadController.getAllciudades);
//Barrio
api.get("/barrio", barrioController.getbarrios);

api.post("/barrio", barrioController.setBarrio);

api.delete("/barrio/:id", barrioController.deleteBarrio);
//Estaca
api.get("/estaca", estacaController.getAllestacas);


module.exports = api;