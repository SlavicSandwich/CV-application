export default function LayoutEdit({ onLayoutChange }) {
  return (
    <>
      <h2>Layout</h2>
      <div className="layout-buttons">
        <button onClick={() => onLayoutChange("top")}>
          <div className="top-visual visual" />
          Top
        </button>
        <button onClick={() => onLayoutChange("left")}>
          <div className="right-visual visual" />
          Right
        </button>
        <button onClick={() => onLayoutChange("right")}>
          <div className="right-visual visual" />
          Right
        </button>
      </div>
    </>
  );
}
