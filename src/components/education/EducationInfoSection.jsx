import EducationInfo from "./EducationInfo";
import DisplaySection from "../DisplaySection";
export default function EducationInfoSection({ eductaions }) {
  return (
    <div className="eductaion-section resume-section">
      <DisplaySection
        array={eductaions}
        InfoComponent={EducationInfo}
        title="Education"
      />
    </div>
  );
}
