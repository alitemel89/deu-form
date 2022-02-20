const Pool = require("pg").Pool;
const { Client } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "myPassword",
  host: "localhost",
  port: 5432,
  database: "arge",
});

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false
});

client.connect()

module.exports = pool;


