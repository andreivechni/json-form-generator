import React from "react";

type NumberFieldProps = {
  name?: string;
};

const NumberField = ({ name }: NumberFieldProps) => {
  return <input name={name} type="number" />;
};

export default NumberField;
