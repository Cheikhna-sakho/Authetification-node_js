const express = require('express');
const router = express.Router();
const userCtrl = require(`${_basedir}/controller/user`);
//
router.get("/", userCtrl.findAll);
router.get("/:id",userCtrl.find);

module.exports = router;