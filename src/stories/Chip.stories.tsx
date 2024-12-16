import { useState } from "react";
import Chip from "../components/Chip/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
};

export const MultipleChips = () => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleToggle = (label: string) => {
    setSelectedChips(
      (prev) =>
        prev.includes(label)
          ? prev.filter((chip) => chip !== label) // Deselect chip
          : [...prev, label] // Select chip
    );
  };

  const chips = Array.from({ length: 5 }, (_, index) => (
    <Chip
      key={index}
      label={`Chip ${index + 1}`}
      isSelected={selectedChips.includes(`Chip ${index + 1}`)}
      onToggle={handleToggle}
    />
  ));

  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>{chips}</div>
      <br />
      <strong>Selected Chips: </strong>{" "}
      <p>{selectedChips.join(", ") || "None"}</p>
    </div>
  );
};
