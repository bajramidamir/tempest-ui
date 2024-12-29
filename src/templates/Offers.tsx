import React from "react";
// @ts-expect-error
import { Container, Card, Text, Button } from "tempest-ui";

const Offers: React.FC = () => {
  return (
    <Container layout="grid">
      <Card
        title="Starter"
        content={
          <>
            <Text variant="h3" centered>
              $4.99 a month
            </Text>
            <Text centered>Only the basics. What do you expect?</Text>
          </>
        }
        image="https://picsum.photos/1000"
        actions={
          <Container margin="0" padding="0" layout="centered">
            <Button color="primary" variant="text">
              Subscribe
            </Button>
          </Container>
        }
      />
      <Card
        title="Standard"
        content={
          <>
            <Text variant="h3" centered>
              $9.99 a month
            </Text>
            <Text centered>You get more options, hence the name.</Text>
          </>
        }
        image="https://picsum.photos/1000"
        actions={
          <Container margin="0" padding="0" layout="centered">
            <Button color="primary" variant="text">
              Subscribe
            </Button>
          </Container>
        }
      />
      <Card
        title="Deluxe"
        content={
          <>
            <Text variant="h3" centered>
              $19.99 a month
            </Text>
            <Text centered>You get everything our service offers!</Text>
          </>
        }
        image="https://picsum.photos/1000"
        actions={
          <Container margin="0" padding="0" layout="centered">
            <Button color="primary" variant="text">
              Subscribe
            </Button>
          </Container>
        }
      />
    </Container>
  );
};

export default Offers;
