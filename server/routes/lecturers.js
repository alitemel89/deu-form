const express = require("express");
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


// Register a Lecturer
// POST api/lecturers
router.post("/", [
    check("name", "Name is required").not().isEmpty(),
    check("surname", "Surname is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
        "password",
        "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const { name, surname, email, password } = req.body;

            const salt = await bcrypt.genSalt(10);

            const userPassword = await bcrypt.hash(password, salt)

            console.log(userPassword);
            const newLecturer = await pool.query(
                "INSERT INTO lecturer (name, surname, email, password) VALUES($1, $2, $3, $4) RETURNING *",
                [name, surname, email, userPassword]
            );


            // jwt.sign(lecturer_id, config.get('jwtSecret'), {
            //     expiresIn: 360000
            // }, (err, token) => {
            //     if (err) throw err;
            //     res.json({ token })
            // });

            res.json(newLecturer);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    });

// Get all Lecturers
router.get('/', async (req, res) => {
    try {
        const allLecturers = await pool.query("SELECT * FROM lecturer");
        res.json(allLecturers.rows)
    } catch (err) {
        console.error(err.message);
    }
});



module.exports = router;