"use strict";
//1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    if ((typeof a === "string" && typeof b === "number") ||
        (typeof a === "number" && typeof b === "string")) {
        console.log("não foi possível efetuar a soma!");
    }
}
sum("41", "45");
sum(10, 5.55);
sum("10", 10);
//2 - checkando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
//3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, gostaria de ter acesso a todos os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}, seja bem vindo!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
//4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Yorkshire");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`o cachorro é da raça ${dog.breed}!`);
    }
    else {
        console.log("o cachorro não tem raça!");
    }
}
showDogDetails(turca);
showDogDetails(bob);
//tarefa sobre narrowing
function verifyReview(note) {
    if (typeof note === "number") {
        console.log("Obrigado por ter deixado sua review!");
    }
    else {
        console.log("na próxima oportunidade deixe sua avaliação, sua participação é sempre bem-vinda!");
    }
}
verifyReview(5);
verifyReview(false);
