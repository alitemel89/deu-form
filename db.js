const Pool = require("pg").Pool;


const pool = new Pool({
  user: "pojspgykcojqrl",
  password: "7890ad3435ee35b68018866afdf436701fb9f9c9cd4ad24bfa74280feb36ec79",
  host: "ec2-52-5-1-20.compute-1.amazonaws.com",
  port: 5432,
  database: "d98tnrvckggm4g",
});


module.exports = pool;


