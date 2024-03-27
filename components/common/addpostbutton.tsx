import { SetStateAction, useEffect, useState } from "react";

type AddPostButtonProps = {
  buttonClass: string;
  buttonText: string;
  userId: string;
};

export default function AddPostButton({ buttonClass, buttonText, userId }: AddPostButtonProps) {
  
    function addPostHandaler(){
       
    }



  return (
    <>
      
       <div>
        <button 
        onClick={addPostHandaler}
        className={`${buttonClass}`}>
          {buttonText}
        </button>
      </div>

    </>
  );
}
