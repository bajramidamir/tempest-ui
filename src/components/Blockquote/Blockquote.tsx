import React, { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
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

  return (
    <div className="blockquote-container">
      {showAlert && <Alert variant="success">Copied to clipboard!</Alert>}
      <blockquote className={`blockquote ${language ? "code-block" : ""}`}>
        <pre>
          <code className={`${language ? "code" : "regular"}`}>{children}</code>
        </pre>
        {copyable && (
          <div className="blockquote-button">
            <Button color="primary" onClick={handleCopy}>
              Copy
            </Button>
          </div>
        )}
      </blockquote>
    </div>
  );
};

export { BlockquoteProps };
export default Blockquote;
