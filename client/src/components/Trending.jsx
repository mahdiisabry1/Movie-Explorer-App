import React from "react";
import MovieGrid from "./MovieGrid";

const Trending = () => {
  return (
    <>
      <div className="flex w-full gap-5">
        <div className="w-4/5 flex flex-col">
          <div className="font-bold bg-[var(--base-rev)] text-[var(--text-rev)] p-3">
            Trending Movies
          </div>
          <div className="w-full mt-3 mb-3">
            <MovieGrid />
          </div>
        </div>
        <div className="w-1/5 flex flex-col">
          <div className="bg-[var(--base-rev)] text-[var(--text-rev)] p-3">
            Filter
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
