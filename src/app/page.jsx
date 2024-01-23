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

import { orders } from "@/data";
export default function Home() {
  return (
    <section className="flex w-full min-h-screen dark:bg-black bg-[#E5EAEF]">
      <aside className=" w-16 border-r border-green-400"></aside>
      <main className="flex flex-col w-full gap-4  ">
        <div className="border border-blue-500 flex gap-4 flex-col lg:flex-row w-full">
          <div className="border border-red-500 lg:w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            eligendi omnis deleniti eius quos repellat, fuga tempora optio
            distinctio quaerat.
          </div>
          <div className="border border-red-500 lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 text-xs">
            <div className="dark:bg-black bg-white text-black dark:text-white   border  rounded-xl flex flex-col gap-3 p-2">
              <div className="flex justify-between">
                <Image className="" src={Icon1} alt="view-icon"></Image>
                <Image className="" src={Rise} alt="view-icon"></Image>
              </div>
              <div className="flex flex-col">
                <span>Total Order</span>
                <span>350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#34CAA5] flex gap-1">
                  <Image className="" src={Up1} alt="view-icon"></Image>
                  <span>23.5%</span>
                </span>
                <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
              </div>
            </div>
            <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white   flex-col gap-3 p-2">
              <div className="flex justify-between">
                <Image className="" src={Icon2} alt="view-icon"></Image>
                <Image className="" src={Drop} alt="view-icon"></Image>
              </div>
              <div className="flex flex-col">
                <span>Total Order</span>
                <span>350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#ED544E] flex gap-1">
                  <Image className="" src={Down1} alt="view-icon"></Image>
                  <span>23.5%</span>
                </span>
                <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
              </div>
            </div>
            <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white  flex-col gap-3 p-2">
              <div className="flex justify-between">
                <Image className="" src={Icon3} alt="view-icon"></Image>
                <Image className="" src={Drop} alt="view-icon"></Image>
              </div>
              <div className="flex flex-col">
                <span>Total Order</span>
                <span>350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#ED544E] flex gap-1">
                  <Image className="" src={Down1} alt="view-icon"></Image>
                  <span>23.5%</span>
                </span>
                <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
              </div>
            </div>
            <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white  flex-col gap-3 p-2">
              <div className="flex justify-between">
                <Image className="" src={Icon4} alt="view-icon"></Image>
                <Image className="" src={Rise} alt="view-icon"></Image>
              </div>
              <div className="flex flex-col">
                <span>Total Order</span>
                <span>350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#34CAA5] flex gap-1">
                  <Image className="" src={Up1} alt="view-icon"></Image>
                  <span>23.5%</span>
                </span>
                <span className="text-[#9CA4AB] pl-1 ">vs. previous month</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-4  flex-col lg:flex-row ">
          <div className="dark:border border-red-500 p-2 lg:w-2/3 rounded-xl dark:bg-black bg-white text-black dark:text-white ">
            <div className="flex justify-between p-2">
              <span>Last Orders</span>
              <button className="text-[#34CAA5]">See All</button>
            </div>
            <div className="text-[#9CA4AB] text-sm   grid grid-cols-5">
              <span>Name</span>
              <span>Date</span>
              <span>Amount</span>
              <span>Status</span>
              <span>Invoice</span>
            </div>
            <div className="flex flex-col gap-3 font-light p-2">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className=" text-xs items-center  grid grid-cols-5 "
                >
                  <div className="flex gap-2  items-center">
                    <Image
                      className="h-6 w-6 rounded-full"
                      src={require(`../../public/assets/Person${
                        index + 1
                      }.svg`)}
                    ></Image>
                    <span>{order.name}</span>
                  </div>
                  <span className="text-[#9CA4AB]">{order.date}</span>
                  <span>{order.amount}</span>
                  <span
                    className={`${
                      order.status === "Paid"
                        ? "text-[#34CAA5]"
                        : "text-[#ED544E]"
                    }`}
                  >
                    {order.status}
                  </span>
                  <span className="flex gap-2">
                    <Image
                      className="text-white"
                      src={view}
                      alt="view-icon"
                    ></Image>
                    <button>View</button>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-red-500 lg:w-1/3 p-2 rounded-xl  ">
            <div className="mr-2 text-sm dark:bg-black bg-white text-black dark:text-white">
              <div className="flex justify-between p-2">
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
                    <span>+15%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Toy Troop</span>
                  <div className="w-full h-2 rounded-full  flex items-center bg-[#F5F5F5]">
                    <div className="w-1/4 h-2 rounded-full bg-[#FFB74A]"></div>
                  </div>
                  <div className="flex justify-between text-[#9CA4AB]">
                    <span>$1,200,000</span>
                    <span>+15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
