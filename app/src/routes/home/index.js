"use strict";

const express = require("express");
const router = express.Router();

//불러오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); //처리한다는 의미로 프로세스

module.exports = router;