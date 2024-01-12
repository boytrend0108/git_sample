import { useContext } from "react";
import { translate } from "../../utils/translate";
import { StateContext } from "../State";

export const HomePage: React.FC = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
  </div>
);

const HomePageTitle: React.FC = () => {
  const {lang} = useContext(StateContext);

  return (
    <h1>{translate('homePage.title', lang)}</h1>
  );
};

const HomePageContent: React.FC = () => {
  const {lang} = useContext(StateContext);

  return (
    <section>
      <p>{translate('homePage.content', lang)}</p>
    </section>
  );
};