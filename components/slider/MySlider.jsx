'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Circle } from 'lucide-react';
import { sliderPosts } from "@/public/demo-data/data";
import '/public/assets/css/image-slider.css'

export function ImageSlider() {
    const [data, setData] = useState(sliderPosts)

    // api call 
    useEffect(() => {

        fetch(`http://192.168.88.248:3002/sliders`)
        .then(response => response.json())
        .then(data =>{
          setData(data)
        }).catch(error => console.log("Error fetching data"))
    
   
      }, []); 

    //  handler
    const router = useRouter();
  
    function featureHandler(postId) {
      router.push(`/feature/${postId}`);
    }


    // slider states
   
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === data.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return data.length - 1
            return index - 1
        })
    }

    return (
        <section
            aria-label="Image Slider"
            style={{ width: "100%", height: "100%", position: "relative" }}
        >
            {/* <a href="#after-image-slider-controls" className="skip-link">
                Skip Image Slider Controls
            </a> */}
            <div>
                <div
                    className="relative"
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        overflow: "hidden",
                    }}
                >
                    {data.map(({ _id, title, caption, image, content }, index) => (

                        <img
                            key={_id}
                            src={`http://192.168.88.248:3002/${image}`}
                            alt={image}
                            aria-hidden={imageIndex !== index}
                            className="img-slider-img"
                            style={{ translate: `${-100 * imageIndex}%` }}
                        />


                    ))}
                </div>
                <div
                    className="absolute top-[110px] left-[200px]"
                    style={{
                        width: "60%",
                        height: "100%",
                        display: "flex",
                        overflow: "hidden",
                    }}
                >
                    {data.map(({ _id, title, caption, image, content }, index) => (
                        <div
                            aria-hidden={imageIndex !== index}
                            className="img-slider-img space-y-4"
                            style={{ translate: `${-100 * imageIndex}%` }}
                        >
                            <h1 className="text-[52px] text-[#86312F]" >{title}</h1>
                            <h2 className="text-[28px] text-[#595D5B]">{caption}</h2>
                            <p className="text-[16px] text-[#595D5B] w-[50%]">{content}</p>

                            <button
                                onClick={() => featureHandler(_id)}
                                className="w-[176px] bg-orange-400 px-2 h-[56px] rounded-md text-[19px]  text-white"
                            >
                                বিস্তারিত
                            </button>
                        </div>

                    ))}
                </div>


            </div>

            <button
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <img
                    src="/images/svgs/previous.svg"
                />
            </button>
            <button
                onClick={showNextImage}
                className="img-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <img
                    src="/images/svgs/next.svg"
                />
            </button>
            <div
                style={{
                    position: "absolute",
                    bottom: "8rem",
                    left: "20%",
                    translate: "-50%",
                    display: "flex",
                    gap: ".25rem",
                }}
            >
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`img-slider-dot-btn ${index === imageIndex ? 'active-img-slider-dot-btn' : ''}`}
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <Circle aria-hidden />
                        ) : (
                            <Circle aria-hidden />
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}