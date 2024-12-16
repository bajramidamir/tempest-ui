import { useState, FC, ChangeEvent } from "react";
import "./Dropdown.css";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (selectedOptions: string[]) => void;
  isMultiSelect?: boolean;
  isSearchable?: boolean;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  isMultiSelect = false,
  isSearchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    if (isMultiSelect) {
      const updatedSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option];

      setSelectedOptions(updatedSelectedOptions);
      onSelect(updatedSelectedOptions);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
      onSelect([option]);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : label}
        <span className="dropdown-arrow">&#x25BC;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {isSearchable && (
            <input
              type="text"
              className="dropdown-search"
              placeholder="Search... 🔎"
              value={searchTerm}
              onChange={handleSearch}
            />
          )}
          <ul className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  className={`dropdown-item ${selectedOptions.includes(option) ? "selected" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {isMultiSelect && (
                    <input
                      type="checkbox"
                      className="dropdown-checkbox"
                      checked={selectedOptions.includes(option)}
                      readOnly
                    />
                  )}
                  {option}
                </li>
              ))
            ) : (
              <li className="dropdown-no-options">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
