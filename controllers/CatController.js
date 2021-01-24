var knex = require("../database/connection");

class catController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Categorias");
  }

  async create(req, res) {
    const { body } = req;

    try {
      const data = {
        nome: body.nome,
      };

      await knex("categorias").insert(data);

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
        nome: body.nome ? body.nome : null,
      };

      await knex("categorias").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async getAll(req, res) {
    try {
      const categorias = await knex.select().table("categorias");

      res.status(200).json({ status: "OK", categorias });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const categoria = await knex("categorias").where("id", params.id);

      res.status(200).json({ status: "OK", categoria: categoria });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("categorias").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }
}

module.exports = new catController();
