type Controls = {
  text: string;
};
type Fields = {
  type: string;
  name: string;
  label: string;
  checked?: boolean;
};

type DemoProps = {
  config: {
    header: string;
    fields: Fields[];
    controls: Controls[];
  };
};

type Config = {
  header: string;
  fields: Fields[];
  controls: Controls[];
};

export { type DemoProps, type Config };
