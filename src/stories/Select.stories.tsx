import { useState } from "react";
import Select from "../components/Select/Select";
import React from "react";

export default {
  title: "Components/Select",
  component: Select,
};

export const Default = () => {
  const [selected, setSelected] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Select
      label="Choose an option"
      options={options}
      selectedValue={selected}
      onChange={setSelected}
      color="primary"
    />
  );
};

export const WithDisabledOptions = () => {
  const [selected, setSelected] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Select
      label="Choose an option"
      options={options}
      selectedValue={selected}
      onChange={setSelected}
      color="neutral"
    />
  );
};
