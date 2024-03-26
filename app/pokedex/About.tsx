import React from "react";

interface Aboutx {
  species: {
    name: string;
  };
}
export default function About({
  Abouts,
  weight,
  height,
}: {
  Abouts: {
    species: {
      name: string;
      url: string;
    };
  };
  weight: number;
  height: number;
}) {
  console.log(Abouts);
  return (
    <div>
      <div className="flex mx-auto w-fit">
        <div className="stats ">
          <div className="stat">
            <div className="stat-title mx-auto">Height</div>
            <div className="stat-value">{height}ft</div>
          </div>
        </div>
        <div className="stats ">
          <div className="stat">
            <div className="stat-title mx-auto">Weight</div>
            <div className="stat-value">{weight}G</div>
          </div>
        </div>
      </div>
    </div>
  );
}
