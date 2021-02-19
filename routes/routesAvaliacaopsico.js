var express = require("express");
var app = express();
var routerAvaliacaopsico = express.Router();
var avaliacaopsicoController = require("../controllers/AvaliacaopsicoController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaopsico.get("/", avaliacaopsicoController.getAll);
routerAvaliacaopsico.post("/", avaliacaopsicoController.create);

module.exports = routerAvaliacaopsico;