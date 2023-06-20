import React, { Component } from "react";
import mountains from "../src/components/data/mountains.json";

class MountainList extends Component {
  render() {
    return (
      <div>
        {mountains.mountains.map((mountain, i) => {
          return (
            <div key={i}>
              <div>
                <h2>{mountain.name}</h2>
                <img src={mountain.img} alt={mountain.name} />
                <p>Description: {mountain.desc}</p>
                <p>Effort: {mountain.effort}</p>
                <p>Elevation: {mountain.elevation}</p>
                <span>Latitude: {mountain.coords.lat}, </span>
                <span>Longitude: {mountain.coords.lng}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default MountainList;
