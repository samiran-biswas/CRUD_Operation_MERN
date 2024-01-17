// routes/authRoutes.js
const express = require('express');
const authController = require('../controller/AuthController');

const router = express.Router();

// Registration route
router.post('/register', authController.register);

module.exports = router;
