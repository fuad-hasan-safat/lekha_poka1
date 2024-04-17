'use client'

import { apiBasePath } from '@/utils/constant'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RatingComponent({ post_id, setRating, rating }) {

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  async function submitRating(id) {
    const data = {
      rating: rating,
    }
    const response = await fetch(`${apiBasePath}/rating/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error updating data: ${response.statusText}`);
    }else{
      alert('Rating Sucessfully update');
    }
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  const ratingStyle = {
    float: 'left',
    fontSize:'14px'
  };

  return (
    <div className='start__rating flex-col grid place-content-center pt-[20px] pb-[20px] mx-[40px] rounded-xl float-left text-center border-2 border-gray-400'>
      ekhane rating korun
      <Rating 
        style={{ float: 'left',textAlign:'center'}}
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      /* Available Props */
      />
      <button
        onClick={() => submitRating(post_id)}
        className='bg-orange-400 px-2 py-1 text-white h-[34px] w-[195px] rounded-md'
      >Submit </button>
    </div>
  )
}