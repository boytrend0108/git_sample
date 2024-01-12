import { useContext } from "react";
import { translate } from "../../utils/translate";
import { StateContext } from "../State";

export const Footer: React.FC = () => {
  const {lang} = useContext(StateContext);
  
  return (
    <footer>
      <p> {translate('footer.greating', lang)} </p>
    </footer>
  );
}