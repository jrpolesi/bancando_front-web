import style from "./styles.module.scss"

import { Button } from "../../atoms/Button";

export function TextInfo() {
  return (
    <div className={style.textInfo}>
      <h1>Você no controle do seu dinheiro</h1>
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a non
        veritatis illum, ullam corporis inventore nihil sunt eius asperiores
        incidunt
      </h3>
      <Button>Saiba mais</Button>
    </div>
  );
}
