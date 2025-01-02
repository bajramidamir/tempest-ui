import React, { FC, ReactNode } from "react";
import "./Link.css";

interface LinkProps {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  decoration?:
    | "underline"
    | "none"
    | "dotted"
    | "dashed"
    | "wavy"
    | "double"
    | "solid";
  onClick?: () => void;
}

const Link: FC<LinkProps> = ({
  href,
  children,
  target = "_self",
  disabled = false,
  onClick,
  decoration = "none",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      onClick={handleClick}
      className={`link ${disabled ? "link-disabled" : ""} link-${decoration}`}
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
};

export { LinkProps };
export default Link;
