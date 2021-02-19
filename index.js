var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var routerPost = require("./routes/routesPost");
var routerCategoria = require("./routes/routesCategoria");
var routerUsuario = require("./routes/routesUsuario");

var routerAvaliacao = require("./routes/routesAvaliacao");
var routerAvaliacaonome = require("./routes/routesAvaliacaonome");
var routerAvaliacaodireitos = require("./routes/routesAvaliacaodireitos");
var routerAvaliacaocasa = require("./routes/routesAvaliacaocasa");
var routerAvaliacaolocalizacoes = require("./routes/routesAvaliacaolocalizacoes");
var routerAvaliacaoajude = require("./routes/routesAvaliacaoajude");
var routerAvaliacaopsico = require("./routes/routesAvaliacaopsico");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/", router);
app.use("/post", routerPost);
app.use("/categoria", routerCategoria);
app.use("/usuario", routerUsuario);

app.use("/avaliacoes", routerAvaliacao);
app.use("/avaliacoesnome", routerAvaliacaonome);
app.use("/avaliacoesdireitos", routerAvaliacaodireitos);
app.use("/avaliacoescasa", routerAvaliacaocasa);
app.use("/avaliacoeslocalizacoes", routerAvaliacaolocalizacoes);
app.use("/avaliacoesajude", routerAvaliacaoajude);
app.use("/avaliacoespsico", routerAvaliacaopsico);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
