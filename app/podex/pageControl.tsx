"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const PageControl = () => {
  const router = useRouter();
  const [per_Page, setper_Page] = useState(12);
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
            router.push(
              `/?page=${page <= 1 ? 1 : page - 1}&per_page=${per_Page}`
            );
          }}
        >
          «
        </button>
        <button className="join-item btn">{page}</button>
        <button
          className="join-item btn"
          onClick={() => {
            router.push(`/?page=${page + 1}&per_page=${per_Page}`);
          }}
        >
          »
        </button>
      </div>

      <div className="w-fit mx-auto mt-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text-alt">Pokemon Per Page</span>
          </div>

          <div className="join">
            <input
              className="input input-bordered join-item"
              value={per_Page}
              min={12}
              type="number"
              onChange={(e) => setper_Page(Number(e.target.value))}
            />
            <button
              className="btn join-item"
              onClick={() => {
                router.push(`/?page=${page}&per_page=${per_Page}`);
              }}
            >
              Search
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PageControl;
