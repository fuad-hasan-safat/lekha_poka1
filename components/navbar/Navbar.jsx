"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../common/Logo";
import SobLekha from "./sobLekhaDropDown";
import { useRouter } from "next/navigation";
import { apiBaseUrl } from "next-auth/client/_utils";
import { apiBasePath } from "@/utils/constant";

const MyNavbar = () => {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [postList, setPostList] = useState(null);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedIteam, setSelectedIteam] = useState(-1);

  //Resposnive Header Toggle
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    // console.log(e.key)
    if (selectedIteam < searchData.length) {
      if (e.key === "ArrowUp" && selectedIteam > 0) {
        setSelectedIteam((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedIteam < searchData.length - 1
      ) {
        setSelectedIteam((prev) => prev + 1);
      } else if (e.key === "Enter") {
        window.open(searchData[selectedIteam].link);
      }
    } else {
      setSelectedIteam(-1);
    }
  };
  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedIteam(-1);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiBasePath}/posts`);
        const data = await response.json();
        setPostList(data);
        //console.log( "------------------->>>> POST LIST ------------------>>>>>>>",postList );
      } catch (error) {
       // alert("Error Fetching data");
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (search !== "") {
      // fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
      //     .then((res) => res.json())
      //     .then((data) => setSearchData(data))
      try {
        const newFiltreddata = postList.filter((post) => {
          return post.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        setSearchData(newFiltreddata);
      } catch (error) {}
    } else {
      setSearchData([]);
    }
  }, [search]);


  function goToSearchPost(id){
    router.push(`/${id}`)
  }

  return (
    <div className="fixed w-full bg-white z-[100]">
      <header className="header shadow-md">
        {/* Logo */}
        {/* <div className="header__bg">
          <Link href="/">
            <Image
              src="/images/svgs/header-bg.svg"
              width={655}
              height={95}
              alt="LekhaPoka logo"
            />
          </Link>
        </div> */}
        <div className="container">
          <div className="row-span-12">
            <div className="header-innr">
              <div className="logo">
                <Link href="/">
                  <Logo
                    icon="/images/svgs/lekhapokaBlack.svg"
                    width={200}
                    height={92}
                    alt="LekhaPoka logo"
                  />
                </Link>
              </div>
              <div className={`flex justify-between items-center space-x-3 text-black lg:text-[18px] sm:text-[15px] pt-1  place-content-center `}>
                <div className="hambar__icon" onClick={ToggleSidebar} >
                  <i class="ri-menu-line"></i>
                </div>
                {/* Buttons */}
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                  <ul className={`flex flex-row lg:space-x-6 sm:space-x-4 xs:space-x-[0px] kangsa-font transition-all ease-in-out duration-2000"}`}>
                    <li
                      onClick={() => setSelectedNav("procchod")}
                      className={`${
                        selectedNav === "procchod"
                          ? "text-[#F9A106] font-semibold underline"
                          : ""
                      }`}
                    >
                      <Link href="/">প্রচ্ছদ</Link>
                    </li>
                    <li
                      onClick={() => {
                        setSelectedNav("soblekha");
                      }}
                    >
                      <SobLekha
                        sobClass={`${
                          selectedNav === "soblekha"
                            ? "text-[#F9A106] font-semibold underline"
                            : "text-black"
                        }`}
                      />
                    </li>
                    {/* <li
                      onClick={() => setSelectedNav("bistarito")}
                      className={`${
                        selectedNav === "bistarito"
                          ? "text-[#F9A106] font-semibold underline"
                          : ""
                      }`}
                    >
                      <Link href="/details">বিস্তারিত</Link>
                    </li> */}
                    <li
                      onClick={() => setSelectedNav("zogazog")}
                      className={`${
                        selectedNav === "zogazog"
                          ? "text-[#F9A106] font-semibold underline"
                          : ""
                      }`}
                    >
                      <Link href="/contacts">যোগাযোগ</Link>
                    </li>
                    <li
                      onClick={() => setSelectedNav("amader_somporke")}
                      className={` lg:w-[130px] sm:w-[100px] ${
                        selectedNav === "amader_somporke"
                          ? "text-[#F9A106] font-semibold underline"
                          : ""
                      }`}
                    >
                      <Link href="/aboutus">আমাদের সম্পর্কে</Link>
                    </li>
                  </ul>
                </div>
                <div className="search__bar relative flex flex-row place-content-center">
                    <Image
                      src="/images/svgs/search.svg"
                      height={50}
                      width={50}
                      alt=""
                      className={` cursor-pointer`}
                      onClick={() => setIsSearchActive(true)}
                    />

                    {isSearchActive && (
                      <input
                        type="text"
                        className={` w-[200px] text-[16px] bg-transparent text-black py-2 pr-10 rounded-md focus:outline-none`}
                        placeholder=" অনুসন্ধান..."
                        autoComplete="off"
                        onChange={handleChange}
                        value={search}
                        onKeyDown={handleKeyDown}
                      />
                    )}
                    <div
                      className={`search_result ${
                        isSearchActive ? "visible" : "hidden"
                      }`}
                    >
                      {searchData.map((data, index) => {
                        return (
                          <button
                          onClick={()=> goToSearchPost(data._id)}
                            className={
                              selectedIteam === index
                                ? "search_suggestion_line active"
                                : "search_suggestion_line"
                            }
                            key={index}
                          >
                            {data.title}
                          </button>
                        );
                      })}
                      {searchData.length === 0 && search !== "" && (
                        <h1>No Result Found</h1>
                      )}
                    </div>

                    {/* <input
                        className={`w-[200px] relative text-[16px] bg-transparent text-black py-2 rounded-md focus:outline-none  ${isSearchActive ? "visible" : "hidden"
                          }`}
                        type="text"
                        placeholder=" অনুসন্ধান..."
                        autoComplete="off"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      /> */}

                    {isSearchActive && (
                      <FontAwesomeIcon
                        icon={faList}
                        className="absolute z-50 text-gray-500 text-lg px-2 cursor-pointer ml-auto mt-[10px] right-2" // Right-aligned
                        onClick={() => setIsSearchActive(false)}
                      />
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MyNavbar;
