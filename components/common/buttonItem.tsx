"use client";
import { buttonItem } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";

const ButtonItem: React.FC<buttonItem> = ({
  id,
  selectedId,
  height,
  weidth,
  txt,
  setSelectedId,
}) => {
  return (
    <>
      <div
        className={`py-1 rounded-md border border-gray-300  ${
          selectedId === id ? " bg-yellow-400 shadow-md" : "bg-gray-300"
        }`}
      >
        <button
          onClick={() => setSelectedId(id)}
          className={`w-[120px] h-[12px] text-gray-600 font-semibold`}
        >
          {txt}
        </button>
      </div>
    </>
  );
};

export default ButtonItem;
