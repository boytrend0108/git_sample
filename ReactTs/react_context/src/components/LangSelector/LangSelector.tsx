import { useContext } from "react";
import { Lang } from "../../types/Lang";
import { StateContext } from "../../State/State";
import { DispatchContext } from "../../State/State";

export const LangSelector: React.FC = () => {
  const { lang } = useContext(StateContext);
  const dispatch = useContext(DispatchContext)
  console.log(lang)

  return (
    <select
      value={lang}
      onChange={event => {
        dispatch({
          type: 'setLang',
          payload: event.target.value as Lang
        });
      }}
    >
      <option value={Lang.UA}>Українська</option>
      <option value={Lang.EN}>English</option>
    </select>
  );
};