import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function PersonalInfoSection({
  email,
  fullName,
  phoneNumber,
  adress,
}) {
  <div className="personal-info">
    <h1 className="resume-name">{fullName}</h1>
    <div className={"contact-info"}>
      {email && (
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{email}</span>
        </div>
      )}
      {phoneNumber && (
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span>{phoneNumber}</span>
        </div>
      )}
      {adress && (
        <div>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <span>{adress}</span>
        </div>
      )}
    </div>
  </div>;
}
