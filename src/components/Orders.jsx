import React from "react";
import Image from "next/image";
import view from "../../public/assets/view.svg";

import { orders } from "@/data";
function Orders({ dark }) {
  return (
    <div
      className={`${
        dark && "dark:text-white dark:bg-black dark:border"
      } border-red-500 px-2 lg:w-2/3 rounded-xl  bg-white text-black `}
    >
      <div className="flex justify-between p-2">
        <span>Last Orders</span>
        <button className="text-[#34CAA5]">See All</button>
      </div>
      <div className="text-[#9CA4AB] text-sm hidden justify-between p-2   md:grid   md:grid-cols-6">
        <span className=" col-start-1 col-span-2">Name</span>
        <span className="md:inline-block hidden">Date</span>
        <span className="md:inline-block hidden">Amount</span>
        <span>Status</span>
        <span>Invoice</span>
      </div>
      <div className="flex flex-col md:gap-2 md:mb-2  font-light px-2 text-xs">
        {orders.map((order, index) => (
          <div key={index}>
            <hr />
            <div className="  items-center  flex justify-between w-full pt-2    md:grid  md:grid-cols-6">
              <div className="flex gap-2 col-start-1 col-span-2  items-center w-1/2 md:w-auto ">
                <Image
                  className="h-6 w-6 rounded-full"
                  src={require(`../../public/assets/Person${index + 1}.svg`)}
                ></Image>
                <span>{order.name}</span>
              </div>
              <span className="text-[#9CA4AB] md:inline-block hidden">
                {order.date}
              </span>
              <span className="md:inline-block hidden">{order.amount}</span>
              <div
                className={`${
                  order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
                }`}
              >
                {order.status}
              </div>
              <span className="md:hidden">{order.amount}</span>
              <div className="hidden md:flex gap-2    ">
                <Image
                  className="text-white"
                  src={view}
                  alt="view-icon"
                ></Image>
                <button className="">View</button>
              </div>
            </div>
            <div className="flex md:hidden justify-between py-2">
              <span className="text-[#9CA4AB]">{order.date}</span>
              {/* <span>{order.amount}</span> */}
              <div className="flex gap-2    ">
                <Image
                  className="text-white"
                  src={view}
                  alt="view-icon"
                ></Image>
                <button className="">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
