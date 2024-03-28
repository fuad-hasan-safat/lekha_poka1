import { SetStateAction, useEffect, useState } from "react";

type logoutProps = {
  buttonClass: string;
  buttonText: string;
  setStatus: React.Dispatch<SetStateAction<string>>
};

export default function LogoutButton({ buttonClass, buttonText, setStatus }: logoutProps) {
  
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
