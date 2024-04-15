"use client"
import { useEffect, useState } from "react";
import MainContentDivider from "../common/mainContentDivider";
import Loading from "../common/loading";
import SobJiboniBody from "./sobJiboniBody";

export default function SobJiboniLeftContent() {

  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 5; // Number of posts to display per page


  useEffect(() => {


    const fetchPosts = async () => {
      try {
        const response = await fetch("http://192.168.88.248:3002/posts/জীবনী");
        const data = await response.json();
        setPostList(data.object);

        // Calculate total pages based on posts and postsPerPage
        setTotalPages(Math.ceil(data.object.length / postsPerPage));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();

    // fetch("http://192.168.88.248:3002/posts/জীবনী")
    //   .then(response => response.json())
    //   .then(data => {
    //     setPostList(data.object);
    //     console.log('-----------', data)
    //     console.log('-----------', postList)
    //   })
    //   .catch(error => console.error("Error fetching data:", error))
    //   .finally(
    //     setIsLoading(false)
    //   )

  }, []);


  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, postList.length); // Ensure endIndex doesn't exceed posts length

  const displayedPosts = postList.slice(startIndex, endIndex); // Slice the posts for the current page


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error fetching posts: {error.message}</div>
      ) : (
        <>
          <div className="pt-20 text-3xl w-[604px]">
            {displayedPosts.length && (
              displayedPosts.map((post, index) => (
                <>
                  <div key={index}>
                    <SobJiboniBody
                      id={post.id} // Assuming 'id' is the unique identifier
                      title={post.title}
                      writer={post.writer}
                      content={post.content.split('\n').slice(0, 8).join('\n')}
                    />
                  </div>
                  {index < displayedPosts.length - 1 && <MainContentDivider />}
                </>
              ))
            )}
          </div>
          {totalPages > 1 && <div className="py-10 space-x-4"> {/* Add a class for styling */}
            <button
              className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"

              onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
              First Page
            </button>
            <button
              className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"

              onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous Page
            </button>
            <span
              className="text-sm "

            >Page {currentPage} of {totalPages}</span>
            <button
              className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"

              onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next Page
            </button>
            <button
              className="text-[16px] bg-orange-400 px-2 text-white rounded-2xl h-[40px]"

              onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
              Last Page
            </button>
          </div>
          }
        </>
      )}
    </div>
  );



}

