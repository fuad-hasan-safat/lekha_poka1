"use client";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import SearchButton from "./SearchIcon";

const MyNavbar = () => {
  const [selectedNav, setSelectedNav] = useState("");
  return (
    <div className="fixed z-[999] bg-white-800 flex items-center justify-between shadow-dark-strong h-[92]  w-full bg-white">
      {/* Logo */}
      <div className="">
        <Logo
          icon="/images/logo1.png"
          width={655}
          height={92}
          alt="LekhaPoka logo"
        />
      </div>

      <div className="text-black p-10 text-2xl pr-[293px] ">
        {/* Buttons */}
        <ul className="space-x-6 flex flex-wrap kangsa-font">
          <li
            onClick={() => setSelectedNav("procchod")}
            className={`${
              selectedNav === "procchod"
                ? "text-yellow-400 font-semibold underline"
                : ""
            }`}
          >
            <Link href="#">প্রচ্ছদ</Link>
          </li>
          <li
            onClick={() => setSelectedNav("sob_lekha")}
            className={`${
              selectedNav === "sob_lekha"
                ? "text-yellow-400 font-semibold underline"
                : ""
            }`}
          >
            <Link href="#">সব লেখা</Link>
          </li>
          <li
            onClick={() => setSelectedNav("bistarito")}
            className={`${
              selectedNav === "bistarito"
                ? "text-yellow-400 font-semibold underline"
                : ""
            }`}
          >
            <Link href="#">বিস্তারিত</Link>
          </li>
          <li
            onClick={() => setSelectedNav("zogazog")}
            className={`${
              selectedNav === "zogazog"
                ? "text-yellow-400 font-semibold underline"
                : ""
            }`}
          >
            <Link href="#">যোগাযোগ</Link>
          </li>
          <li
            onClick={() => setSelectedNav("amader_somporke")}
            className={`${
              selectedNav === "amader_somporke"
                ? "text-yellow-400 font-semibold underline"
                : ""
            }`}
          >
            <Link href="#">আমাদের সম্পর্কে</Link>
          </li>
          <li>
            <SearchButton />
          </li>
          {/* Add more buttons as needed */}
        </ul>
      </div>
    </div>
  );
};

export default MyNavbar;
