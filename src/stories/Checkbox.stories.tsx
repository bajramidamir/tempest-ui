import { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";
import React from "react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        label="Accept Terms"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <Checkbox
        label="Disabled Checkbox"
        checked={false}
        onChange={() => {}}
        disabled
      />
    </>
  );
};
