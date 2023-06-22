import React, { useState } from "react";
import mountains from "../src/components/data/mountains.json";
import ShowMountain from "./ShowMountain";

const mountainList = [mountains];

function MountainSelect() {
  const [filteredMountains, setFilteredMountains] = useState(mountainList);
  const [showMountain, setShowMountain] = useState(false);

  const filterByName = (name) => {
    setFilteredMountains(
      mountainList[0].mountains.filter((mountain) => mountain.name === name)
    );
    setShowMountain(true);
  };

  // Using Set to filter unique values
  const names = Array.from(
    new Set(mountainList[0].mountains.map((mountain) => mountain.name))
  );

  return (
    <div>
      <select onChange={(e) => filterByName(e.target.value)}>
        <option value="" disabled default selected>
          Select mountain
        </option>

        {names.map((name) => {
          return <option key={name}>{name}</option>;
        })}
      </select>
      
      {showMountain && <ShowMountain mountains={filteredMountains} />}
    </div>
  );
}

export default MountainSelect;
