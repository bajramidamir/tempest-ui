import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Top = () => (
  <div>
    <Tooltip content="This is a tooltip" position="top">
      <Button color="primary">Hover me</Button>
    </Tooltip>
  </div>
);

export const Right = () => (
  <Tooltip content="This is a tooltip" position="right">
    <Button color="primary">Hover me</Button>
  </Tooltip>
);

export const Bottom = () => (
  <Tooltip content="This is a tooltip" position="bottom">
    <Button color="primary">Hover me</Button>
  </Tooltip>
);

export const Left = () => (
  <Tooltip content="This is a tooltip" position="left">
    <Button color="primary">Hover me</Button>
  </Tooltip>
);
