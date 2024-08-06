//1 - tipo de objeto para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$ ${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto encontra-se disponível em estoque");
  } else {
    console.log("O produto não está disponível em estoque");
  }
}

const shirt: Product = {
  name: "camisa básica",
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "calça jeans", price: 79.99, isAvailable: false });

//2 - propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário possui o email ${user.email}`);
  if (user.role) {
    console.log(`A role do usuário é: ${user.role}`);
  } else {
    console.log("o usuário possui role básica");
  }
}

const user1: User = {
  email: "valentina@gmail.com",
  role: "Admin",
};

const user2: User = {
  email: "vitoria@gmail.com",
};

showUserDetails(user1);
showUserDetails(user2);

//3 - readonly
interface Car {
  name: string;
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  name: "fusca",
  brand: "vw",
  wheels: 4,
};

console.log(fusca);
//fusca.wheels = 5;
