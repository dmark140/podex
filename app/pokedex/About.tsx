import React from "react";

interface Aboutss {
  species: {
    name: string;
  };
}
export default function About({ Abouts }: { Abouts: Array<Aboutss> }) {
  console.log(Abouts);
  return <div>About</div>;
}
