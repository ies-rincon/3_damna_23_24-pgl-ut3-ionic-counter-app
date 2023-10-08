import React, { useState } from "react";
import TabOneView from "./one.view";
import "./TabOne.css";

const TabOneContainer: React.FC = () => {
  const [clickCounter, setClickCounter] =
    useState<TabOneContainerState["clickCounter"]>(0);
  const handleRefresh = () => setClickCounter(0);
  const handleIncrement = () => setClickCounter(clickCounter + 1);
  const handleDecrement = () => {
    if (clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    }
  };
  const props = {
    clickCounter,
    handleRefresh,
    handleIncrement,
    handleDecrement,
  };
  return <TabOneView {...props} />;
};

export default TabOneContainer;
