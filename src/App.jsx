import ResumeSide from "./components/ResumeSide";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddPersonalDetails from "./components/personal/AddPersonalDetails";
import AddEducation from "./components/education/AddEducation";
import AddExperience from "./components/experience/AddExperience";
import Customize from "./components/Customize";
import uniqid from "uniqid";
import TemplateLoader from "./components/TemplateLoader";
import exampleData from "./Example-data";
import "./css/app.css";
// import { faL } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [resumeLayout, setResumeLayout] = useState("top");

  const [prevState, setPrevState] = useState(null);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const createExperienceForm = () => {
    "jobs",
      {
        companyName: "",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false,
        id: uniqid(),
      };
  };

  const setOpen = (sectionName) => setSectionOpen(sectionName);

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }

  function cancelForm(e) {
    if (prevState == null) {
      removeForm(e);
      return;
    }
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }
        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }
        return form;
      }),
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e) => toggleValue(e, "isHidden");

  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar onGoToPage={setCurrentPage} page={currentPage} />
        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}
            onClear={() => {
              setPersonalInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                adress: "",
              });
              setSections({ educations: [], jobs: [] });
              setPrevState(null);
            }}
          />
          {currentPage === "content" && (
            <>
              <AddPersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.email}
                adress={personalInfo.adress}
              />

              <AddEducation
                educations={sections.educations}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <AddExperience
                jobs={sections.jobs}
                isOpen={sectionOpen === "Experience"}
                onChange={handleSectionChange}
                createForm={createExperienceForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
            </>
          )}

          <Customize
            isShown={currentPage === "customize"}
            onColChange={setResumeLayout}
          />
        </div>
      </div>
      <ResumeSide
        personalInfo={personalInfo}
        sections={sections}
        layout={resumeLayout}
      />
    </div>
  );
}

export default App;
