"use strict";

const hello = (req, res) => {  //function hello = (req, res) { 랑 동일하다고 보면 됨
    res.render("home/index")
}

const login = (req, res) => {
    res.render("home/login")
}

//내보내기
module.exports = {
    hello,   //원래는 {key: value} 이렇게 저장해야 하는데
    login,   //, 걍 하나만 입력하면 자동적으로 {key: key} 이렇게 저장이 됨
}