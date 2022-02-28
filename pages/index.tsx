import style from "../styles/home.module.scss"

import { FormLogin } from "../components/organisms/FormLogin";
import { TextInfo } from "../components/molecules/TextInfo";

export default function Home() {
  return (
    <main className={style.main}>
      <TextInfo />
      <FormLogin />
    </main>
  );
}
