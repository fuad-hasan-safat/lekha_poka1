"use client";
import Container from "postcss/lib/container";
import { useEffect } from "react";
import SliderPost from "../sliderPost/SliderPost";

const posts = [
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 1",
    caption: "আফজাল হোসেনের প্রেমের কবিতা",
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
    image: "/sliderPics/woman.png",
  },
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 2",
    caption: "আফজাল হোসেনের প্রেমের কবিতা",
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
    image: "/sliderPics/woman.png",
  },
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 3",
    caption: "আফজাল হোসেনের প্রেমের কবিতা",
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,

    image: "/sliderPics/woman.png",
  },
];

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div className="static">
      {/* <div className="absolute top-[182px] left-[302px] z-[100]">
        <SliderPost title="" caption="" discription="" id="" />
      </div> */}
      <div
        id="carouselExampleIndicators"
        className="h-812"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        {/* <!--Carousel indicators--> */}
        <div
          className="absolute bottom-[136px] left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          <button
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide-to="0"
            data-twe-carousel-active
            // className="mx-[3px] box-content h-[9px] w-[9px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-full bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            className={`bg-gray-300 mx-[3px] box-content h-[9px] w-[9px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-full bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide-to="1"
            className={`bg-gray-300 mx-[3px] box-content h-[9px] w-[9px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-full bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide-to="2"
            className={`bg-gray-300 mx-[3px] box-content h-[9px] w-[9px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-full bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            data-twe-carousel-active
          >
            <div className="absolute top-[182px] left-[302px] z-[100]">
              <SliderPost
                title={posts[0].title}
                caption={posts[0].caption}
                discription={posts[0].discription}
                id={posts[0].id}
              />
            </div>
            <img
              src="/sliderPics/woman.png"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
          >
            <div className="absolute top-[182px] left-[302px] z-[100]">
              <SliderPost
                title={posts[1].title}
                caption={posts[1].caption}
                discription={posts[1].discription}
                id={posts[1].id}
              />
            </div>
            <img
              src="/sliderPics/woman.png"
              className="block w-full"
              alt="Camera"
            />
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
          >
            <div className="absolute top-[182px] left-[302px] z-[100]">
              <SliderPost
                title={posts[2].title}
                caption={posts[2].caption}
                discription={posts[2].discription}
                id={posts[2].id}
              />
            </div>
            <img
              src="/sliderPics/woman.png"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-gray-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-gray-700 hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[150] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-gray-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-gray-700 hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
