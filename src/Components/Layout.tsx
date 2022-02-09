import React from "react";
import css from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className={css.root}>{children}</div>;
};

export default Layout;
