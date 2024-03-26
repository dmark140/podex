"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const PageControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page =
    searchParams.get("page") === null ? 1 : Number(searchParams.get("page"));
  console.log(page);
  console.log(searchParams.get("page"));
  const perPage = 20;
  return (
    <div>
      <div className="join mx-auto flex w-fit">
        <button
          className="join-item btn"
          onClick={() => {
            router.push(`/?page=${page <= 1 ? 1 : page - 1}`);
          }}
        >
          «
        </button>
        <button className="join-item btn">{page}</button>
        <button
          className="join-item btn"
          onClick={() => {
            router.push(`/?page=${page + 1}`);
          }}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default PageControl;
