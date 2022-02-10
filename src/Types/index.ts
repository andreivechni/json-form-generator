type Controls = {
  text: string;
};
type Items = {
  type: string;
  name: string;
  label: string;
  checked?: boolean;
};

type DemoProps = {
  config: {
    header: string;
    items: Items[];
    controls: Controls[];
  };
};

type Config = {
  header: string;
  items: Items[];
  controls: Controls[];
};

export { type DemoProps, type Config };
