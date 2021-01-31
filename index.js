var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var routerPost = require("./routes/routesPost");
var routerCategoria = require("./routes/routesCategoria");
var routerUsuario = require("./routes/routesUsuario");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use("/", router);
app.use("/post", routerPost);
app.use("/categoria", routerCategoria);
app.use("/usuario", routerUsuario);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
