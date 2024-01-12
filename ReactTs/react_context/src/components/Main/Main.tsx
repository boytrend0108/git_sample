import { useContext } from "react";
import { HomePage } from "../HomePage/HomePage";
import { DispatchContext, StateContext } from "../State";


export const Main: React.FC = () => {
  const dispatch = useContext(DispatchContext)
  const {counter} = useContext(StateContext)

  const decrease = () => {
    dispatch({type: 'decrease'})
  }

  const increase = () => {
    dispatch({type: 'increase'})
  }

  const add = () => {
    dispatch({type: 'add', payload: 10 })
  }

  return (
    <main>
      <HomePage />

      <button onClick={increase}>+</button>
        {counter}
      <button onClick={decrease}>-</button>
      <button onClick={add}>+10</button>
    </main>
  );
}