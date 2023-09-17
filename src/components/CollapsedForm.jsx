import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function CollapsedForm({
  onClick,
  hideForm,
  title,
  arrayName,
  form,
}) {
  return (
    <button
      className="collaped-form section-form"
      id={form.id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
      <FontAwesomeIcon
        icon={form.isHidden ? faSlash : faEye}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      />
    </button>
  );
}
