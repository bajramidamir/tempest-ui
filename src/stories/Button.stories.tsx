import Button from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" onClick={() => alert("Primary clicked!")}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
    Secondary
  </Button>
);
export const Success = () => (
  <Button variant="success" onClick={() => alert("Success clicked!")}>
    Success
  </Button>
);
export const Danger = () => (
  <Button variant="danger" onClick={() => alert("Danger clicked!")}>
    Danger
  </Button>
);
export const Disabled = () => <Button variant="disabled">Disabled</Button>;
