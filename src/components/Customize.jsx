import FontEdit from "./customization/FontEdit";
import LayoutEdit from "./customization/LayoutEdit";
import AccentColorEdit from "./customization/AccentColorEdit";

export default function Customize({ isShown, onColChange }) {
  return (
    <div
      className="customize"
      style={{ display: isShown ? undefined : "none" }}
    >
      <div>
        <LayoutEdit onColChange={onColChange} />
      </div>

      <div>
        <AccentColorEdit />
      </div>

      <div>
        <FontEdit />
      </div>
    </div>
  );
}
