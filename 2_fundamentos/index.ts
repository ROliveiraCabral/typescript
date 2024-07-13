//1 - numbers
let x: number = 10;
console.log(x);
x = 16;
console.log(typeof x);

const y: number = 15.584848;
console.log(y);
console.log(typeof y);

//2 - strings
const firstname: string = "Rodrigo";
console.log(firstname.toUpperCase());

let fullname: string;
const lastname: string = "Cabral";
fullname = firstname + " " + lastname;
console.log(fullname);
console.log(typeof fullname);

//3 - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);

//4 - inference e anotation
const ann: string = "teste";
let inf = "teste";

console.log("testando hot reload...")