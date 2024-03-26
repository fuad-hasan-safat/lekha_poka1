import { SetStateAction, useEffect, useState } from "react";

type logoutProps = {
  buttonClass: string;
  buttonText: string;
  setToken: React.Dispatch<SetStateAction<string>>
};

export default function LogoutButton({ buttonClass, buttonText, setToken }: logoutProps) {
  
    function logoutHandaler(){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setToken("");
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
