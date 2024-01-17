

// routes/authRoutes.js
const express = require('express');
const authController = require('../controller/LoginControl');

const router = express.Router();

// Sign In route
router.post('/signin', authController.signIn);

module.exports = router;
