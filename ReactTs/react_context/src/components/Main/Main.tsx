import { useContext } from "react";
import { HomePage } from "../HomePage/HomePage";
import { DispatchContext, StateContext } from "../../State/State";

export const Main: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const {counter} = useContext(StateContext);

  return (
    <main>
      <HomePage />
      <button onClick={() => dispatch({type: 'increase'})}>+</button>
      <button onClick={() => dispatch({type: 'decrease'})}>-</button>
      <button onClick={() => dispatch({type: 'add', payload: 20})}>+20</button>
      {counter}
    </main>
  );
}