import Accordion from "../components/Accordion/Accordion";
import Text from "../components/Text/Text";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const Default = () => (
  <Accordion title="Default Accordion">
    <Text>Default accordion.</Text>
  </Accordion>
);

export const MultipleAccordions = () => (
  <div>
    <Accordion title="Accordion 1">
      <Text>Hey, some content here. Also some smaller content below!</Text>
      <Text variant="small">Some smaller content below!</Text>
    </Accordion>
    <Accordion title="Accordion 2" initialOpen={true}>
      <Text>This one is open already!</Text>
    </Accordion>
    <Accordion title="Accordion 3">
      <Text variant="h1">BIG TEXT HERE!</Text>
    </Accordion>
  </div>
);

export const PreExpanded = () => {
  return (
    <Accordion title="Pre-Expanded Accordion" initialOpen={true}>
      <Text>This accordion starts pre-expanded! Fancy.</Text>
    </Accordion>
  );
};
