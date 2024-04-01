import { SetStateAction, useEffect, useState } from "react";



export default function LogoutButton({ buttonClass, buttonText, setStatus }) {
  
    function logoutHandaler(){
        localStorage.removeItem("status");
        localStorage.removeItem("name");
        localStorage.removeItem("uuid");
        setStatus("");
    }



  return (
    <>
      
       <div>
        <button 
        onClick={logoutHandaler}
        className={`${buttonClass}`}>
          {buttonText}
        </button>
      </div>

    </>
  );
}
