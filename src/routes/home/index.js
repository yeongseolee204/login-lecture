"use strict";

const express = require("express");
const router = express.Router();

//불러오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);  //ctrl 안에 있는 hello를 불러온다
router.get("/login", ctrl.login);

module.exports = router;