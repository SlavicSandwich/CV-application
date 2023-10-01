import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import "../css/collapsedForm.css";
export default function CollapsedForm({
  onClick,
  hideForm,
  title,
  arrayName,
  form,
}) {
  return (
    <button
      className="collapsed-form section-form"
      id={form.id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
      <FontAwesomeIcon
        icon={form.isHidden ? faEyeSlash : faEye}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      />
    </button>
  );
}
