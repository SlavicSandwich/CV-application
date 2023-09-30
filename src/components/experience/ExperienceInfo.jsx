export default function ExperienceInfo({ info }) {
  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
          {info.startDate}
          {info.startDate && info.endDate && <span> - </span>}
          {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>
      <div className="experience-info-group">
        <p className="experience-info-company-name">{info.companyName}</p>
        <p className="experience-info-position-title">{info.positionTitle}</p>
        <p className="experience-info-description">{info.description}</p>
      </div>
    </div>
  );
}
