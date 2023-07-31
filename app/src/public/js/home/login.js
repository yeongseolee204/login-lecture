"use strict";

const id = document.querySelector("#id"), //#은 태그에 아이디로 부여된 "아이디"를 가져와달라는 말
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value, //object는 : 로
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) //json으로 감싸줌. why? 요 위에서 json 데이터 타입으로 데이터를 전달할거기 때문
    })
    .then((res) => res.json()) //promise 공부하기
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    // 에러 발생 하는거 알려주는
    .catsh((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}