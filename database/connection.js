var knex = require("knex")({
  
  client: "mysql2",
  connection: {
    host: "mysql741.umbler.com",
    user: "recode_site",
    port: "41890",
    password: "reCode323##",
    database: "recode_site",
  },

  /*
  client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      //port: "3005",
      password: "",
      database: "assegura",
    },
  */
});

module.exports = knex;
