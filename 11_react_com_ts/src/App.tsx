import "./App.css";
// 4 - importando componente
import FirstComponent from "./components/first-component";
// 5 - Desestruturando props
import SecondComponent from "./components/second-conponent";
import Destructuring, { Category } from "./components/destructuring";
// 6 - usestate
import State from "./components/state";
import { createContext } from "react";
// 9 - utilizando contexto
import Context from "./components/context";

// 7 - type
type textOrNull = string | null;
type fixed = "ou isso" | "ou aquilo";

// 8 - Interface
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Rodrigo";
  const age: number = 41;
  const isWorking: boolean = true;

  //2 - funções
  function userGreeting(name: string): string {
    return `Olá, ${name}!`;
  }

  // 7 - type
  const myText: textOrNull = "tem algum texto aqui";
  const mySecondText: textOrNull = null;
  const testandoFixed: fixed = "ou isso";

  // 8 - context
  const contextalue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextalue}>
      <div>
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro Post"
          content="Algum conteúdo"
          comentQty={10}
          tags={["typescript", "javascript", "react"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo Post"
          content="outro conteúdo"
          comentQty={5}
          tags={["python"]}
          category={Category.PY}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {!mySecondText && <p>não Tem texto na variável</p>}
        <p>{testandoFixed}</p>
      </div>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
