import React from "react";
interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
const colours: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
export default function ITypes({ Type }: { Type: Array<Types> }) {
  console.log(Type);
  return (
    <div className="w-fit mx-auto flex justify-evenly gap-4">
      {Type.map((e, i) => (
        <div
          key={i}
          style={{ backgroundColor: colours[e.type.name] }}
          className=" text-xl font-semibold text-white p-1 mt-2 w-fit px-2 rounded-md"
        >
          {e.type.name}
        </div>
      ))}
    </div>
  );
}
