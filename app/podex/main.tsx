import React from "react";
import Cards from "./cards";

interface Pokemons {
  name: string;
  url: string;
}
const Main = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const p = await res.json();
  const x: Pokemons[] = p.results;
  return (
    <>
      <div className="ml-6">
        <h1 className="text-4xl font-bold">Pokedex</h1>
        <p className="text-slate-500">
          this is a list of your favourit pokemon base on pokeapi.co
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-2">
        {x.map((items) => (
          <Cards items={items} />
        ))}
      </div>
      <div className="w-full my-5">
        <div className="join mx-auto flex w-fit">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </>
  );
};

export default Main;
