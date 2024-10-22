import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => (
  <Card
    image="https://picsum.photos/1000"
    title="Card Title"
    content={<Text variant="paragraph">This is some card content.</Text>}
    actions={
      <Button color="primary" variant="text">
        Action
      </Button>
    }
  />
);

export const WithoutImage = () => (
  <Card
    title="Card Title Without Image"
    content={
      <Text variant="paragraph">
        This card has no image but still has content.
      </Text>
    }
    actions={
      <Button color="primary" variant="filled">
        Action
      </Button>
    }
  />
);

export const WithoutTitle = () => (
  <Card
    image="https://via.placeholder.com/150"
    content={
      <Text variant="paragraph">
        This card has no title but includes an image and content.
      </Text>
    }
    actions={
      <Button color="primary" variant="filled">
        Action
      </Button>
    }
  />
);

export const WithoutActions = () => (
  <Card
    image="https://via.placeholder.com/150"
    title="Card Title Without Actions"
    content={
      <Text variant="paragraph">This card has no actions, just content.</Text>
    }
  />
);

export const FullCard = () => (
  <Card
    image="https://via.placeholder.com/150"
    title="Full Card Example"
    content={
      <>
        <Text variant="paragraph">This card includes all elements.</Text>
        <Text variant="small">It can contain rich content.</Text>
      </>
    }
    actions={
      <>
        <Button color="primary" variant="filled">
          Action 1
        </Button>
        <Button color="neutral" variant="outlined">
          Action 2
        </Button>
      </>
    }
  />
);
