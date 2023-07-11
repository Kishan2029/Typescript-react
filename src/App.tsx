import { FC } from "react";
import "./App.css";
import { Person } from "./componets/Person";

const App: FC = () => {
  const name: string = "Kevin";
  const getName = (name: string): number => {
    if (name == "Kevin") return 20;
    else return 10;
  };
  return (
    <div className="App">
      <div>Hello There</div>
      <Person age={10} email={"kishan@gmail.com"} name={"Kishan"} />
    </div>
  );
};

export default App;
