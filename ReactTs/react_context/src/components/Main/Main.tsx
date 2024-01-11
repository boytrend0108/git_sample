import { useReducer} from "react";
import { HomePage } from "../HomePage/HomePage";
import { Lang } from "../../types/Lang";

type Action  = {type: 'increase'}
             | {type: 'decrease'}
             | {type: 'add',  payload: number,}
             | {type: 'lang'}
 

interface State {
  value: number,
  lang: Lang,
}

function reducer(state: State, action: Action): State {
   switch (action.type) {
     case 'increase':
       return {
         ...state, 
         value: state.value + 1,
       }
     case 'decrease':
       return {
         ...state, 
         value: state.value - 1,
       };
     case 'add':
       return {
         ...state,
         value: state.value + action.payload,
       }
      case 'lang':
        return {
          ...state,
          lang: state.lang,
        }
     default: 
       return state;
   }
}

const initialState: State = {
  value: 0,
  lang: Lang.EN
}

export const Main: React.FC= () => {
  const [{value: counter}, dispatch] = useReducer(reducer, initialState);
   
  const increase = () => {
    dispatch({type: 'increase'});
  }

  const decrease = () => {
    dispatch({type: 'decrease'});
  };

  const add = () => {
    dispatch({type: 'add', payload: 10})
  }
  return (
    <main>
      <HomePage />

      <button onClick={decrease}>-</button>
        {counter}
      <button onClick={increase}>+</button>
      <button onClick={add}>+10</button>
    </main>
  );
}