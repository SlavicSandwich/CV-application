import PersonalInfoSection from "./personal/PersonalInfoSection";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";

export default function ResumeSide({ personalInfo, sections, layout }) {
  return (
    <div className="resume-container">
      <div className={`resume ${layout}`}>
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          adress={personalInfo.adress}
        />
        <div>
          <EducationInfoSection eductaions={sections.educations} />
          <ExperienceInfoSection jobs={sections.jobs} />
        </div>
      </div>
    </div>
  );
}
