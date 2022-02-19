const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "myPassword",
  host: "localhost",
  port: 5432,
  database: "arge",
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = pool;


