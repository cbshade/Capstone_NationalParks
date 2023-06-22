import React, { useState } from "react";
import LocationsData from "../src/components/data/locations.json";
import NationalParksData from "../src/components/data/nationalparks.json";
import './Parks.css';

export default function ParkLocationSelect() {

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const filteredLocations = NationalParksData.parks.filter(
    (location) => location.State.includes(selectedValue)
  );

  return (
    <>
      <div>
        <select onChange={handleChange}>
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

      <table className="styled-table">
        <thead>
          <tr>
            <th>Location Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </>
  );
}
