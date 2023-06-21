import React, { useState } from "react";
import LocationsData from "../src/components/data/locations.json";

const Locations = [LocationsData];
console.log(Locations);

export default function LocationSelect() {
  const [filteredLocations, setFilteredLocations] = Locations;
  // const filteredByLocationState=(LocationState)=>{setFilteredLocations(Locations.filter((state) => Location.State === LocationState)}
  return (
    <select>
      {Locations.map((Location) => (
        <option key={Location} value={Location}>
          {Location}
        </option>
      ))}
    </select>
  );
}
