const express = require("express");

//controller functions
const { signupUser, loginUser} = require('../controllers/UserController')

const router = express.Router(); 

//login route

router.post('/login', loginUser)

//sigup router

router.post('/signup', signupUser)

module.exports = router;
