import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Template() {
  return (
    <div className="template">
      <button className="clear-btn">
        <FontAwesomeIcon icon={faTrash} />
        Erase Resume
      </button>
      <button className="example-btn">Load Example</button>
    </div>
  );
}
