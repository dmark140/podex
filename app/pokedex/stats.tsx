import React from "react";
interface Statsus {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Stats {
  stats: Statsus[];
}

export default function PropsStats({ Stats }: { Stats: Array<Stats> }) {
  return <div>Stats</div>;
}
