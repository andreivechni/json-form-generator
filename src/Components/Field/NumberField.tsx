import React from "react";

type Props = {
  name?: string;
};

const NumberField = ({ name }: Props) => {
  return <input name={name} type="number" />;
};

export default NumberField;
