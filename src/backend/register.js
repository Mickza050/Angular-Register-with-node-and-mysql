const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const CryptoJS = require('crypto-js');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'db_username',
    password: 'db_password',
    database: 'db_name'
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Sheck the same username in database
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (result.length > 0) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        // Create UUID and hash the password with SHA256
        const uuid = uuidv4();
        const hashedPassword = CryptoJS.SHA256(password).toString();

        // Add info into "user" table
        db.query(
            'INSERT INTO users (uuid, username, password) VALUES (?, ?, ?)',
            [uuid, username, hashedPassword],
            (err) => {
                if (err) return res.status(500).json({ message: 'Database error' });
                res.status(201).json({ message: 'User registered successfully' });
            }
        );
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
