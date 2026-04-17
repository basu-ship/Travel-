const express = require('express');
// const transportController = require('../controllers/transportController');

const {searchTransports} = require('../controllers/transportController');
const router = express.Router();

// Search transports
router.get('/',searchTransports);


module.exports = router