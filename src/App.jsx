import "./App.css";
import { Car } from "./components/useStateHook";
import { Timer } from "./components/useEffectHook";
import { Todo } from "./components/useReducerHook";
import { TodoCallBack } from "./components/useCallbackHook";

function App() {
  return (
    <>
      <Car />
      <Timer />
      <Todo />
      <TodoCallBack />
    </>
  );
}

export default App;
