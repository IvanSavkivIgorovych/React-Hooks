import "./App.css";
import { Car } from "./components/useStateHook";
import { Timer } from "./components/useEffectHook";
import { Todo } from "./components/useReducerHook";
import { TodoCallBack } from "./components/useCallbackHook";
import { Memo } from "./components/useMemoHook";
import { RefHook } from "./components/useRefHook";

function App() {
  return (
    <>
      <Car />
      <Timer />
      <Todo />
      <TodoCallBack />
      <Memo />
      <RefHook />
    </>
  );
}

export default App;
