import { FC, useState } from "react";
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

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  shape = "circle",
  fallbackText = "",
  border = false,
  bgColor = "#f7f7f7",
}) => {
  const [imageError, setImageError] = useState(false);

  const getSize = () => {
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

  return (
    <div
      className={`avatar avatar-${shape} ${border ? "avatar-border" : ""}`}
      style={{
        width: getSize(),
        height: getSize(),
        backgroundColor: bgColor,
      }}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || "avatar"}
          onError={() => setImageError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span className="avatar-fallback">{fallbackText}</span>
      )}
    </div>
  );
};

export default Avatar;
