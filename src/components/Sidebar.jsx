import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ onGoToPage, page }) {
  return (
    <nav className="sidebar">
      <button
        className="sidebar-button"
        onClick={() => onGoToPage("content")}
        data-secelcted={page === "content"}
      >
        <FontAwesomeIcon icon={faFileLines} />
        <p>Content</p>
      </button>
      <button
        className="sidebar-button"
        onClick={() => onGoToPage("customize")}
        data-secelcted={page === "cutsomize"}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <p>Customize</p>
      </button>
    </nav>
  );
}
