import { useContext } from "react";
import { translate } from "../../utils/translate";
import { LangContext } from "../LangContext";

export const Footer: React.FC = () => {
  const {lang} = useContext(LangContext);
  
  return (
    <footer>
      <p> {translate('footer.greating', lang)} </p>
    </footer>
  );
}