import { Lang } from "../../types/Lang";
import { HomePage } from "../HomePage/HomePage";

type Props = {
  lang: Lang,
}

export const Main: React.FC<Props> = ( {lang }) => {
  return (
    <main>
      <HomePage lang={lang} />
    </main>
  );
}