import React from "react";
import NationalParksData from "../src/components/data/nationalparks.json";

export default function NationalParks() {
  return (
    <>
      <div>
        {NationalParksData.parks.map((park, i) => {
          return (
            <div key={i}>
              <tr>
                <td>{park.LocationName}</td>
                <td>{park.Address}</td>
                <td>{park.City}</td>
                <td>{park.State}</td>
                <td>{park.ZipCode}</td>
                <td>{park.Phone}</td>
              </tr>
            </div>
          );
        })}
      </div>
    </>
  );
}
