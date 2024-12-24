import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
};

export const Buttons = () => (
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
    <div>
      <h3>Neutral Buttons</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <Button
          color="neutral"
          variant="filled"
          onClick={() => alert("Neutral clicked!")}
        >
          Neutral
        </Button>
        <Button radius="pill" variant="text">
          <Icon src="trash.svg" />
        </Button>
        <Button
          color="neutral"
          variant="outlined"
          onClick={() => alert("Neutral clicked!")}
          startIcon={<Icon src="trash.svg" alt="Icon" />}
        >
          Neutral
        </Button>
        <Button
          color="neutral"
          variant="outlined"
          onClick={() => alert("Neutral clicked!")}
        >
          Neutral
        </Button>
        <Button radius="rounded">Neutral</Button>
        <Button radius="pill">Neutral</Button>
        <Button variant="text" color="neutral">
          Neutral
        </Button>
      </div>
    </div>

    <div>
      <h3>Primary Buttons</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <Button
          color="primary"
          variant="filled"
          onClick={() => alert("Primary clicked!")}
        >
          Primary
        </Button>
        <Button
          color="primary"
          radius="rounded"
          endIcon={<Icon src="download.svg" />}
        >
          Primary
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => alert("Primary clicked!")}
        >
          Primary
        </Button>
        <Button
          color="primary"
          variant="filled"
          radius="rounded"
          onClick={() => alert("Primary clicked!")}
        >
          Primary
        </Button>
        <Button
          color="primary"
          variant="filled"
          radius="pill"
          onClick={() => alert("Primary clicked!")}
        >
          Primary
        </Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
      </div>
    </div>

    <div>
      <h3>Disabled Button</h3>
      <Button variant="disabled">Disabled</Button>
    </div>
  </div>
);
