const express = require('express');
const {registerUser} = require('../controllers/userController');
const {loginUser} = require('../controllers/userController');

const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login',loginUser);

module.exports = router;