import Dropdown from "../components/Dropdown/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const options = ["Option 1", "Option 2", "Option 3"];

export const Default = () => (
  <Dropdown
    label="Select an option"
    options={options}
    onSelect={(option) => alert(`Selected: ${option}`)}
  />
);
