"use client"
import { useEffect, useState } from "react";
import MaincontentBody from "../common/maincontentBody";
import MainContentDivider from "../common/mainContentDivider";
import { sobKobitaPosts } from "@/public/demo-data/data";
import SobKobitaBody from "./sobKobitaBody";
import axios from "axios";
import Loading from "../common/loading";
import { apiBasePath } from "@/utils/constant";
import { fetchData } from "@/app/api/api";

export default function SobKobitaLeftContent() {

  //   const [selectedId, setSelectedId] = useState("sob");
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 5; // Number of posts to display per page

  useEffect(() => {
     async function fetchDataAsync() {
      try {
        const response = await fetchData(`${apiBasePath}/posts/কবিতা`);
         const data = await response.json();
        console.log("কবিতা         ->>>>>>>>>>>>>>>>", data.data);
        setPostList(data.data);
        setTotalPages(postList.length ? Math.ceil(postList.length / postsPerPage) : 0);
        setIsLoading(false);
      } catch (error) {
        alert(error)
      }finally{
        setIsLoading(false);
        setTotalPages(postList.length ? Math.ceil(postList.length / postsPerPage) : 0);

      }
    }

    fetchDataAsync();

    // const fetchPosts = async () => {
    //   try {
    //     const response = await axios.get(`${apiBasePath}/posts/কবিতা`); 
    //     const data = response.data; 

    //     setPostList(data.data);

    //     setTotalPages(Math.ceil(data.object.length / postsPerPage));
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchPosts();



  }, []);


  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, postList.length); // Ensure endIndex doesn't exceed posts length

  const displayedPosts = postList.slice(startIndex, endIndex);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error fetching posts: {error.message}</div>
      ) : (
        <>
          <div className="pt-20 ml-[200px] text-3xl mr-[100px]">
            {displayedPosts.length && (
              displayedPosts.map((post, index) => (
                <>
                  <div key={index}>
                    <SobKobitaBody
                      id={post._id} // Assuming '_id' is the unique identifier
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
          <div className="py-10 space-x-4"> {/* Add a class for styling */}
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
        </>
      )}
    </div>
  );

}

