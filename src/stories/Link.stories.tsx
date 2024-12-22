import Link from "../components/Link/Link";
import Text from "../components/Text/Text";
import React from "react";

export default {
  title: "Components/Link",
  component: Link,
};

export const Default = () => (
  <Link href="https://example.com" target="_blank">
    Visit Example
  </Link>
);

export const InheritStylesFromText = () => (
  <Text variant="h1">
    This is a paragraph with a <Link href="https://example.com">link</Link>{" "}
    inside it (it inherits the styles of the parent Text component :) )
  </Text>
);

export const Disabled = () => (
  <Link href="https://example.com" disabled>
    Disabled Link
  </Link>
);
