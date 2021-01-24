var express = require("express");
var app = express();
var routerPost = express.Router();
var PostController = require("../controllers/PostController");

routerPost.patch("/:id", PostController.update);
routerPost.get("/:id", PostController.getOne);
routerPost.delete("/:id", PostController.delete);
routerPost.get("/", PostController.getAll);
routerPost.post("/", PostController.create);

module.exports = routerPost;
