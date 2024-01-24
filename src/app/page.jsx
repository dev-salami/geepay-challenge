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
import logo from "../../public/assets/logo.svg";
import Search from "../../public/assets/search.svg";
import Calendar from "../../public/assets/calendar.svg";
import Notification from "../../public/assets/notification.svg";
import PP from "../../public/assets/pp.svg";
// import { MdOutlineCalendarMonth } from "react-icons/md";
import NavCon1 from "../../public/assets/NavCon1.svg";
import NavCon2 from "../../public/assets/NavCon2.svg";
import NavCon3 from "../../public/assets/NavCon3.svg";
import NavCon4 from "../../public/assets/NavCon4.svg";
import NavCon5 from "../../public/assets/NavCon5.svg";
import NavCon6 from "../../public/assets/NavCon6.svg";

import { orders } from "@/data";
export default function Home() {
  return (
    <section className="dark:bg-black bg-[#E5EAEF] min-h-screen">
      <nav className="flex justify-between h-16 border">
        <div className="flex items-center p-2 gap-3">
          <Image className="" src={logo} alt="logo-icon"></Image>
          <span>Dashboard</span>
        </div>
        <div className="w-2/3 justify-between items-center flex">
          <div className="border rounded-full h-fit flex px-2 gap-1 items-center border-[#9CA4AB]">
            <label htmlFor="search" className="cursor-text">
              <Image className="" src={Search} alt="logo-icon"></Image>
            </label>

            <input
              id="search"
              type="text"
              placeholder="Search"
              className="rounded-full bg-transparent p-1 text-sm dark:bg-black placeholder:bg-transparent border-none outline-none"
            />
          </div>

          <div className="flex gap-2">
            {/* <MdOutlineCalendarMonth /> */}
            <span className="text-sm md:text-base">November 15, 2023</span>
          </div>
          <Image
            className="bg bg-[#E5EAEF] rounded-full"
            src={Notification}
            alt="calendar-icon"
          ></Image>
          <div className="flex gap-2 text-sm pr-2">
            <Image className="" src={PP} alt="profile-pic"></Image>
            <div className="flex flex-col text-end ">
              <span>Justin Bergson</span>
              <span className="text-[#9CA4AB]">Justin@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
      <section className="flex w-full  ">
        <aside className=" w-14 border-r border-green-400 flex  items-center flex-col">
          <button>
            <Image
              className="pt-0 dark:border dark:w-3/5 dark:rounded-lg dark:mx-auto dark:mt-4 dark:mb-2"
              src={NavCon1}
              alt="Icon1"
            ></Image>
          </button>
          <button>
            <Image className="pt-0" src={NavCon2} alt="Icon2"></Image>
          </button>
          <button>
            <Image className="pt-0" src={NavCon3} alt="Icon3"></Image>
          </button>
          <button>
            <Image className="pt-4" src={NavCon4} alt="Icon4"></Image>
          </button>
          <button>
            <Image className="pt-4" src={NavCon5} alt="Icon5"></Image>
          </button>
          <button>
            <Image className="pt-4" src={NavCon6} alt="Icon6"></Image>
          </button>
        </aside>
        <main className="flex flex-col w-full gap-4  ">
          <div className=" flex gap-4 flex-col lg:flex-row w-full">
            <div className="border border-red-500 lg:w-2/3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              eligendi omnis deleniti eius quos repellat, fuga tempora optio
              distinctio quaerat.
            </div>
            <div className=" lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 text-xs">
              <div className="dark:bg-black bg-white text-black dark:text-white   border  rounded-xl flex flex-col gap-3 p-2">
                <div className="flex justify-between">
                  <Image className="lg:w-8" src={Icon1} alt="view-icon"></Image>
                  <Image
                    className="lg:w-20 xl:w-24"
                    src={Rise}
                    alt="view-icon"
                  ></Image>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[#9CA4AB]">Total Order</span>
                  <span className="font-semibold">350</span>
                </div>
                <div className="flex lg:flex-col xl:flex-row justify-between">
                  <span className="text-[#34CAA5] flex gap-1">
                    <Image className="" src={Up1} alt="view-icon"></Image>
                    <span>23.5%</span>
                  </span>
                  <span className="text-[#9CA4AB] pl-1 ">
                    vs. previous month
                  </span>
                </div>
              </div>
              <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white   flex-col gap-3 p-2">
                <div className="flex justify-between">
                  <Image className="lg:w-8" src={Icon2} alt="view-icon"></Image>
                  <Image
                    className="lg:w-20 xl:w-24"
                    src={Drop}
                    alt="view-icon"
                  ></Image>
                </div>
                <div className="flex flex-col  ">
                  <span className="text-[#9CA4AB]">Total Refund</span>
                  <span className="font-semibold">270</span>
                </div>
                <div className="flex lg:flex-col xl:flex-row justify-between">
                  <span className="text-[#ED544E] flex gap-1">
                    <Image className="" src={Down1} alt="view-icon"></Image>
                    <span>23.5%</span>
                  </span>
                  <span className="text-[#9CA4AB] pl-1 ">
                    vs. previous month
                  </span>
                </div>
              </div>
              <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white  flex-col gap-3 p-2">
                <div className="flex justify-between">
                  <Image className="lg:w-8" src={Icon3} alt="view-icon"></Image>
                  <Image
                    className="lg:w-20 xl:w-24"
                    src={Drop}
                    alt="view-icon"
                  ></Image>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[#9CA4AB]">Average Sales </span>
                  <span className="font-semibold">1567</span>
                </div>
                <div className="flex lg:flex-col xl:flex-row justify-between">
                  <span className="text-[#ED544E] flex gap-1">
                    <Image className="" src={Down1} alt="view-icon"></Image>
                    <span>23.5%</span>
                  </span>
                  <span className="text-[#9CA4AB] pl-1 ">
                    vs. previous month
                  </span>
                </div>
              </div>
              <div className="border rounded-xl flex dark:bg-black bg-white text-black dark:text-white  flex-col gap-3 p-2">
                <div className="flex justify-between">
                  <Image className="lg:w-8" src={Icon4} alt="view-icon"></Image>
                  <Image
                    className="lg:w-20 xl:w-24"
                    src={Rise}
                    alt="view-icon"
                  ></Image>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[#9CA4AB]">Total Income </span>
                  <span className="font-semibold">$350.000</span>
                </div>
                <div className="flex lg:flex-col xl:flex-row justify-between">
                  <span className="text-[#34CAA5] flex gap-1">
                    <Image className="" src={Up1} alt="view-icon"></Image>
                    <span>23.5%</span>
                  </span>
                  <span className="text-[#9CA4AB] pl-1 ">
                    vs. previous month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4  flex-col lg:flex-row ">
            <div className="dark:border border-red-500 px-2 lg:w-2/3 rounded-xl dark:bg-black bg-white text-black dark:text-white ">
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
                          src={require(`../../public/assets/Person${
                            index + 1
                          }.svg`)}
                        ></Image>
                        <span>{order.name}</span>
                      </div>
                      <span className="text-[#9CA4AB] md:inline-block hidden">
                        {order.date}
                      </span>
                      <span className="md:inline-block hidden">
                        {order.amount}
                      </span>
                      <div
                        className={`${
                          order.status === "Paid"
                            ? "text-[#34CAA5]"
                            : "text-[#ED544E]"
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
            <div className="border rounded-xl lg:w-1/3 md:mr-2 md:mb-0 mb-8   ">
              <div className="mr-2 text-sm dark:bg-black rounded-xl p-4 bg-white text-black dark:text-white">
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
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
