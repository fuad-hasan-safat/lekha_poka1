"use client";
import Image from "next/image";
import { useState } from "react";
import { starObject } from "@/interfaces/Interfaces";

const Star: React.FC<starObject> = ({
  star,
  width = 50,
  height = 50,
  alt = "",
}) => {
  const starArray: number[] = [];

  let tempStar = Number(star);
  while (tempStar > 0) {
    if (tempStar >= 1) {
      starArray.push(1);
    } else {
      starArray.push(0.5);
    }
    tempStar--;
  }

  return (
    <>
      <div className="flex">
        {starArray.length &&
          starArray.map((item) => (
            <Image
              src={
                item == 1
                  ? "/images/svgs/full-star.svg"
                  : "/images/svgs/half-star.svg"
              }
              width={width}
              height={height}
              alt={alt}
            />
          ))}
      </div>
    </>
  );
};

export default Star;