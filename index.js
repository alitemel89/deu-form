const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Client } = require('pg');


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({
  limit: "50mb",
  extended: true
}));
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

const host = '0.0.0.0';
const PORT = process.env.PORT || 5000;

app.listen(PORT, host, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

