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
