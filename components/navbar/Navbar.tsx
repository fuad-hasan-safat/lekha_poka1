import React from "react";
import Link from "next/link";


import Logo from "../common/Logo";
import SearchButton from "./SearchIcon";


const MyNavbar = () => {
  return (
    <div className="bg-white-800 flex items-center justify-between shadow-dark-strong h-[92]">
      {/* Logo */}
      <div className="">
        <Logo icon= '/images/logo1.png'  width = {655} height={92} alt='LekhaPoka logo'/>
      </div>

      <div className="text-black p-10 text-2xl pr-[293px] ">
        {/* Buttons */}
        <ul className="space-x-4 flex flex-wrap">
          <li >
            <Link href="/">
              প্রচ্ছদ
            </Link>
          </li>
          <li>
            <Link href="/soblekha">
              সব লেখা
            </Link>
          </li>
          <li>
            <Link href="/soblekha">
              বিস্তারিত
            </Link>
          </li>
          <li>
            <Link href="/soblekha">
              যোগাযোগ
            </Link>
          </li>
          <li>
            <Link href="/soblekha">
              আমাদের সম্পর্কে
            </Link>
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