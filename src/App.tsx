import { useState } from "react";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RadioButton from "./components/RadioButton/RadioButton";
import Select from "./components/Select/Select";

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState("Radio One");
  const [selectedSelect, setSelectedSelect] = useState("option1");

  const radioOptions = [
    { value: "Radio One", label: "Radio Button 1" },
    { value: "Radio Two", label: "Radio Button 2" },
  ];

  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Text variant="h1">Welcome to My App</Text>
      <Text variant="paragraph">This is a simple paragraph example.</Text>
      <Button variant="primary" onClick={() => alert("Button clicked!")}>
        Click Me
      </Button>
      <br />
      <Text variant="small">Small text for additional info.</Text>
      <br />
      <Input placeholder="An input field" />
      <br />
      {radioOptions.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          name="radio"
          checked={selectedRadio === option.value}
          onChange={() => setSelectedRadio(option.value)}
        />
      ))}
      <br />
      <Select
        label="Choose your favourite option"
        options={selectOptions}
        selectedValue={selectedSelect}
        onChange={setSelectedSelect}
      />
    </div>
  );
};

export default App;
