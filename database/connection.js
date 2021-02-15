var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "",
    database: "recode_site",
  },
});

module.exports = knex;
