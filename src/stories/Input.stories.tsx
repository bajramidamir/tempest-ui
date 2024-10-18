import Input from "../components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => <Input placeholder="Type something..." />;
export const Disabled = () => <Input placeholder="Disabled input" disabled />;
export const WithValue = () => <Input value="Pre-filled value" />;
