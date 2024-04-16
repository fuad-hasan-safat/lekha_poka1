import React, { useEffect, useState } from "react";

export default function FullPost({ content, title, writer, catagory }) {

    return (
        <>
            <div className=" text-black pr-[100px] pt-24 space-y-3">
                <div className="font-semibold text-[35px] text-[#FCD200]">{title}</div>
                <div className="text-[22px] text-[#595D5B] ">{writer}</div>
                <div
                    className="text-[16px] text-gray-500 text-justify"
                    dangerouslySetInnerHTML={{__html: content}}
                />
            
            </div>
        </>
    )


}