import React from "react";
import { useField } from "./Field";

type RadioProps = {
  checked?: boolean;
};

const Radio = ({ checked }: RadioProps) => {
  const { name } = useField();

  return (
    <input name={name} checked={checked} type="radio" />
  );
};

export default Radio;
