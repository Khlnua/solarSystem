import React from "react";

export const Planets = ({ solar }) => {
  const { name, orbit, orbitPeriod, planetSize, imageUrl, rotationPeriod } =
    solar;

  return (
    <div
      className="planetOrbits"
      style={{
        animationName: "circle",
        animationDuration: orbitPeriod,
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        width: orbit,
        height: orbit,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageUrl}
          alt=""
          className="orbit"
          style={{
            height: planetSize,
            width: planetSize,
            animationName: "planetrotate",
            animationDuration: rotationPeriod,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};
