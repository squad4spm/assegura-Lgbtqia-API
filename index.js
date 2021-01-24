var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var routerPost = require("./routes/routesPost");
var routerCategoria = require("./routes/routesCategoria");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cors
app.use(cors());

app.use("/", router);
app.use("/post", routerPost);
app.use("/categoria", routerCategoria);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
