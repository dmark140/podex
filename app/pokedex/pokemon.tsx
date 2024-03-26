"use client";
import React, { useState } from "react";
import PropsStats from "./stats";
import About from "./About";
import ITypes from "./iTypes";
interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
interface Abouts {
  species: {
    name: string;
    url: string;
  };
}

export default function Pokemon({
  Items,
}: {
  Items: {
    stats: Array<Stats>;
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
  };
}) {
  const [SelectedTab, setSelectedTab] = useState(0);
  const tabList = ["Details", "Types", "Stats"];
  const OnClick = (index: number) => {
    setSelectedTab(index);
  };
  const about: Abouts = {
    species: Items.species,
  };

  return (
    <div role="" className=" ">
      <>
        {/* {tabList.map((e, i) => (
        <>
          <input
            key={i}
            type="radio"
            name="my_tabs_2"
            role="tab"
            className={
              SelectedTab === i
                ? "tab font-bold"
                : "tab font-bold text-neutral-400"
            }
            aria-label={e}
            checked={SelectedTab === i}
            onClick={() => OnClick(i)}
            id={i + ""}
          />
            
        </>
      ))} */}
      </>

      <div className="w-[300px] h-[300px] mx-auto  relative mt-20">
        <img src={Items.sprites} className="w-[300px] center" />
      </div>
      <ITypes Type={Items.types} />
      <About Abouts={about} />
      <div className="mx-8">
        <PropsStats Stats={Items.stats} />
      </div>
    </div>
  );
}
