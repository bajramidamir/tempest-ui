import Textarea from "../components/Textarea/Textarea";
import React from "react";

export default {
  title: "Components/Textarea",
  component: Textarea,
};

export const Default = () => <Textarea placeholder="Write your text here..." />;

export const Disabled = () => (
  <Textarea placeholder="This textarea is disabled" disabled />
);

export const WithValue = () => (
  <Textarea value="This is a pre-filled textarea" />
);

export const WithRowsAndCols = () => (
  <Textarea placeholder="Custom rows and cols" rows={6} cols={40} />
);

export const LongText = () => (
  <Textarea placeholder="A long placeholder text..." rows={6} cols={50} />
);
