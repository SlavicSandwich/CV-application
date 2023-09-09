import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateForm({ onClick, buttonText }) {
  return (
    <>
      <button className="create-form" onClick={onClick}>
        <h4>
          <FontAwesomeIcon icon={faPlus} /> {buttonText}
        </h4>
      </button>
    </>
  );
}
