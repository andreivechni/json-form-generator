import React from "react";
import Field from "../Field";
import css from "./Demo.module.scss";
import Button from "../Button";
import { DemoProps } from "../../Types";
import { capitalize } from "../../Utils/capitalize";

const Demo = ({ config }: DemoProps) => {
  return (
    <div className={css.root}>
      {config.header && <div className={css.header}>{config.header}</div>}
      <form className={css.form}>
        {config.fields.map((field) => {
          return (
            <Field
              checked={field.checked}
              type={field.type}
              name={field.name}
              label={capitalize(field.label)}
            ></Field>
          );
        })}
      </form>

      <div className={css.controls}>
        {config.controls.map((control) => (
          <Button>{control.text}</Button>
        ))}
      </div>
    </div>
  );
};

export default Demo;
