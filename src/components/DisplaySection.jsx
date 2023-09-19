export default function DisplaySection({ title, array, infoComponent }) {
  return (
    <>
      {!array.every((obj) => obj.isHidden) && (
        <h3 className="header-text">{title}</h3>
      )}

      {array.map(
        (info) => !info.isHidden && <infoComponent info={info} key={info.id} />
      )}
    </>
  );
}
