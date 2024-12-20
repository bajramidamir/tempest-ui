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

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span className={isOpen ? "open" : "closed"}>{"▼"}</span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export { AccordionProps };
export default Accordion;
