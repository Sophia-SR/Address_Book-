const pgp = require("pg-promise")({});
const db = pgp("postgres://tpl6_2021h1:techtonica@localhost:5432/address_book");
module.exports = db;
