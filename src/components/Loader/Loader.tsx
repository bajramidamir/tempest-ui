import React from "react";
import "./Loader.css";

interface LoaderProps {
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullscreen }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`loader-wrapper ${fullscreen ? "loader-fullscreen" : ""}`}
    >
      <p className="sr-only">Loading...</p>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
