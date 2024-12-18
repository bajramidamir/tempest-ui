import Text from "../components/Text/Text";

export default {
  title: "Components/Text",
  component: Text,
};

export const Headings = () => (
  <>
    <Text variant="h1">Heading 1</Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text variant="h4">Heading 4</Text>
    <Text variant="h5">Heading 5</Text>
    <Text variant="h6">Heading 6</Text>
  </>
);

export const Paragraph = () => <Text>Paragraph text</Text>;

export const SmallText = () => <Text variant="small">Small text</Text>;

export const LineThroughText = () => (
  <Text variant="line-through">Strikethrough text</Text>
);

export const Colors = () => (
  <>
    <Text color="primary">Primary Text</Text>
    <Text color="secondary">Secondary Text</Text>
    <Text color="success">Success Text</Text>
    <Text color="danger">Danger Text</Text>
  </>
);
