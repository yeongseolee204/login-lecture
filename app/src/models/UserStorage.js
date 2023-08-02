"use strict";

class UserStorage {
    static #users = { //정적변수로 만들어줌 -> home.ctrl 에 있는 line.20의 class를 받을 수 있게 됨
        id: ["woorimIT", "나개발", "김팀장"], //하늘색 글씨가 필드 :[필드에 속하는 데이터]
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields){ //class자체에서 method에 접근할려면 앞에 static을 붙여야함
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}
//#변수 는 변수를 public에서 privit으로 바뀌게 하는 거. 하는 이유. 원래 ctrl에 있는 변수를 그대로 바로 불러오게 하지 않음.
module.exports = UserStorage;