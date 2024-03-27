"use client"
import { useEffect, useState } from "react";
import MaincontentBody from "../common/maincontentBody";
import MainContentDivider from "../common/mainContentDivider";
import ProcchodButtonList from "./ProcchodButtonList";
import { mainContentPosts } from "@/public/demo-data/data";
import axios from "axios";
export default function ProcchodLeftContent() {

  const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState(mainContentPosts)
  const [error, setError] = useState(null); 


  // select
  useEffect(() => {
    //console.log({selectedId})
    // call post api here
   
    const fetchData = async () => {
      try {
        const response = await axios.get(``); // Replace with your API endpoint
       // setPostList(response.data); // Set the fetched data in state
      } catch (error: any) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData()
  }, [selectedId])



  return (
    <div>
      <ProcchodButtonList selectedId={selectedId} setSelectedId={setSelectedId} />
      <div className="pt-20 ml-[200px] text-3xl w-[604px]">
        {postList.length &&
          postList.map((post, index) => (
            <>
              <div>
                <MaincontentBody
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
