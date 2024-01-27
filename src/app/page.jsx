"use client";
import Image from "next/image";
import { CiLight } from "react-icons/ci";
import logo from "../../public/assets/logo.svg";
import Search from "../../public/assets/search.svg";
import Calendar from "../../public/assets/calendar.svg";
import Notification from "../../public/assets/notification.svg";
import PP from "../../public/assets/pp.svg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import NavCon1 from "../../public/assets/NavCon1.svg";
import NavCon2 from "../../public/assets/NavCon2.svg";
import NavCon3 from "../../public/assets/NavCon3.svg";
import NavCon4 from "../../public/assets/NavCon4.svg";
import NavCon5 from "../../public/assets/NavCon5.svg";
import NavCon6 from "../../public/assets/NavCon6.svg";
import Light from "../../public/assets/light.svg";
import Dark from "../../public/assets/dark.svg";

import Stat from "@/components/Stat";
import Platform from "@/components/Platform";
import Orders from "@/components/Orders";
import Summary from "@/components/Summary";
import { useState } from "react";
export default function Home() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    console.log(dark);

    setDark((prev) => !prev);
    console.log(dark);
  };
  const toggleDark = () => {
    setDark(true);
  };
  const toggleLight = () => {
    setDark(false);
  };
  return (
    <section
      className={`${
        dark && " dark:bg-black dark:text-white"
      }  bg-[#E5EAEF] text-black  min-h-screen p`}
    >
      <nav className="flex justify-between h-16 border-b border-[#9CA4AB]">
        <div className="flex items-center p-2 gap-2">
          <Image className="" src={logo} alt="logo-icon"></Image>
          <span>Dashboard</span>
          {/* <ToggleSwitch checked={dark} onChange={toggleTheme} /> */}
        </div>
        <div className=" gap-4 items-center flex">
          <div className="border rounded-full h-fit hidden md:flex px-2 gap-1 items-center border-[#9CA4AB]">
            <label htmlFor="search" className="cursor-text">
              <Image className="" src={Search} alt="logo-icon"></Image>
            </label>

            <input
              id="search"
              type="text"
              placeholder="Search"
              className={`${
                dark && "dark:bg-black"
              } rounded-full bg-transparent p-1 text-xs   border-none outline-none`}
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <MdOutlineCalendarMonth size={25} />
            <span className="text-xs md:text-base ">November 15, 2023</span>
          </div>
          <Image
            className="md:block hidden bg-[#E5EAEF] rounded-full"
            src={Notification}
            alt="calendar-icon"
          ></Image>
          <div className="flex gap-2 text-xs pr-2">
            <Image className="" src={PP} alt="profile-pic"></Image>
            <div className="flex flex-col text-end ">
              <span>Justin Bergson</span>
              <span className="text-[#9CA4AB]">Justin@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
      <aside className=" h-14 border-r border-[#9CA4AB] flex sm:hidden justify-around  items-center flex-row">
        <button>
          <Image
            className={`${
              dark &&
              "dark:border dark:w-3/5 dark:rounded-lg dark:mx-auto dark:mt-4 dark:mb-2"
            }  `}
            src={NavCon1}
            alt="Icon1"
          ></Image>
        </button>
        <button>
          <Image className="" src={NavCon2} alt="Icon2"></Image>
        </button>
        <button>
          <Image className="" src={NavCon3} alt="Icon3"></Image>
        </button>
        <button>
          <Image className="" src={NavCon4} alt="Icon4"></Image>
        </button>
        <button>
          <Image className="" src={NavCon5} alt="Icon5"></Image>
        </button>
        <button>
          <Image className="" src={NavCon6} alt="Icon6"></Image>
        </button>
        <button onClick={toggleLight}>
          {!dark ? (
            <Image className="" src={Light} alt="dark-icon"></Image>
          ) : (
            <CiLight size={25} />
          )}
        </button>
        <button
          onClick={toggleDark}
          className={`${
            dark && "bg-[#34CAA5]"
          }  rounded-full  h-8 w-8 p-1 flex justify-center items-center`}
        >
          <Image className="" src={Dark} alt="dark-icon"></Image>
          {/* <MdDarkMode size={25} /> */}
        </button>
      </aside>
      <section className="flex w-full  ">
        <aside className=" w-14 border-r border-[#9CA4AB]  hidden sm:flex  items-center flex-col">
          <button>
            <Image
              className={`${
                dark &&
                "dark:border dark:w-3/5 dark:rounded-lg dark:mx-auto dark:mt-4 dark:mb-2"
              } pt-0 `}
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
          <button className="pb-3 pt-1" onClick={toggleLight}>
            {!dark ? (
              <Image className="" src={Light} alt="dark-icon"></Image>
            ) : (
              <CiLight size={25} />
            )}
          </button>
          <button
            onClick={toggleDark}
            className={`${
              dark && "bg-[#34CAA5]"
            }  rounded-full  h-8 w-8 p-1 flex justify-center items-center`}
          >
            <Image className="" src={Dark} alt="dark-icon"></Image>
            {/* <MdDarkMode size={25} /> */}
          </button>
        </aside>
        <main className="flex flex-col w-full gap-4  mb-4 pb-10  ">
          <div className=" flex gap-4 flex-col lg:flex-row w-full">
            <div
              className={`${
                dark && "dark:bg-black "
              } border border-red-500 lg:w-2/3 px-4 mt-2 mx-2 md:mx-0 md:ml-2  bg-white rounded-xl`}
            >
              <div className="flex justify-between pt-3">
                <span>Sales Trends</span>
                <div className={`flex gap-2 justify-center items-center `}>
                  <span>Sort By</span>
                  <select
                    className={`${
                      dark && "dark:bg-black dark:text-white"
                    } rounded-full p-2 border "`}
                    name="duration"
                    id="duration"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <Stat dark={dark} />
            </div>
            <Summary dark={dark} />
          </div>
          <div className=" flex flex-col gap-4 lg:flex-row mx-3 ">
            <Orders dark={dark} />
            <div className="border rounded-xl lg:w-1/3  md:mb-0   ">
              <Platform dark={dark} />
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
