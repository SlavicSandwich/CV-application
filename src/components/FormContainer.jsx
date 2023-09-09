import Template from "./Template";
import AddPersonalDetails from "./personal/AddPersonalDetails";

export default function FormContainer() {
  return (
    <div className="form-container">
      <Template />
      <AddPersonalDetails />
      <AddEducation />
      <AddExperience />
    </div>
  );
}
