import { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./componets/Person";

interface AppContextInterface {
  name: string;
  age: number;
  email: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const name: string = "Kevin";
  const getName = (name: string): number => {
    if (name == "Kevin") return 20;
    else return 10;
  };

  const contextValue = {
    name: "Kishan",
    age: 20,
    email: "kishan@gmail.com",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <div>Hello There</div>
        <Person
          age={10}
          email={"kishan@gmail.com"}
          name={"Kishan"}
          hairColor={HairColor.Black}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
