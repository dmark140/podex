import React from "react";

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export default function PropsStats({ Stats }: { Stats: Array<Stats> }) {
  return (
    <div className="text-xs">
      {Stats.map((stat, index) => (
        <div key={index} className="flex  pb-2">
          <p className="w-28 whitespace-nowrap text-gray-400">
            {stat.stat.name == "special-attack"
              ? "Sp.Atk"
              : stat.stat.name == "special-defense"
              ? "Sp.Def"
              : stat.stat.name}
          </p>
          <p className="w-14 whitespace-nowrap">{stat.base_stat}</p>

          <progress
            className="progress progress-info w-full mt-2"
            value={stat.base_stat}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
}
