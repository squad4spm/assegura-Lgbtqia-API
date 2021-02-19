var express = require("express");
var app = express();
var routerAvaliacaocasa = express.Router();
var avaliacaocasaController = require("../controllers/AvaliacaocasaController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaocasa.get("/", avaliacaocasaController.getAll);
routerAvaliacaocasa.post("/", avaliacaocasaController.create);

module.exports = routerAvaliacaocasa;