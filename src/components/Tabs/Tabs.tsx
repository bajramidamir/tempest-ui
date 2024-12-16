import { FC, ReactNode, useState } from "react";
import "./Tabs.css";

interface TabsProps {
  tabLabels: string[];
  tabs: ReactNode[];
}

const Tabs: FC<TabsProps> = ({ tabLabels, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs">
      <div className="tab-header-container">
        {tabLabels.map((label, index) => (
          <div
            key={index}
            className={`tab-header ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab]}</div>
    </div>
  );
};

export default Tabs;
