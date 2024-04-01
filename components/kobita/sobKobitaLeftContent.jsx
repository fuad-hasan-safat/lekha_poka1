"use client"
import { useEffect, useState } from "react";
import MaincontentBody from "../common/maincontentBody";
import MainContentDivider from "../common/mainContentDivider";
import { sobKobitaPosts } from "@/public/demo-data/data";
import SobKobitaBody from "./sobKobitaBody";
import axios from "axios";
import Loading from "../common/loading";

export default function SobKobitaLeftContent() {

  //   const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    fetch("http://192.168.88.248:3002/posts/কবিতা")
      .then(response => response.json())
      .then(data => {
        setPostList(data.object);
        console.log('-----------', data)
        console.log('-----------', postList)
      })
      .catch(error => console.error("Error fetching data:", error))
      .finally(
        setIsLoading(false)
      )

  }, []);


  if (isLoading) {
    return <Loading />;
  } else {

    return (
      <div>
        <div className="pt-20 ml-[200px] text-3xl mr-[100px]">
          {postList.length &&
            postList.map((post, index) => (
              <>
                <div>
                  <SobKobitaBody
                    key={index}
                    id={post._id}
                    title={post.title}
                    writer={post.writer}
                    content={post.content.split('\n').slice(0, 8).join('\n')}
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
}
