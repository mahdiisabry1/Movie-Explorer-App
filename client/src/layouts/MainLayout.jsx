import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const trendingRef = useRef(null);

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="px-4 md:px-8 lg:px-24 lx:px-32 2xl:px-34">
        <Navbar onTrendingClick={scrollToTrending} />
        <Outlet context={{ trendingRef }} />
      </div>
    </>
  );
};

export default MainLayout;
