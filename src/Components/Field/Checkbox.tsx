import React from "react";

type Props = {
  checked?: boolean;
};

const Checkbox = ({ checked = false }: Props) => {
  return <input checked={checked} type="checkbox" />;
};

export default Checkbox;
