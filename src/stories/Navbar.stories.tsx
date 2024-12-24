import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const NavbarExample = () => (
  <Navbar
    color="primary"
    title="tempest-ui"
    actions={
      <>
        <Button color="primary">Docs</Button>
        <Button color="primary">Login</Button>
      </>
    }
  />
);
