import React from "react";
import Image from "next/image";
import view from "../../public/assets/view.svg";
import Person1 from "../../public/assets/Person1.svg";
import Person2 from "../../public/assets/Person2.svg";
import Person3 from "../../public/assets/Person3.svg";
import Person4 from "../../public/assets/Person4.svg";
import Person5 from "../../public/assets/Person5.svg";
import Icon1 from "../../public/assets/Icon1.svg";
import Icon2 from "../../public/assets/Icon2.svg";
import Icon3 from "../../public/assets/Icon3.svg";
import Icon4 from "../../public/assets/Icon4.svg";

import Rise from "../../public/assets/rise.svg";
import Drop from "../../public/assets/drop.svg";

import Up1 from "../../public/assets/up1.svg";
import Down1 from "../../public/assets/down1.svg";

function Summary({ dark }) {
  return (
    <div className=" lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 md:px-0 md:pt-2 md:pr-2 text-xs">
      <div
        className={`${
          dark && "dark:bg-black dark:text-white"
        }  bg-white text-black  justify-between   border  rounded-xl flex flex-col gap-3 p-2`}
      >
        <div className="flex justify-between">
          <Image className="lg:w-8" src={Icon1} alt="view-icon"></Image>
          <Image className="lg:w-20 xl:w-24" src={Rise} alt="view-icon"></Image>
        </div>
        <div className="flex flex-col gap-1 ">
          <span className="text-[#9CA4AB]">Total Order</span>
          <span className="font-semibold">350</span>
        </div>
        <div className="flex lg:flex-col xl:flex-row justify-between">
          <span className="text-[#34CAA5] flex gap-1">
            <Image className="" src={Up1} alt="view-icon"></Image>
            <span>23.5%</span>
          </span>
          <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
        </div>
      </div>
      <div
        className={`${
          dark && " dark:bg-black dark:text-white"
        } border rounded-xl flex  bg-white text-black  justify-between   flex-col gap-3 p-2`}
      >
        <div className="flex justify-between">
          <Image className="lg:w-8" src={Icon2} alt="view-icon"></Image>
          <Image className="lg:w-20 xl:w-24" src={Drop} alt="view-icon"></Image>
        </div>
        <div className="flex flex-col gap-1  ">
          <span className="text-[#9CA4AB]">Total Refund</span>
          <span className="font-semibold">270</span>
        </div>
        <div className="flex lg:flex-col xl:flex-row justify-between">
          <span className="text-[#ED544E] flex gap-1">
            <Image className="" src={Down1} alt="view-icon"></Image>
            <span>23.5%</span>
          </span>
          <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
        </div>
      </div>
      <div
        className={`${
          dark && " dark:bg-black dark:text-white"
        } border rounded-xl flex  bg-white text-black  justify-between   flex-col gap-3 p-2`}
      >
        <div className="flex justify-between">
          <Image className="lg:w-8" src={Icon3} alt="view-icon"></Image>
          <Image className="lg:w-20 xl:w-24" src={Drop} alt="view-icon"></Image>
        </div>
        <div className="flex flex-col gap-1 ">
          <span className="text-[#9CA4AB]">Average Sales </span>
          <span className="font-semibold">1567</span>
        </div>
        <div className="flex lg:flex-col xl:flex-row justify-between">
          <span className="text-[#ED544E] flex gap-1">
            <Image className="" src={Down1} alt="view-icon"></Image>
            <span>23.5%</span>
          </span>
          <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
        </div>
      </div>
      <div
        className={`${
          dark && " dark:bg-black dark:text-white"
        } border rounded-xl flex  bg-white text-black  justify-between   flex-col gap-3 p-2`}
      >
        <div className="flex justify-between">
          <Image className="lg:w-8" src={Icon4} alt="view-icon"></Image>
          <Image className="lg:w-20 xl:w-24" src={Rise} alt="view-icon"></Image>
        </div>
        <div className="flex flex-col gap-1 ">
          <span className="text-[#9CA4AB]">Total Income </span>
          <span className="font-semibold">$350.000</span>
        </div>
        <div className="flex lg:flex-col xl:flex-row justify-between">
          <span className="text-[#34CAA5] flex gap-1">
            <Image className="" src={Up1} alt="view-icon"></Image>
            <span>23.5%</span>
          </span>
          <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
