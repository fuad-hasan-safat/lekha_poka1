"use client"
import { mainContaintButton } from "@/interfaces/Interfaces"
import { useEffect, useState } from "react";

const MainContentButton: React.FC<mainContaintButton> = ({
    id,
    height,
    weidth,
    txt,
}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [activeId, setActiveId] = useState('')
    

    function clickHandler(){
        setIsClicked(true);
        setActiveId(id);
    }


    useEffect(() => {
        return () => {
            if(isClicked)
            {
                setIsClicked(false);
                setActiveId('');
            }
             
            // setIsClicked(true);
        };
      }, [isClicked]);

    return (
        <>
            <div 
             className={`py-1 rounded-md border border-gray-300  ${(isClicked === true) && (activeId===id) ? ' bg-yellow-400 shadow-md' : 'bg-gray-300'}`}>
                <button 
                onClick={clickHandler}
                className={`w-[120px] h-[12px] text-gray-600 font-semibold`}>
                    {txt}
                </button>
            </div>



        </>
    );
};

export default MainContentButton;