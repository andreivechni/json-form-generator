import React from "react";
import { useField } from "./Field";
import css from "./TextArea.module.scss";

type Props = {};

const TextArea = (props: Props) => {
  const { fieldValue, onChange = () => {} } = useField();
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
