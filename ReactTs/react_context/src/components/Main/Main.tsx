import { useReducer } from "react";
import { Lang } from "../../types/Lang";
import { HomePage } from "../HomePage/HomePage";

type Props = {
  lang: Lang,
};

type Action = {type: 'increase'}
            | {type: 'decrease'}
            | {type: 'add', payload: number}
            | {type: 'lang', payload: Lang}

interface State {
  counter: number,
  lang: Lang,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        counter: state.counter + 1,
      }

    case 'decrease':
      return {
        ...state, 
        counter: state.counter - 1,
      }
    
    case 'add':
      return {
        ...state,
        counter: state.counter + action.payload,
      }

    case 'lang':
      return {
        ...state,
        lang: action.payload
      }
    
    default: 
      return state
  }
};


const initialState: State = {
  counter: 0,
  lang: Lang.EN,
}

export const Main: React.FC<Props> = ( { lang }) => {
  const [{counter}, dispatch] = useReducer(reducer, initialState);

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
      <HomePage lang={lang} />

      <button onClick={increase}>+</button>
        {counter}
      <button onClick={decrease}>-</button>
      <button onClick={add}>+10</button>
    </main>
  );
}