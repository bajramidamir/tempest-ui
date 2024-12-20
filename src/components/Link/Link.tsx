import { FC, ReactNode } from "react";
import "./Link.css";
import React from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: () => void;
}

const Link: FC<LinkProps> = ({ href, children, target, disabled, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault(); // Prevent navigation if disabled
      return;
    }
    onClick?.();
  };

  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      onClick={handleClick}
      className={`link ${disabled ? "link-disabled" : ""}`}
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
};

export { LinkProps };
export default Link;
