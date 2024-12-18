import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import Icon from "../components/Icon/Icon";
import Avatar from "../components/Avatar/Avatar";

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
      <Button
        color="primary"
        variant="filled"
        endIcon={<Icon src="download.svg" />}
      >
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
    avatar=<Avatar fallbackText="JD" />
    avatarTitle="Jason Dason"
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

export const WithAvatar = () => (
  <Card
    avatar=<Avatar fallbackText="DB" />
    image="https://picsum.photos/1000"
    content={
      <>
        <Text variant="paragraph">Here is some sample text.</Text>
        <Text variant="small">Some small text, too.</Text>
      </>
    }
  />
);

export const FauxSocialMediaPost = () => (
  <Card
    avatar=<Avatar size="medium" fallbackText="MM" />
    avatarTitle="Mujo Mujic"
    title="My Day at [EVENT]"
    content={
      <>
        <Text variant="paragraph">
          It's a great honour to bla bla bla LinkedIn post{" "}
        </Text>
      </>
    }
    actions={
      <Button color="primary" variant="text">
        Like
      </Button>
    }
  />
);
