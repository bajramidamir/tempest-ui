import { FC, ReactNode } from "react";
import "./Text.css";
import React from "react";

interface TextProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraph"
    | "small"
    | "line-through"
    | "extra-large";
  color?: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
  margin?: string;
  centered?: boolean;
  children: ReactNode;
}

const Text: FC<TextProps> = ({
  variant = "paragraph",
  color,
  margin,
  children,
  centered,
}) => {
  const classes =
    `text text-${variant} text-${color} ${margin || ""} ${centered ? "text-center" : ""}`.trim();

  switch (variant) {
    case "h1":
      return <h1 className={classes}>{children}</h1>;
    case "h2":
      return <h2 className={classes}>{children}</h2>;
    case "h3":
      return <h3 className={classes}>{children}</h3>;
    case "h4":
      return <h4 className={classes}>{children}</h4>;
    case "h5":
      return <h5 className={classes}>{children}</h5>;
    case "h6":
      return <h6 className={classes}>{children}</h6>;
    case "small":
      return <small className={classes}>{children}</small>;
    case "line-through":
      return <span className={classes}>{children}</span>;
    default:
      return <p className={classes}>{children}</p>;
  }
};

export { TextProps };
export default Text;
