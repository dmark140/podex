import React from "react";

interface Aboutx {
  species: {
    name: string;
  };
}
export default function About({
  Abouts,
}: {
  Abouts: {
    species: {
      name: string;
      url: string;
    };
  };
}) {
  console.log(Abouts);
  return (
    <div>
      <div className="flex mx-auto w-fit">
        <div className="stats ">
          <div className="stat">
            <div className="stat-title mx-auto">Height</div>
            <div className="stat-value">89,400</div>
          </div>
        </div>
        <div className="stats ">
          <div className="stat">
            <div className="stat-title mx-auto">Weight</div>
            <div className="stat-value">89,400</div>
          </div>
        </div>
      </div>
    </div>
  );
}
