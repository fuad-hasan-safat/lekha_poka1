"use client"
import { useEffect, useState } from "react";
import MainContentDivider from "../common/mainContentDivider";
import { sobGolpoPosts } from "@/public/demo-data/data";
import SobGolpoBody from "./sobGolpoBody";
import Loading from "../common/loading";
import { apiBasePath } from "@/utils/constant";
export default function SobGolpoLeftContent() {

  //   const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState(sobGolpoPosts)
  const [isLoading, setIsLoading] = useState(true);


  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 4; // Number of posts to display per page

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiBasePath}/posts/গল্প`);
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




  }, []);


  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, postList.length); // Ensure endIndex doesn't exceed posts length

  const displayedPosts = postList.slice(startIndex, endIndex);



  if (isLoading) {
    return <Loading />;
  } else {

    return (
      <div>
        <div className="pt-20 text-3xl">


          {isLoading ? (
            <Loading />
          ) : error ? (
            <div>Error fetching posts: {error.message}</div>
          ) : (
            <>
              <div className="pt-20  text-3xl mr-[50px]">
                {displayedPosts.length && (
                  displayedPosts.map((post, index) => (
                    <>
                      <div key={index}>
                        <SobGolpoBody
                          id={post._id}
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
            {totalPages >1 &&  <div className="py-10 space-x-4"> {/* Add a class for styling */}
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


          {/* {postList.length &&
            postList.map((post, index) => (
              <>
                <div>
                  <SobGolpoBody
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
}
