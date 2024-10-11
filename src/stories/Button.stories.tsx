import Button from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <div>
    <Button
      color="primary"
      variant="filled"
      onClick={() => alert("Primary clicked!")}
    >
      Primary
    </Button>
    <Button
      color="primary"
      variant="outlined"
      radius="rounded"
      onClick={() => alert("Outlined clicked!")}
    >
      Outlined
    </Button>
  </div>
);
export const Secondary = () => (
  <div>
    <Button
      color="secondary"
      variant="filled"
      onClick={() => alert("Secondary clicked!")}
    >
      Secondary
    </Button>
    <Button
      color="secondary"
      variant="outlined"
      radius="pill"
      onClick={() => alert("Secondary clicked!")}
    >
      Secondary
    </Button>
  </div>
);
export const Success = () => (
  <div>
    <Button
      color="success"
      variant="filled"
      onClick={() => alert("Success clicked!")}
    >
      Success
    </Button>
    <Button
      color="success"
      variant="outlined"
      onClick={() => alert("Success clicked!")}
    >
      Success
    </Button>
  </div>
);
export const Danger = () => (
  <div>
    <Button
      color="danger"
      variant="filled"
      onClick={() => alert("Danger clicked!")}
    >
      Danger
    </Button>
    <Button
      color="danger"
      variant="outlined"
      onClick={() => alert("Danger clicked!")}
    >
      Danger
    </Button>
  </div>
);
export const Disabled = () => <Button variant="disabled">Disabled</Button>;
