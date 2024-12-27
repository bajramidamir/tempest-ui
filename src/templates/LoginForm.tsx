import React, { useState } from "react";
import {
  Container,
  Text,
  Input,
  Button,
  Link,
  Form,
  Checkbox,
  Icon,
  // @ts-expect-error
} from "tempest-ui";

const LoginForm: React.FC = () => {
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
      <Container layout="centered" shadow="sm">
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
          <Text>Or sign up with</Text>
          <Container padding="0px" margin="0" layout="grid">
            <Button variant="text">
              <Icon size="large" src="google.png" />
            </Button>
            <Button variant="text">
              <Icon size="large" src="facebook.png" />
            </Button>
          </Container>
        </Form>

        <Text>
          <Link href="#">Forgot your password? Reset it here!</Link>
        </Text>
      </Container>
    </>
  );
};

export default LoginForm;
