import React, { useState, ReactNode, FC } from "react";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  children: ReactNode;
  initialOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({
  title,
  children,
  initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "Enter" || e.key == " ") {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className="accordion">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="accordion-header"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span aria-hidden="true" className={isOpen ? "open" : "closed"}>
          {"▼"}
        </span>
      </div>
      <div
        role="region"
        aria-hidden={!isOpen}
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export { AccordionProps };
export default Accordion;
