import React from "react";

type TextFieldProps = {
  name?: string;
  onChange?: () => void;
};

const TextField = ({ name, onChange }: TextFieldProps) => {
  return <input type="text" />;
};

export default TextField;
