"use client";
import { buttonItem } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";
import ButtonItem from "../common/buttonItem";

const buttons = [
  {
    id: "sob",
    txt: "সব",
  },
  {
    id: "kobita",
    txt: "কবিতা",
  },
  {
    id: "probondho",
    txt: "প্রবন্ধ",
  },
  {
    id: "golpo",
    txt: "গল্প",
  },
  {
    id: "anugolpo",
    txt: "অনুগল্প",
  },
  {
    id: "jiboni",
    txt: "জীবনী",
  },
];

const ProcchodButtonList = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="flex space-x-6 pl-[200px] pt-16">
      {buttons.length &&
        buttons.map((button, index) => (
          <ButtonItem
            key={button.id}
            id={button.id}
            txt={button.txt}
            height={50}
            weidth={100}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
    </div>
  );
};

export default ProcchodButtonList;
