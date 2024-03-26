import React from "react";
import Pokemon from "./pokemon";

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Items {
  stats: Stats[];
}

const Pokedex = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/14");
  const p = await res.json();
  const x: Items = { stats: p.stats };
  return <div>{x && <Pokemon Items={x} />}</div>;
};

export default Pokedex;
