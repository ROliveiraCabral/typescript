//1 - campos em classe
class User {
  name!: string;
  age!: number;
}

const rodrigo = new User();

rodrigo.name = "Rodrigo";

console.log(rodrigo);

//2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 8);
console.log(joao);
