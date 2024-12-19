import { useState, ReactNode, FC } from "react";
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
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
