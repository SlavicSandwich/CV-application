import EducationInfo from "./EducationInfo";

export default function EducationInfosection({ eductaions }) {
  return (
    <div className="eductaion-section resume-section">
      <DisplaySection
        array={eductaions}
        infoComponent={EducationInfo}
        title="Education"
      />
    </div>
  );
}
