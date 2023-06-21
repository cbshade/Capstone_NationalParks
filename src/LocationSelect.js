import React from "react";
import LocationsData from "../src/components/data/locations.json";

export default function LocationSelect() {
  return (
    <select>
      {LocationsData.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
}
