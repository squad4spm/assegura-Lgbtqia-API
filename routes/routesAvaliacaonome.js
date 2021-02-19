var express = require("express");
var app = express();
var routerAvaliacaonome = express.Router();
var avaliacaonomeController = require("../controllers/AvaliacaonomeController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaonome.get("/", avaliacaonomeController.getAll);
routerAvaliacaonome.post("/", avaliacaonomeController.create);

module.exports = routerAvaliacaonome;