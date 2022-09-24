const express = require('express');
const { homeGetReq } = require('../controllers/homeReq');
const router = express.Router();

// define the home page route
router.get('/', homeGetReq);
// define the about route

module.exports = router