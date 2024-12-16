import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

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
  <Tooltip
    content="Hover me to see a bunch of cool and informative text that will help you navigate this wesbite!"
    position="right"
  >
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

export const TextTooltip = () => (
  <Tooltip content="This is a tooltip" position="bottom">
    <Text variant="h1" color="dark">
      Text
    </Text>
  </Tooltip>
);
