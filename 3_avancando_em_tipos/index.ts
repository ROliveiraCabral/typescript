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
