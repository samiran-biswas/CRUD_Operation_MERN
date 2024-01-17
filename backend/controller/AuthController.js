// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../model/User');

// Handle user registration
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // You can also generate and send a JWT token for authentication here

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
