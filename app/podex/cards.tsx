import Image from "next/image";
import React from "react";

export default function cards({
  items,
}: {
  items: {
    name: string;
    url: string;
  };
}) {
  let parts = items.url.split("/");

  return (
    <div className="w-fit">
      <div className="card w-32 bg-base-100 ">
        <figure className="">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parts[6]}.png`}
            alt=""
            width={96}
            height={96}
            className="rounded-xl "
            // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </figure>
        <div className=" items-center text-center">
          <h1 className="text-xl font-semibold">{items.name}</h1>
          <h1 className="text-sm ">{parts[6]}</h1>
        </div>
      </div>
    </div>
  );
}
