import React, { useState } from "react";
import Alert from "../Alert/Alert";
import "./Blockquote.css";

interface BlockquoteProps {
  children: string;
  language?: string;
  copyable?: boolean;
}

const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  language,
  copyable,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (copyable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleCopy();
    }
  };

  return (
    <div
      className={`blockquote-container ${copyable ? "copyable" : ""}`}
      onClick={copyable ? handleCopy : undefined}
      onKeyDown={copyable ? handleKeyDown : undefined}
      role={copyable ? "button" : undefined}
      tabIndex={copyable ? 0 : undefined}
      aria-label={
        copyable
          ? "Click or press Enter to copy blockquote content to the clipboard"
          : undefined
      }
      aria-live={showAlert ? "polite" : undefined}
    >
      {showAlert && (
        <Alert variant="success" aria-live="assertive">
          Copied to clipboard!
        </Alert>
      )}
      <blockquote className={`blockquote ${language ? "code-block" : ""}`}>
        <pre>
          <code className={`${language || "plain-text"}`}>{children}</code>
        </pre>
      </blockquote>
    </div>
  );
};

export { BlockquoteProps };
export default Blockquote;
