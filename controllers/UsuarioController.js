var knex = require("../database/connection");

class UsuarioController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de usuarios");
  }

  async login(req, res) {
    const { body } = req;

    try {

      const user = await knex('usuarios').where('usuario', body.usuario)

      if (user.length === 0) {
        return res.status(400).json({ status: "ERROR" });
      }

      // if (body.senhaWord !== "123456") {
      //   return res.status(400).json({ status: "ERROR" });
      // }

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  // async getAll(req, res) {
  //   try {
  //     const usuarios = await knex.select().table("usuario");

  //     res.status(200).json({ status: "OK", usuarios });
  //   } catch (e) {
  //     console.log(e);

  //     res.status(400).json({ status: "ERROR" });
  //   }
  // }

  // async getOne(req, res) {
  //   const { params } = req;

  //   try {
  //     const usuario = await knex("usuario").where("id", params.id);

  //     res.status(200).json({ status: "OK", usuario: usuario });
  //   } catch (e) {
  //     console.log(e);

  //     res.status(400).json({ status: "ERROR" });
  //   }
  // }

}

module.exports = new UsuarioController();
