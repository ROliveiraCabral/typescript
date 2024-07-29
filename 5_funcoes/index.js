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
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
//6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}, tudo bem?`;
    }
}
console.log(modernGreeting("Rodrigo"));
console.log(modernGreeting("Patrícia", "Sra."));
// 7 - parametro default
function somaDefault(a, b = 10) {
    return a + b;
}
console.log(somaDefault(31));
console.log(somaDefault(20, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um número " + x);
    }
}
doSomething([10, 20, 30]);
doSomething(99);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro");
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(100, 250, 633));
// 11 -destructuring como parâmetro
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e o preço é R$ ${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
