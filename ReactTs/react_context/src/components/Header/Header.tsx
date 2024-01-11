import { LangSelector } from "../LangSelector/LangSelector";

type Props = {};

export const Header: React.FC<Props>= () => {
  return (
    <header className="header">
      Mate academy

      <LangSelector />
    </header>
  )
}