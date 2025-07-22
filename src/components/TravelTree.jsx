export default function TravelTree({ place }) {
  return (
    <li>
      {place.title}
      {place.childPlaces.length > 0 && (
        <ol>
          {place.childPlaces.map((place) => (
            <TravelTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}
