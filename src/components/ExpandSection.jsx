import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ExpandSection({
  isOpen,
  setOpen,
  sectionName,
  iconName,
}) {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        <FontAwesomeIcon icon={iconName} />
        {sectionName}
      </h2>
      <FontAwesomeIcon icon={faAngleDown} className={isOpen ? "open" : ""} />
    </button>
  );
}
