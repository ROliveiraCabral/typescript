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
//4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Vitória",
    age: 18,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
//6 - typeof type operator
const userName = "Rodrigo";
const userName2 = "Maria";
const userName4 = "José";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "caminhão para pouca carga",
};
function showKm(km) {
    console.log(`O caminhão possui ${km} km`);
}
showKm(newTruck.km);
const newCar = {
    km: 50000,
    kg: 3000
};
showKm(newCar.km);
