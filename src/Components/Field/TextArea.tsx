import React from "react";
import { useField } from "./Field";
import css from "./TextArea.module.scss";

const TextArea = () => {
  const {
    fieldValue,
    onChange = () => {
      return;
    },
  } = useField();
  return (
    <textarea
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className={css.textarea}
      value={fieldValue}
    />
  );
};

export default TextArea;
