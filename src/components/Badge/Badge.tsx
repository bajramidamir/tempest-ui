import { FC, ReactNode } from "react";
import React from "react";
import "./Badge.css";

interface BadgeProps {
  content?: string | number;
  color?: "default" | "success" | "error" | "warning" | "info";
  dot?: boolean;
  hidden?: boolean;
  children: ReactNode; // The component the Badge decorates
}

const Badge: FC<BadgeProps> = ({
  content,
  color = "default",
  dot = false,
  hidden = false,
  children,
}) => {
  if (hidden) return <>{children}</>;

  return (
    <div className="badge-wrapper">
      {children}
      <span
        className={`badge badge-${color} ${dot ? "badge-dot" : ""}`}
        aria-hidden={dot}
        aria-label={!dot && content ? `Badge: ${content}` : undefined}
      >
        {!dot && content}
      </span>
    </div>
  );
};

export { BadgeProps };
export default Badge;
