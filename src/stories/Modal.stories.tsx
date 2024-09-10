import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>This is the content inside the modal.</p>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Close Modal
        </Button>
      </Modal>
    </>
  );
};
