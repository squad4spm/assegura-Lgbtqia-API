var express = require("express");
var app = express();
var routerCategoria = express.Router();
var catController = require("../controllers/CatController");

//routerCategoria.get("/", catController.index)
routerCategoria.patch("/:id", catController.update);
routerCategoria.get("/:id", catController.getOne);
routerCategoria.delete("/:id", catController.delete);
routerCategoria.get("/", catController.getAll);
routerCategoria.post("/", catController.create);

module.exports = routerCategoria;
