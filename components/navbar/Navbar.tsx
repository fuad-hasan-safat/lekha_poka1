"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import SearchButton from "./SearchIcon";

const MyNavbar = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const iconl = 30;

  const [isSearchSelected, setIsSearchSelected] = useState(false);

  return (
    <>

      <div className="fixed z-[999] bg-white-800 flex items-center justify-between shadow-dark-strong h-[92]  w-full bg-white">
        {/* Logo */}

        <Logo
          icon="/images/logo1.png"
          width={655}
          height={92}
          alt="LekhaPoka logo"
        />


        <div className="font-KangshaMJ flex flex-row space-x-3 text-black text-[18px]  place-content-center mr-[100px]">
          {/* Buttons */}
          <div>
            <ul className="space-x-6 flex flex-wrap kangsa-font">
              <li
                onClick={() => setSelectedNav("procchod")}
                className={`${selectedNav === "procchod"
                  ? "text-yellow-400 font-semibold underline"
                  : ""
                  }`}
              >
                <Link href="/">প্রচ্ছদ</Link>
              </li>
              <li
                onClick={() => setSelectedNav("sob_lekha")}
                className={`${selectedNav === "sob_lekha"
                  ? "text-yellow-400 font-semibold underline"
                  : ""
                  }`}
              >
                <Link href="/">সব লেখা</Link>
              </li>
              <li
                onClick={() => setSelectedNav("bistarito")}
                className={`${selectedNav === "bistarito"
                  ? "text-yellow-400 font-semibold underline"
                  : ""
                  }`}
              >
                <Link href="#">বিস্তারিত</Link>
              </li>
              <li
                onClick={() => setSelectedNav("zogazog")}
                className={`${selectedNav === "zogazog"
                  ? "text-yellow-400 font-semibold underline"
                  : ""
                  }`}
              >
                <Link href="/contacts">যোগাযোগ</Link>
              </li>
              <li
                onClick={() => setSelectedNav("amader_somporke")}
                className={`${selectedNav === "amader_somporke"
                  ? "text-yellow-400 font-semibold underline"
                  : ""
                  }`}
              >
                <Link href="#">আমাদের সম্পর্কে</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <a href="#">
                  {
                    isSearchSelected ? <>
                      <div className="flex flex-row ">
                        <div className="transition duration-100 ease-in-out ... relative text-gray-600 focus-within:text-gray-400">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                          </div>
                          <input type="search" name="q" className=" py-2 text-sm shadow-4 text-white bg-transparent rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="অনুসন্ধান..." autoComplete="off" />
                          <div className="absolute inset-y-0 left-4 flex items-center  z-50">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                            <img
                          height={iconl}
                          width={iconl}
                          onClick={() => setIsSearchSelected(false)}
                          className="relative -right-[150px]"
                          src="/images/svgs/list.svg" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </> :
                      <>
                        <div >
                          <img
                            onClick={() => setIsSearchSelected(true)}
                            src="/images/svgs/search.svg" />
                        </div>
                      </>
                  }

                  {/* {!isSearchSelected ?
                    <img
                      height={60}
                      width={60}
                      onClick={() => setIsSearchSelected(true)}
                      src="/images/svgs/search.svg" /> : <>
                      <div className="flex flex-row">
                        <img
                          className="relative z-50 pr-4"
                          src="/images/svgs/search.svg" />
                        <input
                          className="absolute border-solid  border-transparent shadow-lg rounded-xl p-2 h-10 w-[300px] text-sm "
                          placeholder="           অনুসন্ধান"
                          type="text">
                        </input>
                        <img
                          height={iconl}
                          width={iconl}
                          onClick={() => setIsSearchSelected(false)}
                          className="relative -right-[150px]"
                          src="/images/svgs/list.svg" />
                      </div>
                    </>} */}
                </a>
              </li>
              {/* Add more buttons as needed */}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default MyNavbar;
