import React from "react";
// @ts-expect-error
import { Text, Container, Link, Button } from "tempest-ui";

const FourOhFour: React.FC = () => {
  return (
    <Container layout="centered">
      <Text variant="extra-large">
        <span style={{ color: "var(--color-primary)" }}>404</span>
      </Text>
      <Text variant="extra-large">
        Hey, we've looked{" "}
        <span style={{ color: "var(--color-primary)" }}>everywhere</span> and we
        could not find this page.
      </Text>
      <Text>Why not try going back?</Text>
      <Container layout="centered" margin="0" padding="0">
        <Link href="#">
          <Button variant="text" color="primary">
            Take me back!
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default FourOhFour;
