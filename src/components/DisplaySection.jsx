export default function DisplaySection({ title, array, InfoComponent }) {
  return (
    <>
      {!array.every((obj) => obj.isHidden) && (
        <h3 className="header-text">{title}</h3>
      )}

      {array.map(
        (info) => !info.isHidden && <InfoComponent info={info} key={info.id} />
      )}
    </>
  );
}
