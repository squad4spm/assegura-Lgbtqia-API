var knex = require("../database/connection");

class AvaliacaocasaController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Avaliacoes casas");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("avaliacoescasa").insert(body);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR aaaaa" });
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
      };

      await knex("avaliacoescasa").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR bbbbbb" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const avaliacoescasa = await knex("avaliacoescasa")

      res.status(200).json({ status: "OK", avaliacoescasa: avaliacoescasa });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ccccc" });
    }
  }

  async getAll(req, res) {
    try {
      const avaliacoescasa = await knex("avaliacoescasa")

      res.status(200).json({ status: "OK", avaliacoescasa });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const avaliacaocasa = await knex("avaliacoescasa");

      /*
      const comentario = await knex("comentarios")
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
        .where("comentarios.id", params.id);
        */

      res.status(200).json({ status: "OK", avaliacaocasa: avaliacaocasa });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR eeeee" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("avaliacoescasa").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR fffff" });
    }
  }
}

module.exports = new AvaliacaocasaController();
