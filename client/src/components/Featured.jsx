import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Featured = () => {
  return (
    <>
      <div className="w-full h-[570px] relative overflow-hidden border-[var(--border-clr)]">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4NIG3nWUeVJNnXUb68P235dwUNI2Z7klIc_xF9l4G6wD84FS4YBiUqODD-fG6tiYxPAbL1LEvIHhSPYliCcxrGB0ii2UsLRQO3NzCEok-ujxlumqvIu-PvD4ncKQGaMWN2KelkPmoQ64/s1600/slides1.jpg"
          alt="contain"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute right-0 bg-black/75 h-full w-2/5 shadow-2xl p-4">
          <div className="p-4 text-white text-4xl font-bold">
            <h1>The Lone Ranger</h1>
          </div>
          <div className="p-4 text-white text-sm font-bold">
            <h4>2025</h4>
            <h4>Action/Drama/Western/Thriller</h4>
          </div>
          <p className="p-4 text-amber-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            praesentium corrupti ut vitae aliquid tempora perspiciatis aliquam
            asperiores aspernatur optio, veniam rem hic exercitationem facere
            esse?
          </p>
          <div className="p-4 text-white text-sm font-bold">
            <h4>
              IMDB Rating: <span className="text-amber-200">6.0/10</span>
            </h4>
            <h3>
              Trailer - <span className="text-red-500">Youtube</span>
            </h3>
          </div>
          <div className="p-4 text-white text-sm font-bold">
            <button className="px-5 py-2  border-2">More..</button>
          </div>
        </div>
        <div className="flex items-center absolute right-0 bottom-0 text-stone-50 gap-1 m-2">
          <div className="p-6 text-2xl bg-gray-600 hover:bg-gray-400 hover:text-black">
            <FaArrowLeft />
          </div>
          <div className="p-6 text-2xl bg-gray-600 hover:bg-gray-400 hover:text-black">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
