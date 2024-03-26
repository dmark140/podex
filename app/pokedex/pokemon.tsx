"use client";
import React, { useState } from "react";
import PropsStats from "./stats";

export default function Pokemon({ Items }: { Items: { stats: Array<Stats> } }) {
  const [SelectedTab, setSelectedTab] = useState(0);
  const tabList = ["Details", "Types", "Stats"];
  const OnClick = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <div role="tablist" className="tabs ">
      {tabList.map((e, i) => (
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
          <div role="tabpanel" className="tab-content bg-base-100  p-4">
            <PropsStats Stats={Items.stats} />
          </div>
        </>
      ))}
    </div>
  );
}
