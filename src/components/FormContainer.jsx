import Template from "./Template";
import AddPersonalDetails from "./personal/AddPersonalDetails";
import AddEducation from "./education/AddEducation";
import AddExperience from "./experience/AddExperience";

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
