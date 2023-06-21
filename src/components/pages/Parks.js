import React from "react";
import NationalParks from "../../NationalParks";

export default function Park() {
  return (
    <>
      <table>
        <tr>
          <th>Location Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
        <NationalParks />
      </table>
    </>
  );
}
