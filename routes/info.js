const express = require('express');
const router = express.Router();
const pool = require('../db');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


// Get all Lecturer Information
// GET api/info
router.get('/', async (req, res) => {
    try {
        const lecturerInfo = await pool.query("SELECT * FROM lecturer_info");
        res.json(lecturerInfo.rows)
    } catch (err) {
        console.error(err.message);
    }
});


// Add Lecturer Info
// POST api/info
router.post('/',
    [auth, check("name", "Name is required").not().isEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, surname, email, gender, birthDate } = req.body;

        try {
            const lecturerInfo = await pool.query(
                "INSERT INTO lecturer_info (name, surname, email, gender, birthDate) VALUES($1, $2, $3, $4, $5) RETURNING *",
                [name, surname, email, gender, birthDate]
            );

            res.json(lecturerInfo.rows);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;