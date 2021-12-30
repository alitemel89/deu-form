const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({
  limit: "50mb",
  extended: true
}));
app.use(cors());


// Define Routes
app.use('/api/lecturers', require('./routes/lecturers'))


const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

