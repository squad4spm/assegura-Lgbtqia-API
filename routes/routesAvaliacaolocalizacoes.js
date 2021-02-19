var express = require("express");
var app = express();
var routerAvaliacaolocalizacoes = express.Router();
var avaliacaolocalizacoesController = require("../controllers/AvaliacaolocalizacoesController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaolocalizacoes.get("/", avaliacaolocalizacoesController.getAll);
routerAvaliacaolocalizacoes.post("/", avaliacaolocalizacoesController.create);

module.exports = routerAvaliacaolocalizacoes;