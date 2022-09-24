const express = require('express');
const {mssvGetReq, mssvPostReq} = require('../controllers/mssvReq');
const router = express.Router();


// define the home page route
router.get('/:id', mssvGetReq);
router.get('/', mssvGetReq);
// define the about route
router.post('/:id',mssvPostReq)
module.exports = router