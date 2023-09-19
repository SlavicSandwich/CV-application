import ExperienceInfo from "./ExperienceInfo";

export default function ExperienceInfoSection({ jobs }) {
  return (
    <div className="job-section resume-section">
      <DisplaySection
        array={jobs}
        infoComponent={ExperienceInfo}
        title="Experience"
      />
    </div>
  );
}
