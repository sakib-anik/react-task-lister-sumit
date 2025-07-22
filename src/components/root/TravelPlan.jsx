import { useState } from "react";
import TravelTree from "./components/TravelTree";
import { initialTravelPlan } from "./data/places";
export default function TravelPlan() {
  const [places, setPlaces] = useState(initialTravelPlan);
  const travelplaces = places.childPlaces;
  return (
    <>
      <h1>Places to visit</h1>
      <ol>
        {travelplaces.map((place) => (
          <TravelTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
