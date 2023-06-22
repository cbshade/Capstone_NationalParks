import React, { useState } from "react";
import ParkTypeSelect from "../../ParkTypeSelect";
import ParkLocationSelect from "../../ParkLocationSelect";
import ParkListAll from "../../ParkListAll";


export default function Park() {

  const [searchOption, setSearchOption] = useState("ViewAll");

  const onOptionChange = e => {
    setSearchOption(e.target.value);
  }

  return (
    <>

      <div className="App">
        <h3>Select Search Option</h3>

        <input type="radio" name="type" value="ViewAll" id="viewall"
          checked={searchOption === "ViewAll"} onChange={onOptionChange} />
        <label >View All</label>

        <input type="radio" name="type" value="Location" id="location"
          checked={searchOption === "Location"} onChange={onOptionChange} />
        <label >By Location</label>

        <input type="radio" name="type" value="ParkType" id="parktype"
          checked={searchOption === "ParkType"} onChange={onOptionChange} />
        <label >By Park Type</label>

      </div>
      <div>
        {searchOption === 'ViewAll' && <ParkListAll />}
        {searchOption === 'ParkType' && <ParkTypeSelect />}
        {searchOption === 'Location' && <ParkLocationSelect />}
      </div>

    </>
  )
}