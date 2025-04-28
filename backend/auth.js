const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
require("dotenv").config();
const jwt = require("jsonwebtoken");


const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.execute(sql, [username, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send('Error registering user');
      }
      res.status(201).send('User registered successfully');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.execute(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).send('Error logging in');
    }
    if (result.length === 0) {
      return res.status(400).send('Invalid credentials');
    }
    const user = result[0];
    try {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {

        const generateToken = (username) => {
          return jwt.sign({ username }, process.env.USER_SECRET_TOKEN, { expiresIn: "1d" });
        };
        const token = generateToken(username);
        res.status(200).json({ message: 'Login successful', token });

       
      } else {
        res.status(400).send('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error logging in');
    }
  });
});

module.exports = router;
