import React, { ReactNode, FC } from "react";
import "./Navbar.css";

interface NavbarProps {
  title?: string;
  titleIcon?: string;
  actions?: ReactNode;
  color?: "primary" | "secondary" | "light" | "dark";
  fixed?: boolean;
  customStyles?: React.CSSProperties;
}

const Navbar: FC<NavbarProps> = ({
  title,
  titleIcon,
  actions,
  color = "primary",
  fixed = false,
  customStyles,
}) => {
  return (
    <nav
      className={`navbar navbar-${color} ${fixed ? "navbar-fixed" : ""}`}
      style={customStyles}
    >
      <div className="navbar-title">
        {titleIcon && (
          <img src={titleIcon} alt="Logo" className="navbar-title-icon" />
        )}
        {title}
      </div>

      <div className="navbar-actions">{actions}</div>
    </nav>
  );
};

export { NavbarProps };
export default Navbar;
