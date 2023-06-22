import React from "react";


function ShowMountain(props) {
  return (
    <>
      <ul>
        {props.mountains.map((mountain) => {
          const { name, elevation, effort, img, desc } = mountain;
          return (
            <div key={name}>
              <div>
                <h2>{name}</h2>
                <img src={img} alt={name} />
                <p>Description: {desc}</p>
                <p>Effort: {effort}</p>
                <p>Elevation: {elevation}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ShowMountain;
