"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto encontra-se disponível em estoque");
    }
    else {
        console.log("O produto não está disponível em estoque");
    }
}
const shirt = {
    name: "camisa básica",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "calça jeans", price: 79.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário possui o email ${user.email}`);
    if (user.role) {
        console.log(`A role do usuário é: ${user.role}`);
    }
    else {
        console.log("o usuário possui role básica");
    }
}
const user1 = {
    email: "valentina@gmail.com",
    role: "Admin",
};
const user2 = {
    email: "vitoria@gmail.com",
};
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    name: "fusca",
    brand: "vw",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
console.log(coords);
coords.y = 15;
const matheus = {
    name: "Matheus",
    age: 30,
};
console.log(matheus);
const rodrigo = {
    name: "Rodrigo",
    age: 41,
    superPowers: ["invisible", "fast"],
};
console.log(rodrigo);
console.log(rodrigo.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "ShotGun",
    caliber: 12,
};
console.log(arnold);
//7 - readonly array
let myArray = ["maça", "laranja", "banana"];
//myArray[3] = "mamão";
console.log(myArray);
myArray.forEach((fruta) => {
    console.log("fruta: " + fruta);
});
myArray = myArray.map((fruta) => {
    return `fruta: ${fruta}`;
});
console.log(myArray);
//number
const myFiveNumberArray = [1, 2, 3, 4, 5];
//const myFiveNumberArray2: FiveNumbers = [1, 2, 3, 4, 5, 6];
console.log(myFiveNumberArray[4]);
//9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([15, 25]);
