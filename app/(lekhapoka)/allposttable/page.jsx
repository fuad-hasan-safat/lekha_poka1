'use client'

import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import ContentList from './ContentList';
import StyledModal from './Modal';

const PostTable = () => {
  const router = useRouter();
  const [postList, setPostList] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null)
  const [statusRevoked, setStatusRevoked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedContent(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedContent(null);
  };


  useEffect(() => {
    fetch("http://192.168.88.248:3002/postlist")
      .then(response => response.json())
      .then(data => {
        setPostList(data);
        console.log('-----------', data)
        console.log('-----------', postList)
      })
      .catch(error => console.error("Error fetching data:", error));

  }, []);

useEffect(()=>{
setStatusRevoked(false);
},[statusRevoked])


  const handleOpenPopup = (content) => {
    setModalData(content)
    console.log('---------------', modalData)

    setShowModal(!showModal)
  };

  function revokeStatus(id, status) {
    const data = {
      status: !status
    };


    const jsonData = JSON.stringify(data);


    fetch(`http://192.168.88.248:3002/posts/${id}`, {
      method: 'PUT', // Specify PUT method for update
      headers: {
        'Content-Type': 'application/json' // Set content type as JSON
      },
      body: jsonData
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(updatedData => {
        console.log('Data updated successfully:', updatedData);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });

  }

  return (
    <div className="pt-[115px]  text-black mx-10">
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="text-7xl pb-4">Post List</div>
          <ContentList content={postList} onOpenModal={handleOpenModal} />
          <StyledModal isOpen={isOpen} selectedContent={selectedContent} onClose={handleCloseModal} />
          {/* <ul>
            {postList.length &&
              postList.map((post, index) => (
                <>
                    <li>
                      <button
                        id={index}
                        key={index}
                        className="text-2xl"
                        onClick={() => handleOpenPopup(post.content)}
                      >
                        {post.title}

                      </button>
                    </li>
                    <Modal isVisible={showModal}
                      onClose={() => setShowModal(false)}
                      content={post.content}
                    />
                </>
              ))} */}
       
      </div>
      <div className="w-1/2">
        <div className="text-7xl pb-4 ">Toggle Ststud</div>
        <ul>
          {postList.length &&
            postList.map((post, index) => (
              <li>
                <button
                  className={`${post.status === true ? 'text-green-500' : 'text-red-500'}`}

                  onClick={() => {
                    setStatusRevoked(true)
                    revokeStatus(post._id, post.status)
                  }}
                >
                  {post.status === true ? 'Revoke Status' : 'Give Status'}
                </button>

              </li>
            ))}
        </ul>
      </div>
    </div>
    </div >
  )
}

export default PostTable