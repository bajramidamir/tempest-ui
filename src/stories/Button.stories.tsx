import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";

export default {
  title: "Components/Button",
  component: Button,
};

export const Buttons = () => (
  <div>
    <Button
      color="neutral"
      variant="filled"
      onClick={() => alert("Neutral clicked!")}
    >
      Neutral
    </Button>

    <br />
    <br />

    <Button radius="pill" variant="outlined">
      {" "}
      <Icon src="trash.svg" />{" "}
    </Button>

    <br />
    <br />

    <Button
      color="neutral"
      variant="outlined"
      onClick={() => alert("Neutral clicked!")}
      startIcon={<Icon src="trash.svg" alt="Icon" />}
    >
      Neutral
    </Button>

    <br />
    <br />

    <Button
      color="neutral"
      variant="outlined"
      onClick={() => alert("Neutral clicked!")}
    >
      Neutral
    </Button>

    <br />
    <br />

    <Button radius="rounded">Neutral</Button>

    <br />
    <br />

    <Button radius="pill">Neutral</Button>

    <br />
    <br />

    <Button variant="text" color="neutral">
      Neutral
    </Button>

    <br />
    <br />

    <Button
      color="primary"
      variant="filled"
      onClick={() => alert("Primary clicked!")}
    >
      Primary
    </Button>

    <br />
    <br />

    <Button
      color="primary"
      radius="rounded"
      endIcon={<Icon src="download.svg" />}
    >
      Primary
    </Button>

    <br />
    <br />

    <Button
      color="primary"
      variant="outlined"
      onClick={() => alert("Primary clicked!")}
    >
      Primary
    </Button>

    <br />
    <br />

    <Button
      color="primary"
      variant="filled"
      radius="rounded"
      onClick={() => alert("Primary clicked!")}
    >
      Primary
    </Button>

    <br />
    <br />

    <Button
      color="primary"
      variant="filled"
      radius="pill"
      onClick={() => alert("Primary clicked!")}
    >
      Primary
    </Button>

    <br />
    <br />

    <Button variant="text" color="primary">
      Primary
    </Button>

    <br />
    <br />

    <Button variant="disabled">Disabled</Button>
  </div>
);
