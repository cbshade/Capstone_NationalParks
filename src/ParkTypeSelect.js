import React, { useState } from "react";
import NationalParksData from "../src/components/data/nationalparks.json";
import ParkTypesData from "../src/components/data/parktypes.json"
import './Parks.css';

export default function ParkTypeSelect() {

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const filteredParkTypes = NationalParksData.parks.filter(
    (ParkType) => ParkType.LocationName.includes(selectedValue)
  );

  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value="" disabled default selected>
            Select by Park Type
          </option>
          {ParkTypesData.map((ParkType) => (
            <option key={ParkType} value={ParkType}>
              {ParkType}
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
          {filteredParkTypes.map((park, i) => {
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
