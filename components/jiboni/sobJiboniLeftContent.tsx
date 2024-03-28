"use client"
import { useEffect, useState } from "react";
import MainContentDivider from "../common/mainContentDivider";
import { sobKobitaPosts } from "@/public/demo-data/data";
import axios from "axios";
import Loading from "../common/loading";
import SobJiboniBody from "./sobJiboniBody";

export default function SobJiboniLeftContent() {

  const [postList, setPostList] = useState(sobKobitaPosts)
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
                  <SobJiboniBody
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
