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

//4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

console.log(coords);

coords.y = 15;

//coords.z = "teste";

//5 - extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[];
}

const matheus: Human = {
  name: "Matheus",
  age: 30,
};

console.log(matheus);

const rodrigo: SuperHuman = {
  name: "Rodrigo",
  age: 41,
  superPowers: ["invisible", "fast"],
};

console.log(rodrigo);
console.log(rodrigo.superPowers[1]);

//6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "ShotGun",
  caliber: 12,
};

console.log(arnold);

//7 - readonly array
let myArray: ReadonlyArray<string> = ["maça", "laranja", "banana"];
//myArray[3] = "mamão";

console.log(myArray);

myArray.forEach((fruta) => {
  console.log("fruta: " + fruta);
});

myArray = myArray.map((fruta) => {
  return `fruta: ${fruta}`;
});

console.log(myArray);

//8 - tuplas
type FiveNumbers = [number, number, number, number, number];

//number
const myFiveNumberArray: FiveNumbers = [1, 2, 3, 4, 5];
//const myFiveNumberArray2: FiveNumbers = [1, 2, 3, 4, 5, 6];

console.log(myFiveNumberArray[4]);

//9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([15, 25]);
