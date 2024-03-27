"use client"
import { useEffect, useState } from "react";
import MainContentDivider from "../common/mainContentDivider";
import { sobGolpoPosts } from "@/public/demo-data/data";
import SobGolpoBody from "./sobGolpoBody";
import axios from "axios";
import Loading from "../common/loading";
export default function SobGolpoLeftContent() {

  //   const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState(sobGolpoPosts)
  const [isLoading, setIsLoading] = useState(true);


  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(``); // Replace with your API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error: any) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Call the function on component mount
  }, []);


  if (isLoading) {
    return <Loading />;
  } else {

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
}
