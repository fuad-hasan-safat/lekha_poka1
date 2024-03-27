"use client"
import LoginSignInOtpLeftPartDesign from "../common/login-signup-otp-left-design";
import { arial } from "../fonts/arial";
import SignInOption from "../signInOption/SignInOption";
import DropDown from "../common/dropDown";
import SigninForm from "../common/signinforn";
import { useEffect, useState } from "react";
import Link from "next/link";

const SignUpPage = () => {

  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [token]);


  return (
    <>
      {!token ? (<div className={`flex ${arial.variable} font-arial`}>
        <div className="relative flex flex-row h-[832px]  w-[1280px] bg-[#FCF7E8] shadow-md">
          {/* left part */}
          <div className=" w-[640px]   ">
            <LoginSignInOtpLeftPartDesign />
          </div>
          {/* right part */}
          <div className=" w-[640px]  bg-white rounded-l-[46px] text-black grid place-items-center ">
            <div className="grid place-items-center">
              <SigninForm logreg="Create Account" btntext="Sign Up" />
              <SignInOption
                title="Or Signup with"
                icon1="/images/loginOptionIcon/google.svg"
                icon2="/images/loginOptionIcon/facebook_squre.svg"
                icon3="/images/loginOptionIcon/ig.svg"
                lowermessege1="Already Have Account? "
                lowermessege2="Log In"
                signLogLink="\login"
              />
            </div>

          </div>
          <div className="absolute top-7 right-0 pr-2">
            <DropDown />
          </div>
        </div>
      </div>
      ) :
        (

          <div className={`pt-[130px] pb-10 w-full place-content-center ${arial.variable} font-arial`}>
            <div className="text-center text-7xl text-red-600">
              <div>You are already logged in to this site</div>
              <div className="text-4xl text-purple-900 underline hover:text-blue-500">
                <Link href="/">Go to homepage</Link>
              </div>
            </div>
          </div>

        )}
    </>
  );

};

export default SignUpPage;
