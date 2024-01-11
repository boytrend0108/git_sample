import { useContext } from "react";
import { Lang } from "../../types/Lang";
import { translate } from "../../utils/translate";
import { LangContext } from "../LangContext";

type Props = {
  lang: Lang,
};

export const HomePage: React.FC = () => {
  const {lang} = useContext(LangContext);

  return (
  <div className="HomePage">
    <HomePageTitle lang={lang} />
    <HomePageContent lang={lang} />
  </div>
)};

const HomePageTitle: React.FC<Props> = ({ lang }) => {
  return (
    <h1>{translate('homePage.title', lang)}</h1>
  );
};

const HomePageContent: React.FC<Props> = ({ lang }) => {
  return (
    <section>
      <p>{translate('homePage.content', lang)}</p>
    </section>
  );
}; 