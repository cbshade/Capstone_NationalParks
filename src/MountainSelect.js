import React, { useState } from "react";
import mountains from "../src/components/data/mountains.json";

const mountainList = [{ mountains }]

function MountainSelect() {
    const [filteredMountains, setFilteredMountains] = useState(mountainList)

    const filterByName = name => {
        setFilteredMountains(
            mountainList.filter(name => mountainList.name === name)
        )
    }

    // Using Set to filter unique values
    const names = Array.from(
        new Set(mountainList.map(mountains => mountains.name))
    )

    return (
        <div>
            <select onChange={e => filterByName(e.target.value)}>
                <option value="" disabled default selected>
                    Select mountain
                </option>

                {names.map(name => {
                    return <option key={name}>{name}</option>
                })}
            </select>
            <ul>
                {filteredMountains.map(mountains => {
                    const { name, elevation, effort, img, desc } = mountains
                return (
                <li key={name}>
                    <div>
                        <h2>{mountains.name}</h2>
                        <img src={mountains.img} alt={mountains.name} />
                        <p>Description: {mountains.desc}</p>
                        <p>Effort: {mountains.effort}</p>
                        <p>Elevation: {mountains.elevation}</p>
                    </div>
                </li>
                )
          })}
            </ul>
        </div>
    )
};

export default MountainSelect;