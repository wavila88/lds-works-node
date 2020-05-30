const express = require("express");
const MessageController = require("../controllers/usuarioAreaController");

const api = express.Router();

api.get("/UsersArea/:id", MessageController.getUserArea);

api.post("/UserArea", MessageController.getUserArea);


api.delete("/UserArea/:id", MessageController.deleteUserArea);

module.exports = api;
