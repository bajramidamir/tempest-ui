import Input from "../components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => (
  <Input placeholder="Type something..." type="text" />
);
export const Disabled = () => (
  <Input placeholder="Disabled input" disabled type="text" />
);
export const WithValue = () => <Input value="Pre-filled value" type="text" />;
