import InputGroup from "../InputGroup";

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
        text="Full name"
        placeholder="First and Second name"
        value={fullName}
        onChange={onChange}
        recommended
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="email"
        text="Email"
        placeholder="Enter Email"
        value={email}
        onChange={onChange}
        recommended
        data-key="email"
      />
      <InputGroup
        type="tel"
        id="phone-number"
        text="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        recommended
        data-key="telephone"
      />
      <InputGroup
        type="text"
        id="adress"
        text="Adress"
        placeholder="Enter Adress"
        value={adress}
        onChange={onChange}
        recommended
        data-key="adress"
      />
    </form>
  );
}
