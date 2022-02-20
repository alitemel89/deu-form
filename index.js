const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Client } = require('pg');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Define Routes
app.use('/api/lecturers', require('./routes/lecturers'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/info', require('./routes/info'))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static('client/build'))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:myPassword@127.0.0.1:5432/arge',
  ssl: process.env.DATABASE_URL ? true : false
});

client.connect();

client.query('SELECT * FROM lecturer;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const host = '0.0.0.0';
const PORT = process.env.PORT || 5000;

app.listen(PORT, host, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

