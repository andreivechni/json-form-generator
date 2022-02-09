import React from "react";
import { useField } from "./Field";

type Props = {
  checked?: boolean;
};

const Radio = ({ checked }: Props) => {
  const { name } = useField();

  return (
    <input name={name} checked={checked} type="radio" />
  );
};

export default Radio;
