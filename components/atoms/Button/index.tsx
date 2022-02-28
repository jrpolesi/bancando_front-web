import style from "./styles.module.scss"

import { ButtonHTMLAttributes } from "react";

export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={style.button} {...rest}>{children}</button>;
}
