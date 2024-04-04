"use client";
import { buttonItem, ProcchodButtonProps } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";
import ButtonItem from "../common/buttonItem";

// const buttons = [
//   {
//     id: "sob",
//     txt: "সব",
//   },
//   {
//     id: "kobita",
//     txt: "কবিতা",
//   },
//   {
//     id: "probondho",
//     txt: "প্রবন্ধ",
//   },
//   {
//     id: "golpo",
//     txt: "গল্প",
//   },
//   {
//     id: "anugolpo",
//     txt: "অনুগল্প",
//   },
//   {
//     id: "jiboni",
//     txt: "জীবনী",
//   },
// ];

const ProcchodButtonList = ({ selectedId, setSelectedId, setPostList, postList}) => {

  const [buttons, setButtons] = useState([
    {
      _id: '',
      title:' ',
      __v: 0
    }
  ])

  useEffect(() => {
    fetch("http://192.168.88.248:3002/categories")
        .then(response => response.json())
        .then(data => {
          setButtons(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    
}, []);

  return (
    <div className="flex space-x-6 pt-16">
      {buttons.length &&
        buttons.map((button, index) => (
          <ButtonItem
            key={button._id}
            id={button._id}
            title={button.title}
            height={50}
            weidth={100}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setPostList={setPostList}
            postList={postList}
          />
        ))}
    </div>
  );
};

export default ProcchodButtonList;
