import CreateForm from "../CreateForm";
import ExpandSection from "../ExpandSection";
import DisplayForms from "../DisplayForms";
import ExperienceForm from "./ExperienceForm";
import "../../css/section.css";
export default function AddExperience({
  jobs,
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
    <div className="add-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="Experience"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={jobs}
          FormComponent={ExperienceForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="companyName"
          arrayName="jobs"
        />
        <CreateForm onClick={createForm} buttonText="Job" />
      </div>
    </div>
  );
}
