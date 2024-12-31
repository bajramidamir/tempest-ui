import React from "react";
import "./Image.css";

interface ImageProps {
  src: string;
  alt: string;
  radius?: "rounded" | "square";
  width?: string | number;
  height?: string | number;
  objectFit?: "cover" | "contain" | "fill" | "none";
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  radius = "square",
  width = "100%",
  height,
  objectFit = "cover",
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`image ${radius} ${className || ""}`}
      style={{
        width,
        height,
        objectFit,
      }}
    />
  );
};

export { ImageProps };
export default Image;
