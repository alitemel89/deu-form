const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "myPassword",
  host: "https://dry-dawn-24525.herokuapp.com",
  port: 5432,
  database: "arge",
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = pool;


