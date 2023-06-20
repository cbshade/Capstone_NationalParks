import React, { useState } from "react";
import mountains from "../src/components/data/mountains.json";


const mountainList = [mountains]

console.log(mountainList);

function MountainSelect() {
    const [filteredMountains, setFilteredMountains] = useState(mountainList)

    const filterByName = name => {
        setFilteredMountains(
            mountainList[0].mountains.filter(mountain => mountain.name === name)
        )
    }

    // Using Set to filter unique values
    const names = Array.from(
        new Set(mountainList[0].mountains.map(mountain => mountain.name))
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
                {filteredMountains.map(mountain => {
                    const { name, elevation, effort, img, desc, coords } = mountain
                    return (
                        <div key={name}>
                            <div>
                                <h2>{name}</h2>
                                <img src={img} alt={name} />
                                <p>Description: {desc}</p>
                                <p>Effort: {effort}</p>
                                <p>Elevation: {elevation}</p>
                                <span>Latitude: {coords.lat}</span>
                                <br></br>
                                <span>Longitude: {coords.lng}</span>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};


export default MountainSelect;