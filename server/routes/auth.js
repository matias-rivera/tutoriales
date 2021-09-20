const express = require("express");
const router = express.Router();

//import controllers
const { register } = require("../controllers/auth");

const { runValidation } = require("../validators");
const { userRegisterValidator } = require("../validators/auth");

router.post("/register", userRegisterValidator, runValidation, register);

module.exports = router;
