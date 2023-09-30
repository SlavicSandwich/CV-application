import CreateForm from "../CreateForm";
import ExpandSection from "../ExpandSection";
import EducationForm from "./EducationForm";
import DisplayForms from "../DisplayForms";
export default function AddEducation({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="education"
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />
      </div>
      <CreateForm onClick={createForm} buttonText="Education" />
    </div>
  );
}
