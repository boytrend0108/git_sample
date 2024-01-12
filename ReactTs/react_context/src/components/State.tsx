import React, { useReducer } from "react";
import { Lang } from "../types/Lang";

type Action = {type: 'increase'}
            | {type: 'decrease'}
            | {type: 'add', payload: number}
            | {type: 'setLang', payload: Lang}

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

    case 'setLang':
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

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext((action: Action) => {});

type Props = {
  children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<Props> = ({children}) => {
  const [state , dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
