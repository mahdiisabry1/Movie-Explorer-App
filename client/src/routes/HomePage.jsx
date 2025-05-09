import React from "react";
import Featured from "../components/Featured";
import Trending from "../components/Trending";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { trendingRef } = useOutletContext();

  return (
    <>
      <Featured />
      <div className="mt-8" ref={trendingRef}>
        <Trending />
      </div>
    </>
  );
};

export default HomePage;
