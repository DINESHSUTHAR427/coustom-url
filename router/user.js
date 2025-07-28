const express = require('express');
const {handleGetUserSingUP,handleGetUserLogin} = require('../controllers/user')

const router = express.Router();

router.post("/",handleGetUserSingUP)
router.post("/login",handleGetUserLogin)

module.exports = router;