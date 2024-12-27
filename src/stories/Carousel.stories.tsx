import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import Dropdown from "../components/Dropdown/Dropdown";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const carouselItems = [
  <Button key="1" color="primary" onClick={() => alert("Button clicked!")}>
    Here's a Button
  </Button>,
  <Dropdown
    key="2"
    onSelect={(selected) => console.log(selected)}
    label="Example Dropdown"
    options={["Item 1", "Item 2", "Item 3"]}
  />,
  <Text key="3">This is a sample text inside the Carousel.</Text>,
  <div key="4" style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
    <h3>Custom Content</h3>
    <p>This is a custom block inside the Carousel.</p>
  </div>,
];

export const Default = () => <Carousel items={carouselItems} />;
