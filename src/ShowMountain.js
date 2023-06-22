import React from "react";
import SunInfo from "./SunInfo";


function ShowMountain(props) {
  return (
    <>
      <ul>
        {props.mountains.map((mountain) => {
          const { name, elevation, effort, img, desc, coords } = mountain;
          return (
            <div key={name}>
                <h2>{name}</h2>
                <img src={img} alt={name} />
                <p>Description: {desc}</p>
                <p>Effort: {effort}</p>
                <p>Elevation: {elevation}</p>
                <p>Latitude: {coords.lat}</p>
                <p>Longitude: {coords.lng}</p>
                <SunInfo lat={coords.lat} lng={coords.lng}/>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ShowMountain;
