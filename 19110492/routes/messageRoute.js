const express = require('express');
const {messageGetReq} = require('../controllers/messageReq');
const router = express.Router();

// define the home page route
router.get('/:id', messageGetReq);
// define the about route
router.get('/', messageGetReq);
module.exports = router