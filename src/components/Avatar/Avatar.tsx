import React, { FC, useState } from "react";
import "./Avatar.css";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large" | string;
  shape?: "circle" | "square";
  fallbackText?: string;
  border?: boolean;
  bgColor?: string;
}

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return "32px";
    case "medium":
      return "48px";
    case "large":
      return "64px";
    default:
      return size;
  }
};

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  shape = "circle",
  fallbackText = "",
  border = false,
  bgColor = "var(--color-light)",
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`avatar avatar-${shape} ${border ? "avatar-border" : ""}`}
      style={{
        width: getSize(size),
        height: getSize(size),
        backgroundColor: bgColor,
      }}
      role="img"
      aria-label={imageError ? fallbackText : alt}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || "avatar"}
          key={src}
          onError={() => setImageError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span className="avatar-fallback">{fallbackText}</span>
      )}
    </div>
  );
};

export { AvatarProps };
export default Avatar;
