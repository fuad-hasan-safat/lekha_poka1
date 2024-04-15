"use client";
import { buttonItem } from "@/interfaces/Interfaces";
import { apiBasePath } from "@/utils/constant";
import { useEffect, useState } from "react";

const ButtonItem = ({
  id,
  selectedId,
  height,
  weidth,
  title,
  setSelectedId,
  setPostList,
  postList,
  postsPerPage,
  setTotalPages
}) => {


  function handleButton(title) {
    setSelectedId(id)

    console.log('buton ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', title);

    fetch(`${apiBasePath}/posts/${title}`)
      .then(response => response.json())
      .then(data => {
        setPostList(data.object)
        setTotalPages(Math.ceil(data.length / postsPerPage))
        //console.log('data --->>>>>>>>>>>>>>>>>>>>>>>>>', postList);
      })
      .catch(error => console.error("Error fetching data:", error));

  }

  return (
    <>
      <div
        className={`py-1 rounded-md border border-gray-300  ${selectedId === id ? " bg-yellow-400 shadow-md" : "bg-gray-300"
          }`}
      >
        <button
          onClick={() => handleButton(title)}
          className={`w-[120px] h-[12px] text-gray-600 font-semibold`}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonItem;
