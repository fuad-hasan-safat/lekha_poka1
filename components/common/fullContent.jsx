import React, { useEffect, useState } from "react";

export default function FullPost({ content, title, writer }) {

    return (
        <>
            <div className=" text-black w-maincontainwidth pt-24 pl-56 space-y-3">
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