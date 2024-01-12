import { useContext } from "react";
import { Lang } from "../../types/Lang";
import { DispatchContext, StateContext } from "../State";


export const LangSelector: React.FC = () => {
  const {lang} = useContext(StateContext);
  const dispatch = useContext(DispatchContext)

  return (
    <select
      value={lang}
      onChange={event => {
        dispatch({type: 'setLang', payload: event.target.value as Lang});
      }}
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
};