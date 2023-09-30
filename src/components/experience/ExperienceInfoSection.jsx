import ExperienceInfo from "./ExperienceInfo";
import DisplaySection from "../DisplaySection";
export default function ExperienceInfoSection({ jobs }) {
  return (
    <div className="job-section resume-section">
      <DisplaySection
        array={jobs}
        InfoComponent={ExperienceInfo}
        title="Experience"
      />
    </div>
  );
}
