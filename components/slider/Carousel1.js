"use client"
import React, { useState, useEffect } from 'react';
import { Post } from '@/interfaces/Interfaces';
import SliderPost from '../sliderPost/SliderPost';


// ...
const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="">
      {images.map((_, index) => (
        <><span
          key={index}
          className={`h-28 w-28 rounded space-x-3 z-50 ${index === activeIndex ? ' bg-yellow-400' : 'bg-red-400'
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
    <div className="carousel relative">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>

      <div className='w-full h-812 justify-center'>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
        <div className='absolute flex pb-8'>
          <CarouselIndicators
            images={images}
            activeIndex={activeIndex}
            onClick={goToSlide}
          />
        </div>
          <div className='z-50'>
          { <SliderPost
            title={sliderPosts[activeIndex].title}
            caption={sliderPosts[activeIndex].caltion}
            discription={sliderPosts[activeIndex].discription}
            id={sliderPosts[activeIndex].id}
          /> }
        </div>
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>


    </div>
  );
};
export default Carousel1;