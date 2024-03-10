"use client"
import React, { useState, useEffect } from 'react';
import { Post } from '@/interfaces/Interfaces';
import SliderPost from './sliderPost/SliderPost';


// ...
const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="space-x-1 absolute bottom-[136px] left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
      {images.map((_, index) => (
        <><button
          key={index}
          className={`carousel__indicator ${index === activeIndex ? ' bg-orange-400 shadow-md' : 'bg-gray-400'
            }`}
          onClick={() => onClick(index)}
        />

        </>
      ))}
    </div>
  );
};


const Carousel1 = ({ images, sliderPosts, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="carousel relative ">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev z-1000">
        &lt;
      </button>
      <div className='absolute pl-[302px] pt-[168px]'>
        {<SliderPost
          title={sliderPosts[activeIndex].title}
          caption={sliderPosts[activeIndex].caltion}
          discription={sliderPosts[activeIndex].discription}
          id={sliderPosts[activeIndex].id}
        />}
      </div>
      <div className=''>
        <CarouselIndicators
          images={images}
          activeIndex={activeIndex}
          onClick={goToSlide}
        />
      </div>

      <div className='w-full h-812 justify-center'>
        <img
          src={images[activeIndex]}
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