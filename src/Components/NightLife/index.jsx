import React from "react";

//components
import NightLifeCarousel from "./NightLifeCarousel";

function NightLife() {
  return (
    <div>
      <h1 className="test-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Nightlife Restaurants in Chennai
      </h1>
      <NightLifeCarousel />
    </div>
  );
}

export default NightLife;