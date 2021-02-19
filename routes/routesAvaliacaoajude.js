var express = require("express");
var app = express();
var routerAvaliacaoajude = express.Router();
var avaliacaoajudeController = require("../controllers/AvaliacaoajudeController");

//routerCategoria.get("/", catController.index)
//routerAvaliacao.patch("/:id", avaliacaoController.update);
//routerAvaliacao.get("/:id", avaliacaoController.getOne);
//routerAvaliacao.delete("/:id", avaliacaoController.delete);
routerAvaliacaoajude.get("/", avaliacaoajudeController.getAll);
routerAvaliacaoajude.post("/", avaliacaoajudeController.create);

module.exports = routerAvaliacaoajude;