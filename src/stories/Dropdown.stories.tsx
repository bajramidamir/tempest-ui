import Dropdown from "../components/Dropdown/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const options = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

export const Default = () => (
  <Dropdown
    label="Select an option"
    options={options}
    onSelect={(selected) => console.log("Selected option:", selected)}
  />
);

export const MultiSelect = () => (
  <Dropdown
    label="Select multiple options"
    options={options}
    onSelect={(selected) => console.log("Selected options:", selected)}
    isMultiSelect={true}
  />
);

export const WithSearch = () => (
  <Dropdown
    label="Search and select"
    options={options}
    onSelect={(selected) => console.log("Selected options:", selected)}
    isSearchable={true}
  />
);

export const EmptyState = () => (
  <Dropdown
    label="No options available"
    options={[]}
    onSelect={(selected) => console.log("Selected options:", selected)}
  />
);

export const MultiAndSearch = () => (
  <Dropdown
    label="Multi choice and search"
    options={options}
    isMultiSelect
    isSearchable
    onSelect={(selected) => console.log("Selected options: ", selected)}
  />
);
