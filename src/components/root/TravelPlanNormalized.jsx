import { useState } from "react";
import TravelTreeNormalized from "./components/TravelTreeNormalized";
import { initialTravelPlan } from "./data/places-normalized";
export default function TravelPlan() {
  const [places, setPlaces] = useState(initialTravelPlan);
  const root = places[0];
  const handleClick = (childId, parentId) => {
    console.log(childId, parentId);
    setPlaces({
      ...places,
      [parentId]: {
        ...places[parentId],
        childIds: places[parentId].childIds.filter((id) => id !== childId),
      },
    });
  };
  console.log(root);
  return (
    <>
      <h1>Places to visit</h1>
      <ol>
        {root.childIds.map((id) => (
          <TravelTreeNormalized
            onComplete={handleClick}
            key={id}
            id={id}
            parentId={root.id}
            placesById={places}
          />
        ))}
      </ol>
    </>
  );
}
