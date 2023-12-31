import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

export default function EducationForm(props) {
  const { schoolName, degree, startDate, endDate, location, id } = props.form;

  const { onChange, onCancel, onSave, onRemove } = props;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id={id}
      data-array-name="educations"
      className="section-form education-form"
    >
      <InputGroup
        id="school"
        placeholder="Enter School"
        type="text"
        labelText="School"
        onChange={onChange}
        value={schoolName}
        // optional
        data-key="schoolName"
      />
      <InputGroup
        id="degree"
        placeholder="Enter Degree"
        type="text"
        labelText="Degree"
        onChange={onChange}
        value={degree}
        // optional
        data-key="degree"
      />
      <div className="date-container">
        <InputGroup
          id="start-date"
          placeholder="Enter Start Date"
          type="text"
          labelText="Start Date"
          onChange={onChange}
          value={startDate}
          // optional
          data-key="startDate"
        />
        <InputGroup
          id="end-date"
          placeholder="Enter End Date"
          type="text"
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
      <Buttons onSave={onSave} onCancel={onCancel} onDelete={onRemove} />
    </form>
  );
}
