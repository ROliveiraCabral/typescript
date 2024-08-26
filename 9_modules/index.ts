//1 - importação de arquivos
import importGreet from "./greet";
importGreet();

//2 - import de variável
import { x } from "./variable";
console.log(x);

//3 - multiplas importações
import { a, b, myFunction } from "./multiple";
console.log(a);
console.log(b);
myFunction();

//4 - alias
import { someName as name } from "./changeName";
console.log(name);

//5 - import all
import * as myNumbers from "./numbers";
console.log(myNumbers);

const num = myNumbers.n1;
console.log(num);

myNumbers.showNumber();

//6 - importando tipos
import { Human } from "./myType";
class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("João", 8);
console.log(user);
console.log(`o usuário ${user.name} possui ${user.age} anos`);
