import React from "react";
import css from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className={css.root}>{children}</div>;
};

export default Layout;
