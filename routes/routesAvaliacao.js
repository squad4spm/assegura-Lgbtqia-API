var express = require("express");
var app = express();
var routerAvaliacao = express.Router();
var avaliacaoController = require("../controllers/AvaliacaoController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacao.get("/", avaliacaoController.getAll);
routerAvaliacao.post("/", avaliacaoController.create);

module.exports = routerAvaliacao;