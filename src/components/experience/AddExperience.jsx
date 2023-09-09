import CreateForm from "../CreateForm";

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
        iconName=""
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={jobs}
          // FormComponent={JobForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          // titleKey="jobName"
          // arrayName="jobs"
        />
      </div>
      <CreateForm createForm={createForm} buttonText={Job} />
    </div>
  );
}
