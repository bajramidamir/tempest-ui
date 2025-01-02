import React from "react";
import {
  Navbar,
  Button,
  Text,
  Link,
  Card,
  Container,
  Spacer,
  Image,
  Avatar,
  Badge,
  // @ts-expect-error
} from "tempest-ui";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar
        title="tempest-ui"
        actions={
          <>
            <Link href="">
              <Button color="primary" radius="rounded">
                Link 1
              </Button>
            </Link>
            <Link href="">
              <Button color="primary" radius="rounded">
                Link 2
              </Button>
            </Link>
            <Link href="">
              <Badge color="error" content={5}>
                <Button color="primary" radius="rounded">
                  Inbox
                </Button>
              </Badge>
            </Link>
          </>
        }
      />

      <Spacer space={64} />

      <Container layout="centered">
        <Container margin="0" padding="0" layout="grid">
          <Container layout="centered">
            <Text variant="extra-large">
              Showcase your app with elegant and powerful simplicity
              <span style={{ color: "var(--color-primary)" }}>.</span>{" "}
            </Text>
            <Text>
              Build your perfect landing page using{" "}
              <span style={{ color: "var(--color-primary)" }}>tempest-ui</span>{" "}
              and worry less about code. We've got it covered.
            </Text>
            <Button color="primary" radius="rounded">
              Button
            </Button>
          </Container>
          <Image
            src="https://picsum.photos/1000"
            alt="alt text"
            radius="rounded"
          />
        </Container>
      </Container>

      <Spacer space={128} />

      <Container
        layout="grid"
        padding="2rem"
        maxWidth="100%"
        bgColor="var(--color-primary-light)"
      >
        <Image
          width={500}
          height={500}
          objectFit="contain"
          alt="alt"
          radius="rounded"
          src="https://picsum.photos/1000"
        />
        <Container padding="0" layout="centered" margin="0">
          <Text variant="h1" color="light">
            Your business will grow with us.
          </Text>
          <Text color="light">
            We promise. We guarantee. We are the greatest. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Culpa odio porro officiis
            distinctio praesentium illo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium recusandae quidem dignissimos, dicta
            assumenda tempora repellendus minima delectus molestias consequatur
            sunt animi perferendis voluptate laudantium!
          </Text>
          <Button color="primary" radius="rounded">
            Button
          </Button>
        </Container>
      </Container>

      <Spacer space={128} />

      <Container layout="centered">
        <Text variant="extra-large">
          Don't believe us? See what other people think.
        </Text>

        <Spacer space={64} />

        <Container margin="0" padding="0" layout="grid">
          <Card
            avatar={
              <Avatar
                fallbackText="JD"
                src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Kimberly&radius=50"
              />
            }
            avatarTitle="Jason Downes"
            title="I was instantly impressed"
            content={<Text>Terrific product</Text>}
          />
          <Card
            avatar={
              <Avatar
                fallbackText="DT"
                src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Ryan&radius=50"
              />
            }
            avatarTitle="David Taylor"
            title="Underrated"
            content={
              <Text>
                I simply cannot believe how well made this thing is! Wowza!
              </Text>
            }
          />
          <Card
            avatar={
              <Avatar
                fallbackText="LB"
                src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Leah&radius=50"
              />
            }
            avatarTitle="Leonard Blanc"
            title="Love the ease of use!"
            content={<Text>This works so well and is so easy.</Text>}
          />
        </Container>

        <Spacer space={256} />
      </Container>

      <Container
        layout="centered"
        margin="0"
        bgColor="var(--color-light)"
        padding="0"
        maxWidth="100%"
      >
        <Container maxWidth="100%" padding="2rem" layout="grid">
          <Container>
            <Text variant="h2">
              <Link href="">Company</Link>
            </Text>
            <Text variant="h3">
              <Link href="">About us</Link>
            </Text>
            <Text variant="h3">
              <Link href="">Careers</Link>
            </Text>
          </Container>
          <Container margin="0">
            <Text variant="h2">
              <Link href="">Product</Link>
            </Text>
            <Text variant="h3">
              <Link href="">Employee database</Link>
            </Text>
            <Text variant="h3">
              <Link href="">Recruiting</Link>
            </Text>
          </Container>
          <Container margin="0">
            <Text variant="h2">
              <Link href="">Information</Link>
            </Text>
            <Text variant="h3">
              <Link href="">FAQ</Link>
            </Text>
            <Text variant="h3">
              <Link href="">Support</Link>
            </Text>
          </Container>
        </Container>
        <Text variant="h1" color="primary">
          tempest-ui
        </Text>
      </Container>
    </>
  );
};

export default LandingPage;
