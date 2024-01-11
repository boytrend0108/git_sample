import { Lang } from "../../types/Lang";
import { translate } from "../../utils/translate";

type Props = {
  lang: Lang,
}

export const HomePage: React.FC<Props> = ({ lang }) => (
  <div className="HomePage">
    <HomePageTitle lang={lang} />
    <HomePageContent lang={lang} />
  </div>
);

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