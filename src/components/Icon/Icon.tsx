import { FC } from "react";

interface IconProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  width?: string | number;
  height?: string | number;
}

const Icon: FC<IconProps> = ({ src, alt, size = "medium", width, height }) => {
  const getSize = () => {
    switch (size) {
      case "small":
        return "16px";
      case "medium":
        return "24px";
      case "large":
        return "32px";
      default:
        return size;
    }
  };

  return (
    <img
      src={src}
      alt={alt || "Icon"}
      style={{
        width: width || getSize(),
        height: height || getSize(),
      }}
    />
  );
};

export default Icon;
