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
//fusca.wheels = 5;
