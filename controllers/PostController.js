var knex = require("../database/connection");

class PostController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Posts");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("posts").insert(body);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async update(req, res) {
    const { body, params } = req;

    try {
      const data = {
        title: body.title ? body.title : null,
        content: body.content ? body.content : null,
        image: body.image ? body.image : null,
        link: body.link ? body.link : null,
        categoria_id: body.categoria_id ? body.categoria_id : null,
      };

      await knex("posts").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const posts = await knex("posts")
      .join("categorias", "posts.categoria_id", "categorias.id")
      .select("*",  "categorias.nome as categoria")
      .where("categoria_id", params.idCat);

      res.status(200).json({ status: "OK", posts: posts });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async getAll(req, res) {
    try {
      const posts = await knex("posts")
        .join("categorias", "posts.categoria_id", "categorias.id")
        .select("posts.id", "posts.title", "categorias.nome as categoria");

      res.status(200).json({ status: "OK", posts });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      // const post = await knex("posts").where("id", params.id);

      const post = await knex("posts")
        .join("categorias", "posts.categoria_id", "categorias.id")
        .select(
          "posts.id",
          "posts.title",
          "posts.content",
          "posts.link",
          "posts.image",
          "posts.categoria_id",
          "categorias.nome as categoria"
        )
        .where("posts.id", params.id);

      res.status(200).json({ status: "OK", post: post });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("posts").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }
}

module.exports = new PostController();
