"use client";
import { buttonItem, ProcchodButtonProps } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";
import ButtonItem from "../common/buttonItem";
import { apiBasePath } from "@/utils/constant";
import { fetchData } from "@/app/api/api";

const ProcchodButtonList = ({
  selectedId,
  setSelectedId,
  setPostList,
  postList,
  setTotalPages,
  postsPerPage,
  setCurrentPage,
}) => {
  const [buttons, setButtons] = useState([
    {
      _id: "",
      title: " ",
      __v: 0,
    },
  ]);

   useEffect(() => {
 

    async function fetchDataAsync() {
      try {
        const result = await fetchData(`${apiBasePath}/categories`);
        //console.log("result         ->>>>>>>>>>>>>>>>", result.object);
        setButtons(result);
      } catch (error) {
        alert(error)
      }
    }

    fetchDataAsync();
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
            setTotalPages={setTotalPages}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
    </div>
  );
};

export default ProcchodButtonList;
