"use strict";
// 1 - void
function withoutReturn() {
    console.log("esta função não tem retorno!");
}
withoutReturn();
// 2 - callback como argunento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreetin(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreetin(greeting, "Rodrigo");
preGreetin(greeting, "João");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([true, false, true]));
console.log(firstElement(["pedra", "papel", "tesoura"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Rodrigo" }, { age: 41, job: "developer" });
console.log(newObject);
//4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "15"));
