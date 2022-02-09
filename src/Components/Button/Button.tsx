import React, { ReactNode } from "react";
import css from "./Button.module.scss";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
