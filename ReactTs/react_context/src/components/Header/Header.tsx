import { Lang } from "../../types/Lang";
import { LangSelector } from "../LangSelector/LangSelector";

type Props = {
  lang: Lang,
  setLang: (value: Lang) => void
}

export const Header: React.FC<Props>= ({ lang, setLang }) => {
  return (
    <header className="header">
      Mate academy

      <LangSelector value={lang} onChange={setLang}/>
    </header>
  )
}