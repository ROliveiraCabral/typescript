//1 - arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

const nomes: string[] = ["Rodrigo", "Patrícia"];

for (let index = 0; index < nomes.length; index++) {
  console.log(nomes[index]);
}

nomes.push("Valentina");

nomes.forEach((nome) => {
  console.log(nome);
});

nomes.push("João", "Vitória");

for (const nome of nomes) {
  console.log(nome);
}

//2 - outra sintaxe array
const nums: Array<number> = [100, 200, 300];
console.log(nums);

nums.push(400);
console.log(nums);

//3 - any
const arr1: any[] = [1, "teste", [], true, 2.5, ["João"], { nome: "Arthur" }];
console.log(arr1);

arr1.push([100, 75, 50, 25]);
console.log(arr1);

//4 - parametros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(10, 15);

//5 - retorno de função
function greeting(name: string): string {
  //return 5;
  return `Olá ${name}`;
}

console.log(greeting("Patrícia"));

//6 - funções anônimas
setTimeout(function () {
  const sallary: number = 1000;
  //console.log(parseFloat(sallary));
  //console.log(sallary);
}, 2000);

//7 - tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("Coordinate x = " + coord.x);
  console.log("Coordinate y = " + coord.y);
}

const objCoord = { x: 100, y: 50.5 };
passCoordinates(objCoord);

//8 - props opcionais
function showNumber(num1: number, num2: number, num3?: number) {
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  if (num3) {
    console.log("existe num3: " + num3);
  }
}

showNumber(10, 20, 30);
showNumber(15, 25);

//9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${ lastName}, tudo bem?`;
  }

  return `Olá ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Valentina", "Ally"));
console.log(advancedGreeting("Vitória"));
