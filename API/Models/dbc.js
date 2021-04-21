const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    database: "db_CoronaParty",
    password: "",
    connectionLimit: 5
});

module.exports = {
    pool
};