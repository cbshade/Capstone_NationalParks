import React from "react";
import NationalParks from "../../NationalParks";
import LocationSelect from "../../LocationSelect";


export default function Park() {
  return (
    <>
      <LocationSelect />
      <table class="styled-table">
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
        <NationalParks />
        </tbody>
      </table>
    </>
  );
}
