import React from "react";

function Platform({ dark }) {
  return (
    <div
      className={`${
        dark && "dark:bg-black dark:text-white"
      } text-sm  rounded-xl p-4 bg-white text-black `}
    >
      <div className="flex justify-between mb-2 ">
        <span>Top Platform </span>
        <button className="text-[#34CAA5]">See All</button>
      </div>
      <div className="gap-3 flex flex-col">
        <div className="flex flex-col gap-2">
          <span className="font-medium">Book Bazaar</span>
          <div className="w-full h-2 rounded-full  flex items-center bg-[#F5F5F5]">
            <div className="w-3/5 h-2 rounded-full bg-[#6160DC]"></div>
          </div>
          <div className="flex justify-between text-[#9CA4AB]">
            <span>$2,500,000</span>
            <span>+15%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Artisan Aisle</span>
          <div className="w-full h-2 rounded-full  flex items-center bg-[#F5F5F5]">
            <div className="w-2/5 h-2 rounded-full bg-[#54C5EB]"></div>
          </div>
          <div className="flex justify-between text-[#9CA4AB]">
            <span>$1,800,000</span>
            <span>+10%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Toy Troop</span>
          <div className="w-full h-2 rounded-full  flex items-center bg-[#F5F5F5]">
            <div className="w-1/4 h-2 rounded-full bg-[#FFB74A]"></div>
          </div>
          <div className="flex justify-between text-[#9CA4AB]">
            <span>$1,200,000</span>
            <span>+8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
