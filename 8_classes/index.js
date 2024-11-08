"use strict";
//1 - campos em classe
class User {
}
const rodrigo = new User();
rodrigo.name = "Rodrigo";
console.log(rodrigo);
//2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 8);
console.log(joao);
//3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca);
console.log(fusca.wheels);
//4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("destroyer", 4);
console.log(destroyer);
//5 - métodos
class Dwarf {
    constructor(name) {
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
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`caminhão do modelo ${this.model}, que possui ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
//7 - getter
class Person {
    constructor(name, surname) {
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
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserido com sucesso");
    }
    set filly(y) {
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
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World!");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
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
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
class D extends C {
}
const dInstance = new D();
console.log(dInstance.x);
//12 - protected
class E {
    constructor() {
        this.x = 100;
    }
    protectedMethod() {
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
    constructor() {
        this.name = "private";
    }
    get getName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name); erro só pode ser acessada via método ou um getter se implementado;
console.log(pObj.getName);
//14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático!");
    }
}
StaticMembers.prop = "Teste estático";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//15 - generic class
class Item {
    constructor(first, second) {
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
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
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
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
//18 - abstract class
class AbstractClass {
}
class AbstractExemplo extends AbstractClass {
    constructor(name) {
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
}
class Cat {
}
const doguinho = new Cat();
console.log(typeof doguinho);
console.log(doguinho);
