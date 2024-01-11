import { Lang } from "../../types/Lang";
import { translate } from "../../utils/translate";

type Props = {
  lang: Lang,
}
export const Footer: React.FC<Props> = ({lang}) => {
  return (
    <footer>
      <p> {translate('footer.greating', lang)} </p>
    </footer>
  );
}