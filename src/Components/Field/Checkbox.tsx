import React from "react";

type CheckboxProps = {
  checked?: boolean;
};

const Checkbox = ({ checked = false }: CheckboxProps) => {
  return <input checked={checked} type="checkbox" />;
};

export default Checkbox;
