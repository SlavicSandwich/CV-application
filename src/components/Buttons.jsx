import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Buttons({ onSave, onCancel, onDelete }) {
  return (
    <div className="btn-group">
      <button className="delete-btn" onClick={onDelete} type="button">
        <FontAwesomeIcon icon={faTrash} />
        Delete
      </button>
      <div className="btn-container">
        <button className="cancel-btn" onClick={onCancel} type="button">
          Cancel
        </button>
        <button className="save-btn" onClick={onSave} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
