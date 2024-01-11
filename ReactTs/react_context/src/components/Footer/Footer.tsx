import { useContext } from "react";
import { translate } from "../../utils/translate";
import { LangContext } from "../LangContext";

type Props = {};

export const Footer: React.FC<Props> = () => {
  const {lang} = useContext(LangContext);

  return (
    <footer>
      <p> {translate('footer.greating', lang)} </p>
    </footer>
  );
}