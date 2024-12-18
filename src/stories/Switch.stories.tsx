import Switch from "../components/Switch/Switch";
import { useState } from "react";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Default = () => {
  const [isOn, setIsOn] = useState(false);
  return <Switch checked={isOn} onChange={() => setIsOn(!isOn)} />;
};

export const Disabled = () => {
  return <Switch checked={true} onChange={() => {}} disabled />;
};
