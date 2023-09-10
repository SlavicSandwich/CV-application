import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

export default function ExperienceForm(props) {
  const {
    companyName,
    positionTitle,
    location,
    startDate,
    endDate,
    description,
    id,
  } = props.form;

  const { onChange, onCancel, onSave, onDelete } = props;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id={id}
      data-array-name="experience"
      className="section-form experience-form"
    >
      <InputGroup
        id="company-name"
        placeholder="Enter Company Name"
        type="text"
        labelText="Company Name"
        onChange={onChange}
        value={companyName}
        // optional
        data-key="companyName"
      />

      <InputGroup
        id="position-title"
        placeholder="Enter Position Title"
        type="text"
        labelText="Position Title"
        onChange={onChange}
        value={positionTitle}
        // optional
        data-key="positionTitle"
      />
      <div className="date-container">
        <InputGroup
          id="start-date"
          placeholder="Enter Start Date"
          type="date"
          labelText="Start Date"
          onChange={onChange}
          value={startDate}
          // optional
          data-key="startDate"
        />
        <InputGroup
          id="end-date"
          placeholder="Enter End Date"
          type="date"
          labelText="End Date"
          onChange={onChange}
          value={endDate}
          // optional
          data-key="endDate"
        />
      </div>
      <InputGroup
        id="location"
        placeholder="Enter Location"
        type="text"
        labelText="Location"
        onChange={onChange}
        value={location}
        optional
        data-key="location"
      />
      <InputGroup
        id="description"
        placeholder="Enter Description"
        type="textarea"
        labelText="Description"
        onChange={onChange}
        value={description}
        optional
        data-key="description"
      />
      <Buttons onSave={onSave} onCancel={onCancel} onDelete={onDelete} />
    </form>
  );
}
