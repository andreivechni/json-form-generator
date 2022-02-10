import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import css from "./Configurator.module.scss";
import Field from "../Field";
import Button from "../Button";
import json5 from "json5";
import { motion, AnimatePresence } from "framer-motion";
import { Config } from "../../Types";
import capitalize from "../../Utils/capitalize";
import validate from "../../Utils/validate";

const ERROR_TIMEOUT = 10 * 1000;

type ConfiguratorProps = {
  config: Config | undefined;
  setConfig: Dispatch<SetStateAction<Config | undefined>>;
};

const Configurator = ({ config, setConfig }: ConfiguratorProps) => {
  const stringifiedConfig = config ? JSON.stringify(config, null, 2) : "";
  const [configInput, setConfigInput] = useState(stringifiedConfig);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setError("");
      setSuccess("");
      return () => {
        clearTimeout(id);
      };
    }, ERROR_TIMEOUT);
  }, [error, success]);

  const handleApply = () => {
    try {
      const parsed: Config = json5.parse(configInput);
      validate(parsed);
      setConfigInput(JSON.stringify(parsed, null, 2));
      setConfig(parsed);
      setSuccess("Great, check out your result!");
    } catch (error) {
      if (error instanceof Error) {
        setError(capitalize(error.message));
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
          {error && !success && <ErrorMessage>{error}</ErrorMessage>}
          {success && !error && <SuccessMessage>{success}</SuccessMessage>}
        </AnimatePresence>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};

type MessageProps = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: MessageProps) => {
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

const SuccessMessage = ({ children }: MessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={css.success}
    >
      {children}
    </motion.div>
  );
};

export default Configurator;
