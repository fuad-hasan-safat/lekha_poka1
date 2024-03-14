"use client"
import React, { useState, useEffect } from 'react';
import { Post } from '@/interfaces/Interfaces';
import SliderPost from './sliderPost/SliderPost';
import AudioPlayer from '../musicbar/AudioPlayer';


// ...
const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="space-x-1 absolute bottom-[136px]  z-[2] mx-[15%] mb-4 flex list-none p-0 content-center justify-center">
      {images.map((_, index) => (
        <><button
          key={index}
          className={`carousel__indicator    ${index === activeIndex ? ' bg-orange-400 shadow-md h-[15px] w-[15px]' : 'bg-gray-400 h-[12px] w-[12px] mt-[2px]'
            }`}
          onClick={() => onClick(index)}
        />

        </>
      ))}
    </div>
  );
};


const Carousel1 = ({sliderPosts, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sliderPosts.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderPosts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="carousel relative pt-[82px]">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev z-1000">
        &lt;
      </button>
      <div className='absolute pl-[302px] pt-[168px]'>
        {<SliderPost
        key={`${sliderPosts[activeIndex].id} of ${sliderPosts[activeIndex].title}`}
          title={sliderPosts[activeIndex].title}
          caption={sliderPosts[activeIndex].caltion}
          discription={sliderPosts[activeIndex].discription}
          id={sliderPosts[activeIndex].id}
        />}
      </div>
      <div className=''>
        <CarouselIndicators
          images={sliderPosts}
          activeIndex={activeIndex}
          onClick={goToSlide}
        />
      </div>
     

      <div className='w-full h-812 justify-center transition-all  cubic-bezier(0.77, 0, 0.175, 1)'>
        <img
          src={sliderPosts[activeIndex].image}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />


      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel1;