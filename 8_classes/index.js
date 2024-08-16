"use strict";
//1 - campos em classe
class User {
}
const rodrigo = new User();
rodrigo.name = "Rodrigo";
console.log(rodrigo);
//2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 8);
console.log(joao);
