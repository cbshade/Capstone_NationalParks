import React from "react";
import NationalParksData from "../src/components/data/nationalparks.json";


const filteredLocations = NationalParksData.parks.filter(
  (location) => location.State === 'Maine'
);

export default function NationalParks() {
  return (
    <>
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