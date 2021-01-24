var express = require("express");
var app = express();
var routerUsuario = express.Router();
var UsuarioController = require("../controllers/UsuarioController");

// routerUsuario.get("/", UsuarioController.index);
routerUsuario.post("/login", UsuarioController.login);
// routerUsuario.get("/", UsuarioController.getAll);

module.exports = routerUsuario;
