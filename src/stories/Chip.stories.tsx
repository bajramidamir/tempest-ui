import Chip from "../components/Chip/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
};

export const MultipleChips = () => {
  const chips = Array.from({ length: 5 }, (_, index) => (
    <Chip
      key={index}
      label={`Chip ${index + 1}`}
      onRemove={() => alert(`Removed Chip ${index + 1}`)}
      removable
    />
  ));

  return <div style={{ display: "flex", gap: "8px" }}>{chips}</div>;
};
