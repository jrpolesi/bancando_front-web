import { InputHTMLAttributes } from "react";
import style from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <div className={style.form__input_wrapper}>
      <input id={name} {...rest} />
      <label htmlFor={name} >
        {label}
      </label>
    </div>
  );
}
