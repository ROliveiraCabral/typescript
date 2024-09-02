//1 - exemplo decorator
function myDecorator() {
  console.log("iniciando Decorator!");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando Decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}

const myObj = new MyClass();
myObj.testing();

//2 - multiplos decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a");
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b");
  };
}

function c() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou c");
  };
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new MultipleDecorators();
multiple.testing();

//3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor);
  if (constructor === User) {
    console.log("Criando usuário");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const rodrigo = new User("Rodrigo");
console.log(rodrigo);

//4 - method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(true)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - acessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `O nome do monstro é: ${this.name}`;
  }

  @enumerable(true)
  get showAge() {
    return `A idade do monstro é: ${this.age}`;
  }
}

const charmander = new Monster("charmander", 10);
console.log(charmander);

// 6 - property decorator
//00001
function formatNumber() {
  return function (target: Object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = String(newVal).padStart(5, "0");
    };

    Object.defineProperty(target, propertKey, {
      get: getter,
      set: setter,
    });
  };
}

class Id {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new Id("1");
console.log(newItem);
console.log(newItem.id);

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook.createdAt);

// 8 - exemplo real com method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    //console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}
class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

newPost.post("Meu Terceiro post!", newPost.alreadyPosted);

// 9 - exemplo real com property decorator
function max(limit: number) {
  return function (target: Object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

const pedro = new Admin("pedroAdmin1234");
const lee = new Admin("lee");
console.log(lee);
