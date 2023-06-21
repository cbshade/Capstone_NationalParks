import React from "react";
import NationalParksData from "../src/components/data/nationalparks.json";
import LocationsData from "../src/components/data/locations.json";


const filteredLocations = NationalParksData.parks.filter(
  (location) => location.State === 'Maine'
);

export default function NationalParks() {
  return (
    <>
      <div>
        <select>
          <option value="" disabled default selected>
            Select by Location
          </option>
          {LocationsData.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {filteredLocations.map((park, i) => {
        return (
          <tr key={i}>
            <td>{park.LocationName}</td>
            <td>{park.Address}</td>
            <td>{park.City}</td>
            <td>{park.State}</td>
            <td>{park.ZipCode}</td>
            <td>{park.Phone}</td>
          </tr>
        );
      })}
    </>
  );
}