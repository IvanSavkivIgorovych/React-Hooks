import React, { useState } from "react";

export const Car = () => {
  const [car, setCar] = useState({
    brand: "VAZ",
    model: "21074",
    year: "2008",
    color: "darkgreen",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "red" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        I have a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateColor}>Red</button>
    </>
  );
};
