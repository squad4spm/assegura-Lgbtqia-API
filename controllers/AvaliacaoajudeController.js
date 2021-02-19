var knex = require("../database/connection");

class AvaliacaoajudeController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Avaliacoes ajude");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("avaliacoesajude").insert(body);

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

      await knex("avaliacoesajude").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR bbbbbb" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const avaliacoesajude = await knex("avaliacoesajude")

      res.status(200).json({ status: "OK", avaliacoesajude: avaliacoesajude });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ccccc" });
    }
  }

  async getAll(req, res) {
    try {
      const avaliacoesajude = await knex("avaliacoesajude")

      res.status(200).json({ status: "OK", avaliacoesajude });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const avaliacaoajude = await knex("avaliacoesajude");

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

      res.status(200).json({ status: "OK", avaliacaoajude: avaliacaoajude });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR eeeee" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("avaliacoesajude").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR fffff" });
    }
  }
}

module.exports = new AvaliacaoajudeController();
