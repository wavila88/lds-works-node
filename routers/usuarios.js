const express = require("express");
const MessageController = require("../controllers/usuariosController");

const api = express.Router();

api.get("/getUsers", MessageController.getAllUsuarios);

api.get("/User", MessageController.getUsuario);

api.post("/User", MessageController.setUser);

api.put("/User/:id", MessageController.updateUser);

api.delete("/User/:id", MessageController.deleteUser);

module.exports = api;
