const firstName = "Rodrigo";
const anotherName = 1;
const x = true;

function greeting(name: string) {
    console.log("Olá " + name);
}

greeting(firstName);
//greeting(anotherName);
//greeting(x);

function sum(num1: number, num2: number){
    console.log("O resultado é: " + (num1 + num2));
}

sum(10, 20);