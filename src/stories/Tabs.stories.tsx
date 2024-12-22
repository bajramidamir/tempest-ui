import Tabs from "../components/Tabs/Tabs";
import React from "react";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const DefaultTabs = () => {
  const tabLabels = ["Tab 1", "Tab 2", "Tab 3"];
  const tabs = [
    <div>This is the content of Tab 1</div>,
    <div>This is the content of Tab 2</div>,
    <div>This is the content of Tab 33333333333333333333333333333333333</div>,
  ];

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <Tabs tabLabels={tabLabels} tabs={tabs} />
    </div>
  );
};
