var knex = require("../database/connection");

class AvaliacaopsicoController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Avaliacoes psico");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("avaliacoespsico").insert(body);

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

      await knex("avaliacoespsico").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR bbbbbb" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const avaliacoespsico = await knex("avaliacoespsico")

      res.status(200).json({ status: "OK", avaliacoespsico: avaliacoespsico });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ccccc" });
    }
  }

  async getAll(req, res) {
    try {
      const avaliacoespsico = await knex("avaliacoespsico")

      res.status(200).json({ status: "OK", avaliacoespsico });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const avaliacaopsico = await knex("avaliacoespsico");

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

      res.status(200).json({ status: "OK", avaliacaopsico: avaliacaopsico });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR eeeee" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("avaliacoespsico").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR fffff" });
    }
  }
}

module.exports = new AvaliacaopsicoController();
