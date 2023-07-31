"use strict";

const output = {
    home: (req, res) => { 
        res.render("home/index")
    },
    
    login: (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팅장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) { //로그인이 성공하면
                return res.json({ //response. frontend로 응답을 해주게 됨
                    success: true, //success true 라는 object를 json으로 만들어서 
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });

    },
};

//내보내기
module.exports = {
    output,
    process,
};