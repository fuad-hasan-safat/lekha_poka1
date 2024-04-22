"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Logo from "../common/Logo";
import SobLekha from "./sobLekhaDropDown";


const MyNavbar = () => {

  const [selectedNav, setSelectedNav] = useState("");

  const [isSearchActive, setIsSearchActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };



  return (
    <header className="header">
      <div className="container">
        <div className={`fixed z-[999] bg-white-800 flex flex-row items-center  shadow-dark-strong h-[92]  w-full bg-white`}
        >
          {/* Logo */}
          <div className="row-span-3">
            <Logo
              icon="/images/logo1.png"
              width={655}
              height={92}
              alt="LekhaPoka logo"
            />

          </div>

          <div className="row-span-12">

            <div
              className={` space-x-3 text-black text-[18px]  place-content-center`}
            >
              {/* Buttons */}
              <ul
                className={`flex flex-row space-x-6  kangsa-font transition-all ease-in-out duration-1000 ${isSearchActive ? "ml-[400px]" : "ml-[600px]"
                  }`}
              >
                <li
                  onClick={() => setSelectedNav("procchod")}
                  className={`${selectedNav === "procchod"
                    ? "text-[#F9A106] font-semibold underline"
                    : ""
                    }`}
                >
                  <Link href="/">প্রচ্ছদ</Link>
                </li>
                <li
                  onClick={() => {
                    setSelectedNav("soblekha")
                  }}

                >
                  <SobLekha sobClass={`${selectedNav === "soblekha"
                    ? "text-[#F9A106] font-semibold underline"
                    : "text-black"}`} />
                </li>
                <li
                  onClick={() => setSelectedNav("bistarito")}
                  className={`${selectedNav === "bistarito"
                    ? "text-[#F9A106] font-semibold underline"
                    : ""
                    }`}
                >
                  <Link href="#">বিস্তারিত</Link>
                </li>
                <li
                  onClick={() => setSelectedNav("zogazog")}
                  className={`${selectedNav === "zogazog"
                    ? "text-[#F9A106] font-semibold underline"
                    : ""
                    }`}
                >
                  <Link href="/contacts">যোগাযোগ</Link>
                </li>
                <li
                  onClick={() => setSelectedNav("amader_somporke")}
                  className={` w-[130px] ${selectedNav === "amader_somporke"
                    ? "text-[#F9A106] font-semibold underline"
                    : ""
                    }`}
                >
                  <Link href="#">আমাদের সম্পর্কে</Link>
                </li>
                <li className="relative flex flex-row place-content-center ">
                  <Image
                    src="/images/svgs/search.svg"
                    height={50}
                    width={50}
                    alt=""
                    className={` cursor-pointer`}
                    onClick={() => setIsSearchActive(true)}
                  />

                  <input
                    className={`w-[200px] bg-transparent text-black py-2 rounded-md focus:outline-none  ${isSearchActive ? "visible" : "hidden"
                      }`}
                    type="text"
                    placeholder=" অনুসন্ধান..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {isSearchActive && (
                    <FontAwesomeIcon
                      icon={faList}
                      className="absolute text-gray-500 text-lg px-2 cursor-pointer ml-auto mt-[10px] right-5" // Right-aligned
                      onClick={() => setIsSearchActive(false)}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
