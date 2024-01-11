import { useState } from "react";
import { HomePage } from "../HomePage/HomePage";


export const Main: React.FC= () => {
  const [counter, setCounter] = useState(0);
   
  const increase = () => {
    setCounter(current => current + 1);
  }

  const decrease = () => {
    setCounter(current => current - 1);
  }
  return (
    <main>
      <HomePage />

      <button onClick={decrease}>-</button>
        {counter}
      <button onClick={increase}>+</button>
    </main>
  );
}