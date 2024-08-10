"use strict";
//1 - generics
function showDado(arg) {
    return `o dado é: ${arg};`;
}
console.log(showDado(5));
console.log(showDado("testando generic"));
console.log(showDado(true));
console.log(showDado(["teste"]));
//2 - constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = {
    name: "Porta",
    cor: "Branca",
};
const otherObj = {
    name: "Carro",
    wheels: 4,
    engine: 1.0,
};
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.3,
    color: "branca",
};
const myPen = {
    name: "Bic",
    wheels: false,
    engine: false,
    color: "azul",
};
console.log(myCar);
console.log(myPen);
