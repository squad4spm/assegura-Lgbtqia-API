var express = require("express");
var app = express();
var routerAvaliacaodireitos = express.Router();
var avaliacaodireitosController = require("../controllers/AvaliacaodireitosController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaodireitos.get("/", avaliacaodireitosController.getAll);
routerAvaliacaodireitos.post("/", avaliacaodireitosController.create);

module.exports = routerAvaliacaodireitos;