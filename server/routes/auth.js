const express = require('express');
const router = express.Router();
const authCtrl = require(`${_basedir}/controller/auth`);
//
router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

module.exports = router;