import InputGroup from "../../InputGroud";
import CreateForm from "../../CreateForm";

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
        iconName=""
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educations}
          // FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          // titleKey="schoolName"
          // arrayName="educations"
        />
      </div>
      <CreateForm createForm={createForm} buttonText="Education" />
    </div>
  );
}
