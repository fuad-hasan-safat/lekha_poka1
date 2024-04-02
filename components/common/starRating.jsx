'use client'

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RatingComponent({post_id, setRating, rating}) {

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  const ratingStyle = {
    display: 'inline-flex',
  };

  return (
    <div className=' flex-col grid place-content-center pt-[60px]'>
      <Rating
        style={ratingStyle}
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
      <button
      className='bg-orange-400 px-2 py-1 text-white h-[34px] w-[195px] rounded-md'
      >Submit </button>
    </div>
  )
}