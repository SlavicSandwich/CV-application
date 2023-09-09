import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar-button">
        <FontAwesomeIcon icon={faFileLines} />
        <p>Content</p>
      </button>
      <button className="sidebar-button">
        <FontAwesomeIcon icon={faPenToSquare} />
        <p>Customize</p>
      </button>
    </div>
  );
}
