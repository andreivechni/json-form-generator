import React, { Children, ReactNode, useState } from "react";
import TabProps from "./Tab";
import cn from "classnames";
import css from "./Tabs.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type TabsProps = {
  children: ReactNode;
};

const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = Children.toArray(children);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const labels = tabs.map(({ props }: { props: TabProps }) => props.label);

  if (!tabs.length) return null;

  return (
    <div className={css.root}>
      <div className={css.tabList}>
        {labels.map((label, i) => (
          <div
            key={i}
            className={cn(css.label, { [css.activeTab]: i === activeIndex })}
            onClick={() => {
              setActiveIndex(i);
            }}
          >
            {label}
          </div>
        ))}
      </div>

      <div className={css.tabContainer}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeIndex}
            className={css.tabpanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 520,
              damping: 40,
            }}
          >
            {tabs[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
