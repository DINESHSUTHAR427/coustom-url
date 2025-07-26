const express = require('express');
const {handleGetUserSingUP,} = require('../controllers/user')

const router = express.Router();

router.post("/",handleGetUserSingUP)

module.exports = router;