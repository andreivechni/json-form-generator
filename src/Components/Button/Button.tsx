import React, { ReactNode } from "react";
import css from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
