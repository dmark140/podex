import React from "react";
import Cards from "./cards";
import PageControl from "./pageControl";
import { URLSearchParams } from "url";
import { useParams } from "next/navigation";

interface Pokemons {
  name: string;
  url: string;
}

const Main = async ({
  start,
  end,
  page,
}: {
  start: number;
  end: number;
  page: number;
}) => {
  // urlParams.get();
  // const page: string | undefined = params.invoiceId;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${end}`
  );
  console.log(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      start === undefined ? 0 : 0
    }&limit=15`
  );
  const p = await res.json();
  const x: Pokemons[] = p.results;

  return (
    <>
      <div className="ml-6">
        <h1 className="text-4xl font-bold">Pokedex</h1>
        <p className="text-slate-500">
          this is a list of your favourite pokemon base on pokeapi.co
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-2">
        {x.map((items, i) => (
          <div key={i}>
            <Cards items={items} />
          </div>
        ))}
      </div>
      <div className="w-full my-5">
        <PageControl />
      </div>
    </>
  );
};
export default Main;
