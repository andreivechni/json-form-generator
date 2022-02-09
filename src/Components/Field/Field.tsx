import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import NumberField from "./NumberField";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import DateField from "./DateField";
import Radio from "./Radio";
import css from "./Field.module.scss";
import cn from "classnames";

const FieldTypes = {
  NUMBER: "number",
  TEXT: "text",
  TEXT_AREA: "textarea",
  CHECKBOX: "checkbox",
  DATE: "date",
  RADIO: "radio",
};

type FieldProps = {
  type: string;
  label?: string;
  name: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  checked?: boolean;
};

type ContextProps = {
  fieldValue?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  name?: string;
};

const FieldContext = createContext<ContextProps>({
  onChange: () => {},
});

const Field = ({
  type,
  label,
  name,
  onChange,
  checked,
  value: fieldValue,
}: FieldProps) => {
  return (
    <div
      className={cn(css.root, {
        [css.checkbox]: type === "checkbox",
        [css.radio]: type === "radio",
      })}
    >
      <FieldContext.Provider
        value={{ fieldValue: fieldValue, onChange: onChange, name: name }}
      >
        {label && (
          <label className={css.label} htmlFor={name}>
            {label}
          </label>
        )}
        {type === FieldTypes.TEXT && <TextField></TextField>}
        {type === FieldTypes.NUMBER && <NumberField></NumberField>}
        {type === FieldTypes.TEXT_AREA && <TextArea></TextArea>}
        {type === FieldTypes.CHECKBOX && (
          <Checkbox checked={checked}></Checkbox>
        )}
        {type === FieldTypes.DATE && <DateField></DateField>}
        {type === FieldTypes.RADIO && <Radio checked={checked}></Radio>}
      </FieldContext.Provider>
    </div>
  );
};

const useField = () => {
  return useContext(FieldContext);
};

export default Field;
export { useField };
