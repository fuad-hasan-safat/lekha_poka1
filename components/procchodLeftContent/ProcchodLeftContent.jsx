"use client"
import { useEffect, useState } from "react";
import MaincontentBody from "../common/maincontentBody";
import MainContentDivider from "../common/mainContentDivider";
import ProcchodButtonList from "./ProcchodButtonList";

export default function ProcchodLeftContent() {


  const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState([])
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 5; // Number of posts to display per page




  useEffect(() => {


    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiBasePath}/posts`);
        const data = await response.json();
        setPostList(data.data);

        // Calculate total pages based on posts and postsPerPage
        setTotalPages(Math.ceil(data.length / postsPerPage));
      } catch (error) {
        setError(error);
      }
    };

    fetchPosts();

    // fetch("http://192.168.88.248:3002/posts")
    //   .then(response => response.json())
    //   .then(data => {
    //     setPostList(data);
    //     console.log('-----------', data)
    //     console.log('-----------', postList)
    //   })
    //   .catch(error => console.error("Error fetching data:", error));

  }, []);


  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const firstPage = () => {
    handlePageChange(1);
  };

  const lastPage = () => {
    handlePageChange(totalPages);
  };

  const nextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const prevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, postList.length); // Ensure endIndex doesn't exceed posts length

  const displayedPosts = postList.slice(startIndex, endIndex); // Slice the posts for the current page



  return (
    <div>
      <ProcchodButtonList selectedId={selectedId} setSelectedId={setSelectedId} setPostList={setPostList} postList={postList} />
      <div className="pt-20 text-3xl">

        {error ? (
          <div>Error fetching posts: {error.message}</div>
        ) : (
          <>
            <div className="pt-20 text-3xl">
              {displayedPosts.map((post, index) => (
                <>
                  <div key={index}>
                    <MaincontentBody
                      id={post._id}
                      title={post.title}
                      writer={post.writer}
                      content={post.content.split('\n').slice(0, 8).join('\n')} // Truncate content
                    />
                  </div>
                  {index < displayedPosts.length - 1 && <MainContentDivider />}
                </>
              ))}
            </div>
            <div className="py-10 space-x-4"> {/* Add a class for styling */}
              <button
              className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"
               onClick={firstPage} disabled={currentPage === 1}>
                First Page
              </button>
              <button 
               className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"
              onClick={prevPage} disabled={currentPage === 1}>
                Previous Page
              </button>
              <span
              className="text-sm "
              >Page {currentPage} of {totalPages}</span>
              <button
               className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"
               onClick={nextPage} disabled={currentPage === totalPages}>
                Next Page
              </button>
              <button
               className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"
               onClick={lastPage} disabled={currentPage === totalPages}>
                Last Page
              </button>
            </div>
          </>
        )}
        {/* {postList.length &&
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
          ))} */}
      </div>
    </div>
  );
}
