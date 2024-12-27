import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import Dropdown from "../components/Dropdown/Dropdown";
import Input from "../components/Input/Input";

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
  <Input type="text" />,
];

export const Default = () => <Carousel items={carouselItems} />;
