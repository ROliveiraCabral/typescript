//1 - generics
function showDado<T>(arg: T): string {
  return `o dado é: ${arg};`;
}

console.log(showDado(5));
console.log(showDado("testando generic"));
console.log(showDado(true));
console.log(showDado(["teste"]));

//2 - constraint em generics
function showProductName<T extends { name: string }>(obj: T) {
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

//3 - generics com interface
interface MyObj<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObj<number, number, string>;
type Pen = MyObj<boolean, boolean, string>;

const myCar: Car = {
  name: "Fusca",
  wheels: 4,
  engine: 1.3,
  color: "branca",
};

const myPen: Pen = {
  name: "Bic",
  wheels: false,
  engine: false,
  color: "azul",
};

console.log(myCar);
console.log(myPen);

//4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));

//5 - keyof type operator
type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar = {
  name: "Vitória",
  age: 18,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));

//6 - typeof type operator
const userName: string = "Rodrigo";

const userName2: typeof userName = "Maria";

type X = typeof userName;

const userName4: X = "José";

//7 - indexed access type
type Truck = { km: number; kg: number; description: string };

type km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "caminhão para pouca carga",
};

function showKm(km: km) {
  console.log(`O caminhão possui ${km} km`);
}

showKm(newTruck.km);

const newCar = {
  km: 50000,
  kg: 3000
}

showKm(newCar.km);
