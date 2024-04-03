"use client"
import { useEffect, useState } from "react";
import MaincontentBody from "../common/maincontentBody";
import MainContentDivider from "../common/mainContentDivider";
import ProcchodButtonList from "./ProcchodButtonList";

export default function ProcchodLeftContent() {


  const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState([])
  const [error, setError] = useState(null);




  useEffect(() => {
    fetch("http://192.168.88.248:3002/posts")
      .then(response => response.json())
      .then(data => {
        setPostList(data);
        console.log('-----------', data)
        console.log('-----------', postList)
      })
      .catch(error => console.error("Error fetching data:", error));

  }, []);



  return (
    <div>
      <ProcchodButtonList selectedId={selectedId} setSelectedId={setSelectedId} setPostList={setPostList} />
      <div className="pt-20 text-3xl">
        {postList.length &&
          postList.map((post, index) => (
            <>
              <div>
                <MaincontentBody
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
