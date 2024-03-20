"use client"
import { useEffect, useState } from "react";
import MainContentDivider from "../common/mainContentDivider";
import { sobGolpoPosts } from "@/public/demo-data/data";
import SobGolpoBody from "./sobGolpoBody";
export default function SobGolpoLeftContent() {

//   const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState(sobGolpoPosts)

//   useEffect(() => {
//     console.log({selectedId})
//     // call post api here
//   }, [selectedId])

  return (
    <div>
      <div className="pt-20 ml-[200px] text-3xl w-[604px]">
        {postList.length &&
          postList.map((post, index) => (
            <>
              <div>
                <SobGolpoBody
                  key={index}
                  id={post.id}
                  title={post.title}
                  writer={post.writer}
                  content={post.content}
                />
              </div>
              <div>
                {index <= postList.length - 2 ? (
                  <MainContentDivider />
                ) : (
                  ""
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
