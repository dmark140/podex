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
interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface Items {
  stats: Stats[];
  species: {
    name: string;
    url: string;
  };
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  };
  types: Types[];
  sprites: string;
}

const Pokedex = async ({
  searchParams,
}: {
  searchParams: {
    id: number;
  };
}) => {
  console.log(searchParams);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchParams.id}`
  );
  const p = await res.json();
  console.log(p);
  const x: Items = {
    stats: p.stats,
    species: p.species,
    height: p.height,
    weight: p.weight,
    abilities: p.abilities,
    types: p.types,
    sprites: p.sprites.other.dream_world.front_default,
  };
  return <div>{x && <Pokemon Items={x} />}</div>;
};

export default Pokedex;
