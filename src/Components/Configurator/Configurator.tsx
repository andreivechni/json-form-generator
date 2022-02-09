import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import css from "./Configurator.module.scss";
import Field from "../Field";
import Button from "../Button";
import json5 from "json5";
import { motion, AnimatePresence } from "framer-motion";
import { Config } from "../../Types";

const ERROR_TIMEOUT = 7 * 1000;

type ConfiguratorProps = {
  setConfig: Dispatch<SetStateAction<Config | undefined>>;
};

const Configurator = ({ setConfig }: ConfiguratorProps) => {
  const [configInput, setConfigInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => setError(""), ERROR_TIMEOUT);
  }, [error]);

  const handleApply = () => {
    try {
      const parsed = json5.parse(configInput);
      setConfigInput(JSON.stringify(parsed, null, 2));
      setConfig(parsed);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={css.root}>
      <div className={css.inputContainer}>
        <Field
          value={configInput}
          onChange={setConfigInput}
          type="textarea"
          name="area"
          label="Configure your form"
        ></Field>
      </div>
      <div className={css.controls}>
        <AnimatePresence>
          {error && (
            <ErrorMessage>Seem not like a valid JSON for me...</ErrorMessage>
          )}
        </AnimatePresence>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};

type ErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={css.error}
    >
      {children}
    </motion.div>
  );
};

export default Configurator;
