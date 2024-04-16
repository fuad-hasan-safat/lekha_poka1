"use client";
import { useState } from "react";
import Image from "next/image";
import { mainContaintPostType } from "@/interfaces/Interfaces";
import { useRouter } from "next/navigation";

const MaincontentBody = ({
  id,
  title,
  writer,
  content,
  buttons,
}) => {
  const router = useRouter();

  // const [html, setHTML] = useState({ __html: content });


  function handleClick(postId, title) {
    let path = '';
    if(title==='কবিতা'){
      path = 'kobita'
    }else if(title==='প্রবন্ধ'){
      path = 'kobita'
    }else if(title==='গল্প'){
      path = 'kobita'
    }else if(title===''){
      path = 'kobita'
    }else if(title==='কবিতা'){
      path = 'kobita'
    }else if(title==='কবিতা'){
      path = 'kobita'
    }
    router.push(`/${postId}`);
  }
  return (
    <>
      <div className="pb-3">
        <div className="text-3xl text-yellow-400 font-bold">{title}</div>
      </div>
      <div className="pb-4">
        <div className="text-xl text-gray-800 font-semibold ">{writer}</div>
      </div>
      <div className="pb-3">
        <div
          className="text-[16px] text-gray-500 text-justify"
          dangerouslySetInnerHTML={{__html: content}}
        />
      </div>

      {/* button -- it would be conditionally appaer */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleClick(id, buttons.title)}
          className="text-yellow-500 text-xs"
        >
          <Image
            src={"/images/svgs/purotadekhun.svg"}
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
