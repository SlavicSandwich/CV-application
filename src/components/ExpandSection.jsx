import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../css/expandSection.css";

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
        <FontAwesomeIcon
          icon={iconName === "Experience" ? faBriefcase : faGraduationCap}
        />
        {sectionName}
      </h2>
      <FontAwesomeIcon icon={faAngleDown} className={isOpen ? "open" : ""} />
    </button>
  );
}
