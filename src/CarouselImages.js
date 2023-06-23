import React from "react";
import mountains from "../src/components/data/mountains.json";
import './CarouselImages.css';


export default function Images() {

  return (
    <>
      <div>
        {
          mountains.mountains.map((mountain, i) => {
            return (
              <div key={i}>
                <span className="images">
                  <h3>{mountain.name}</h3>
                  <img src={mountain.img} alt={mountain.name} />
                </span>
              </div>
            );
          })
        }
      </div>
    </>
  );
}



