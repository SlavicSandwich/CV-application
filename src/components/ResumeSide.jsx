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
          <EducationInfoSection educations={sections.educations} />
          <ExperienceInfoSection educations={sections.jobs} />
        </div>
      </div>
    </div>
  );
}
