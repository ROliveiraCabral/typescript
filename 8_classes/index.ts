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

//9 - implements
interface ShowTitle {
  itemTitle(): string;
}

class BlogPost implements ShowTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }
  itemTitle(): string {
    return `O título do post é ${this.title}`;
  }
}

const myPost = new BlogPost("Hello World!");

console.log(myPost.itemTitle());

class TestingInterface implements ShowTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }
  itemTitle(): string {
    return `O título é ${this.title}`;
  }
}

const test = new TestingInterface("Hi, I'm here with you!");
console.log(test.itemTitle());

//10 - override de métodos
class Base {
  someMethod() {
    console.log("alguma coisa");
  }
}

const myObject = new Base();

console.log(myObject.someMethod());

class Nova extends Base {
  someMethod() {
    console.log("testando uma outra coisa");
  }
}

const myNewObject = new Nova();

console.log(myNewObject.someMethod());

//11 - public
class C {
  public x = 10;
}

const cInstance = new C();
console.log(cInstance.x);

class D extends C {}

const dInstance = new D();
console.log(dInstance.x);

//12 - protected
class E {
  protected x = 100;

  protected protectedMethod() {
    console.log("método protegido");
  }
}

class F extends E {
  showx() {
    console.log(this.x);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();
//console.log(fInstance.x); erro só pode ser acessada via método;
fInstance.showx();

//fInstance.protectedMethod(); erro só pode ser acessada via método;
fInstance.showProtectedMethod();

//13 - private
class PrivateClass {
  private name = "private";

  get getName() {
    return this.name;
  }
}

const pObj = new PrivateClass();
//console.log(pObj.name); erro só pode ser acessada via método ou um getter se implementado;
console.log(pObj.getName);

//14 - static members
class StaticMembers {
  static prop = "Teste estático";

  static staticMethod() {
    console.log("Este é um método estático!");
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

//15 - generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirstItem() {
    return `O resultado de first item é ${this.first}`;
  }

  get showSecondItem() {
    return `o resultado de second item é ${this.second}`;
  }
}

const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirstItem);
console.log(typeof newItem.showFirstItem);

const otherItem = new Item(5, true);
console.log(otherItem.showFirstItem);
console.log(typeof otherItem.first);
console.log(otherItem.showSecondItem);
console.log(typeof otherItem.second);

//16 - parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Quantidade total = ${this.qty}`;
  }

  get showPrice() {
    return `Valor unitário = R$ ${this.price}`;
  }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

//17 class expressions
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);

//18 - abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExemplo extends AbstractClass {
  name;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é ${this.name}`);
  }
}

const newAbstractObj = new AbstractExemplo("Valquíria");
newAbstractObj.showName();

//19 - relações entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();
console.log(typeof doguinho);
console.log(doguinho);
