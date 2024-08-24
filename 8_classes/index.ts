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

//3 - campo readonly
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("fusca");

console.log(fusca);
console.log(fusca.wheels);

//4 - herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("trator");
console.log(trator);

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("destroyer", 4);
console.log(destroyer);

//5 - métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey stranger!");
  }
}

const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
console.log(jimmy.name);
jimmy.greeting();

//6 - this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `caminhão do modelo ${this.model}, que possui ${this.hp} cavalos de potência`
    );
  }
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();

//7 - getter
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return console.log(this.name + " " + this.surname);
  }
}

const patricia = new Person("Patrícia", "Ally");
patricia.fullname;

//8 - setter
class Coords {
  x!: number;
  y!: number;

  set fillx(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;

    console.log("x inserido com sucesso");
  }

  set filly(y: number) {
    if (y === 0) {
      return;
    }
    this.y = y;

    console.log("y inserido com sucesso");
  }
}

const myCoords = new Coords();
myCoords.fillx = 10;
myCoords.filly = 5;

console.log(myCoords);