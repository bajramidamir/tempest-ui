import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import React from "react";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const centerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

export const Top = () => (
  <div style={centerStyle}>
    <Tooltip content="This is a tooltip" position="top">
      <Button color="primary">Hover me</Button>
    </Tooltip>
  </div>
);

export const Right = () => (
  <div style={centerStyle}>
    <Tooltip
      content="Hover me to see a bunch of cool and informative text that will help you navigate this website!"
      position="right"
    >
      <Button color="primary">Hover me</Button>
    </Tooltip>
  </div>
);

export const Bottom = () => (
  <div style={centerStyle}>
    <Tooltip content="This is a tooltip" position="bottom">
      <Button color="primary">Hover me</Button>
    </Tooltip>
  </div>
);

export const Left = () => (
  <div style={centerStyle}>
    <Tooltip content="This is a tooltip" position="left">
      <Button color="primary">Hover me</Button>
    </Tooltip>
  </div>
);

export const TextTooltip = () => (
  <div style={centerStyle}>
    <Tooltip content="This is a tooltip" position="bottom">
      <Text variant="h1" color="dark">
        Text
      </Text>
    </Tooltip>
  </div>
);
