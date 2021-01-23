const pgp = require("pg-promise")();

const db = pgp(
  `postgres://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}?ssl=true`
);

module.exports = { pgp, db };
