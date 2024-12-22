import { useState } from "react";
import RadioButton from "../components/RadioButton/RadioButton";
import React from "react";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
};

export const Default = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <>
      <RadioButton
        label="Option 1"
        name="radioGroup"
        checked={selected === "option1"}
        onChange={() => setSelected("option1")}
      />
      <RadioButton
        label="Option 2"
        name="radioGroup"
        checked={selected === "option2"}
        onChange={() => setSelected("option2")}
      />
      <RadioButton
        label="Option 3"
        name="radioGroup"
        checked={selected === "option3"}
        onChange={() => setSelected("option3")}
      />
      <RadioButton
        label="Option 4"
        name="radioGroup"
        checked={false}
        disabled
        onChange={() => {}}
      />
    </>
  );
};
