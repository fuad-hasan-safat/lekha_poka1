"use client"
import { useState } from "react";
import Image from "next/image";
import { mainContaintPost } from "@/interfaces/Interfaces";


const MaincontentBody: React.FC<mainContaintPost> = ({
    id,
    title,
    writer,
    content,
}) => {

    const [html, setHTML] = useState({ __html: content });
    return (
        <>
            <div className="pb-3">
                <h1
                    className="text-3xl text-yellow-400 font-bold"
                >{title}</h1>
            </div>
            <div className="pb-4">
                <p className="text-xl font-semibold ">{writer}</p>
            </div>
            <div className="pb-3">
                <div className="text-[16px] text-gray-500" dangerouslySetInnerHTML={html} />
            </div>

            {/* button -- it would be conditionally appaer */}
            <div className="flex space-x-2">
                <button
                    className="text-yellow-500 text-xs"
                >
                    
                    <Image 
                src={'/images/svgs/purotadekhun.svg'}
                height={30}
                width={190}
                alt="next"
                />
                </button>
              
            </div>
        </>
    );
};

export default MaincontentBody;