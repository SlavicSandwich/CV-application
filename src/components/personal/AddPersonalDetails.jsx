import InputGroup from "../InputGroup";
import "../../css/personalDetails.css";

export default function PersonalDetails({
  onChange,
  fullName,
  email,
  phoneNumber,
  adress,
}) {
  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="First and Second name"
        value={fullName}
        onChange={onChange}
        recommended
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter Email"
        value={email}
        onChange={onChange}
        recommended
        data-key="email"
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        recommended
        data-key="phoneNumber"
      />
      <InputGroup
        type="text"
        id="adress"
        labelText="Adress"
        placeholder="Enter Adress"
        value={adress}
        onChange={onChange}
        recommended
        data-key="adress"
      />
    </form>
  );
}
