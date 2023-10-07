import "../../css/educationInfo.css";
export default function EducationInfo({ info }) {
  return (
    <div className="education-info">
      <div className="education-info-group">
        <p className="dates">
          {info.startDate}
          {info.startDate && info.endDate && <span> - </span>}
          {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>

      <div className="education-info-group">
        <p className="education-info-schoolName">{info.schoolName}</p>
        <p className="eductation-info-degree">{info.degree}</p>
      </div>
    </div>
  );
}
