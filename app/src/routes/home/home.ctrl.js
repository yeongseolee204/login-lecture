"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => { 
        res.render("home/index")
    },
    login: (req, res) => {
        res.render("home/login")
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

//내보내기
module.exports = {
    output,
    process,
};


// =====

// const user = new User(req.body);
// const response = user.login();
// return res.json(response);

// User라는 class를 만들때, 인스턴스로 만들 것임. 그래서 new User();로 만들게 될 것.
// 그리고 변수를 user로 받음. const user = new User();
// User라는 인스턴스를 만들 때, 클라이언트가 전달한 request의 body data들을 기본적으로 갖고 있도록 만들 것.
// const user = new User(req.body).. 2분.. 10초쯤부터..