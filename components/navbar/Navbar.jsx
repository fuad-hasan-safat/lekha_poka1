"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Logo from "../common/Logo";
import SobLekha from "./sobLekhaDropDown";
import { useRouter } from "next/navigation";


const MyNavbar = () => {

  const router = useRouter();

  const [selectedNav, setSelectedNav] = useState("");

  const [isSearchActive, setIsSearchActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [postList, setPostList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };


  useEffect(() => {


    const fetchPosts = async () => {
      try {
        const response = await fetch("http://192.168.88.248:3002/posts");
        const data = await response.json();
        setPostList(data);

        // Calculate total pages based on posts and postsPerPage
      } catch (error) {
        alert('Error Fetching data')
      }
    };

    fetchPosts();

  }, [])



  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true); 
  };


  const handleSelectOption = (id) => {
    handleSelect(id);
    setSearchTerm('');
    setShowDropdown(false); 
    router.push(`/${id}`); 
  };

  const filteredOptions = postList.filter(option =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="fixed w-full bg-white z-[100]">
      <header className="header shadow-md ">
        {/* Logo */}
        <div className="header__bg">
          <Link href="/">
          <Image src="/images/svgs/header-bg.svg" width={655} height={95} alt="LekhaPoka logo" /></Link>
        </div>
        <div className="container">
          <div className="row-span-12">
            <div className="header-innr">
              <div className="logo">
              <Link href="/">
                <Logo icon="/images/svgs/lekhapokaBlack.svg" width={200} height={92} alt="LekhaPoka logo" />
              </Link>
              </div>
              <div className={` space-x-3 text-black text-[18px]  place-content-center `}>
                {/* Buttons */}
                <ul
                  className={`flex flex-row space-x-6  kangsa-font transition-all ease-in-out duration-1000 "
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
                    <Link href="/details">বিস্তারিত</Link>
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
                    <Link href="/aboutus">আমাদের সম্পর্কে</Link>
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
                    <div>
                      <input
                        className={`w-[200px] relative text-[16px] bg-transparent text-black py-2 rounded-md focus:outline-none  ${isSearchActive ? "visible" : "hidden"
                          }`}
                        type="text"
                        placeholder=" অনুসন্ধান..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />

                      {/* <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      /> */}

                      <select 
                      className="absolute left-0 top-[100%]"
                      onChange={(e) => handleSelectOption(e.target.value)}>
                        <option value=""></option>
                        {filteredOptions.map((option, index) => (
                          <option
                          className="text-[16px]"
                           key={index} value={option._id}>{option.title}</option>
                        ))}
                      </select>

                    </div>


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
    </div>
  );
};

export default MyNavbar;
