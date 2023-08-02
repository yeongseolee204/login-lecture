"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id","psword");
        
        const response = {}; //object로 만들기
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) { //로그인이 성공하면
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json(response);

    },
};

//내보내기
module.exports = {
    output,
    process,
};