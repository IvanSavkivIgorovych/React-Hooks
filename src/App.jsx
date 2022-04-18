import "./App.css";
import { Car } from "./components/useStateHook";
import { Timer } from "./components/useEffectHook";
import {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  ComponentFour,
  ComponentFive,
} from "./components/useContextHook";
import { Todo } from "./components/useReducerHook";
import { TodoCallBack } from "./components/useCallbackHook";
import { Memo } from "./components/useMemoHook";
import { RefHook } from "./components/useRefHook";

function App() {
  return (
    <>
      <Car />
      <Timer />
      <ComponentOne />
      <Todo />
      <TodoCallBack />
      <Memo />
      <RefHook />
    </>
  );
}

export default App;
