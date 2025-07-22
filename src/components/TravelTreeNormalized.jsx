export default function TravelTreeNormalized({
  id,
  placesById,
  onComplete,
  parentId,
}) {
  const place = placesById[id];
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(id, parentId)}>Complete</button>
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map((id) => (
            <TravelTreeNormalized
              onComplete={onComplete}
              key={id}
              id={id}
              parentId={place.id}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
