import React from "react";
import NationalParksData from "./components/data/nationalparks.json";
import './Parks.css';


export default function ParkListAll() {

  
return(
    <>

      

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
      {NationalParksData.parks.map((park, i) => {
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
