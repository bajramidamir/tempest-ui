import Container from "../components/Container/Container";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import Form from "../components/Form/Form";
import Checkbox from "../components/Checkbox/Checkbox";
import Link from "../components/Link/Link";
import React, { useState } from "react";

export default {
  title: "Components/Container",
  component: Container,
};

export const InsideAndOutsideContainer = () => (
  <div>
    {/* Outside Container */}
    <div style={{ border: "1px solid black" }}>
      <Text variant="h1">Outside Container</Text>
      <Text>
        This text is outside of the Container component. It only has padding and
        margin thanks to its own CSS. The Button below doesn't even have that.
      </Text>
      <Button>Look at me!</Button>
    </div>

    <br />
    <hr />
    <br />

    {/* Inside Container */}

    <Container bgColor="#f0f0f0">
      <Text variant="h1">Inside Container</Text>
      <Text>
        This text is inside the Container component. The padding and margins
        applied by the Container ensure consistent spacing, making it easier to
        maintain a polished layout across your project. Button below!
      </Text>
      <Button>Look at me!</Button>
      <Card
        content="Content"
        title="Title"
        image="https://www.picsum.photos/1000"
      />
    </Container>
  </div>
);

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName ? "" : "First name is required.",
      lastName: formData.lastName ? "" : "Last name is required.",
      email: /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Enter a valid email address.",
      message: formData.message ? "" : "Message cannot be empty.",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Container layout="centered">
      <Text variant="h1">Interested in what you see? Contact us!</Text>
      <Text>A small message goes a long way!</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <Text color="danger">{errors.firstName}</Text>}

        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <Text color="danger">{errors.lastName}</Text>}

        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <Text color="danger">{errors.email}</Text>}

        <Textarea
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <Text color="danger">{errors.message}</Text>}

        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export const GridContainer = () => (
  <Container layout="grid">
    <Button color="primary" variant="filled">
      Button
    </Button>
    <Button color="primary" variant="outlined">
      Button
    </Button>
    <Button color="primary" variant="text">
      Button
    </Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Container>
);

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: [value] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <Container>
        <Text variant="h3">A simple login screen</Text>
        <Link href="https://github.com/bajramidamir/tempest-ui">
          <Button variant="text" color="primary">
            Source code
          </Button>
        </Link>
      </Container>

      <Container layout="centered" shadow="sm" bgColor="var(--color-light)">
        <Text variant="h1" color="primary">
          Account Login
        </Text>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Checkbox
            label="Remember me"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Container margin="0" padding="0" layout="centered">
            <Button color="primary" type="submit">
              Login
            </Button>
          </Container>

          <Text>Or sign up using</Text>
          <Container padding="0px" margin="0" layout="grid">
            <Button>Google</Button>
            <Button>Facebook</Button>
          </Container>
        </Form>
        <Text>
          <Link href="#">Forgot your password? Reset it here!</Link>
        </Text>
      </Container>
    </>
  );
};
