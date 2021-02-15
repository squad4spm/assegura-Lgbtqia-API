var knex = require("../database/connection");

class UsuarioController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de usuarios");
  }

  async login(req, res) {
    const usuarioreq = req.body.usuario
    const passwordereq = req.body.password

    try {

      await knex('usuarios').where({ usuario: usuarioreq })
      .select("password")
      .then(function(result) {
      if (!result || !result[0])  {  
      return res.status(400).json({ status: "Usuário ou senha inválida!" });
      }

      const password = result[0].password;

      if (passwordereq === password) {
        res.status(200).json({ status: "OK" });
        } else {
          return res.status(400).json({ status: "Usuário ou senha inválida!" });
        }
        })

      // if (body.senhaWord !== "123456") {
      //   return res.status(400).json({ status: "ERROR" });
      // }

      
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

  //  async getAll(req, res) {
  //    try {
  //      const usuarios = await knex.select().table("usuarios");

  //     res.status(200).json({ status: "OK", usuarios });
  //    } catch (e) {
  //      console.log(e);

  //     res.status(400).json({ status: "ERROR" });
  //    }
  //  }

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
