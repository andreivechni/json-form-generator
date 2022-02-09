import React, { ReactNode } from "react";

type TabProps = {
  label: ReactNode;
  children: ReactNode;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
export type { TabProps };
