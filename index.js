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
// cors
app.use(cors({
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "access-control-allow-origin",
          "value": "*"
        }
      ]
    }
  ]
}));

app.use("/", router);
app.use("/post", routerPost);
app.use("/categoria", routerCategoria);
app.use("/usuario", routerUsuario);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
