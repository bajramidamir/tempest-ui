import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import React from "react";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        color="primary"
        variant="filled"
        radius="pill"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>This is the content inside the modal.</p>
        <form action="">
          <Input type="email" placeholder="Write something" />
        </form>
        <Button
          color="primary"
          variant="filled"
          radius="pill"
          onClick={() => setIsOpen(false)}
        >
          Close Modal
        </Button>
      </Modal>
    </>
  );
};
