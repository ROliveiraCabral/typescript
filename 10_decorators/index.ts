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
