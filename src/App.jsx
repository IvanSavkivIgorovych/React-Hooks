import "./App.css";
import { Car } from "./components/useStateHook";
import { Timer } from "./components/useEffectHook";
import { Todo } from "./components/useReducerHook";

function App() {
  return (
    <>
      <Car />
      <Timer />
      <Todo />
    </>
  );
}

export default App;
