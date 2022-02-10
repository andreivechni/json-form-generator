import Ajv from "ajv";
import { Config } from "../Types";
const ajv = new Ajv();

const ConfigSchema = {
  type: "object",
  properties: {
    header: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          label: { type: "string" },
          type: { type: "string" },
          checked: { type: "boolean" },
        },
        required: ["type", "name"],
      },
    },
    controls: {
      type: "array",
      items: {
        type: "object",
        properties: {
          text: { type: "string" },
        },
        required: ["text"],
      },
    },
  },
  required: ["header", "items", "controls"],
  additionalProperties: false,
};

const validate = (config: Config) => {
  const validate = ajv.compile(ConfigSchema);
  const valid = validate(config);

  if (!valid) {
    throw new Error(validate.errors?.[0].message);
  }
};

export default validate;
