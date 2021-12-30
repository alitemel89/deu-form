const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}));
app.use(cors());

// ROUTES
// Create a Lecturer
app.post("/lecturers", async (req, res) => {
    try {
      const { name, surname, email } = req.body;
      const newLecturer = await pool.query(
        "INSERT INTO lecturer (name, surname, email) VALUES($1, $2, $3) RETURNING *",
        [name, surname, email]
      );
  
      res.json(newLecturer);
    } catch (err) {
      console.error(err.message);
    }
  });
  
// Get Lecturers


const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

