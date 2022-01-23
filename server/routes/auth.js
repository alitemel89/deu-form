const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const pool = require('../db');
const { check, validationResult } = require('express-validator');


// Get Logged in User
// GET api/auth
router.get('/', auth, async (req, res) => {
    try {
        const lecturer = await pool.query(`SELECT name FROM lecturer ORDER BY lecturer_id DESC LIMIT 1;`);

        res.json(lecturer.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})


// Auth Lecturer & Get Token
// POST api/auth
router.post('/', [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body;

        try {
            const currentLecturer = await pool.query(`SELECT * FROM lecturer WHERE email=$1`,
                [req.body.email])


            const lecturerEmail = currentLecturer.rows[0].email;
            const lecturerPassword = currentLecturer.rows[0].password;

            if (!currentLecturer && lecturerEmail !== email) {
                return res.status(400).json({ msg: 'Invalid Credentials' })
            }

            const isMatch = await bcrypt.compare(password, lecturerPassword);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }

            const payload = {
                currentLecturer: {
                    lecturer_id: currentLecturer.lecturer_id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 360000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                }
            )
        } catch (err) {
            console.log(err.message)
            res.status(500).send("Server Error")
        }
    }
)




module.exports = router;