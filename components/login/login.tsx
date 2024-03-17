import LoginReg from "@/components/login/login-reg";
import LoginSignInOtpLeftPartDesign from "./login-signup-otp-left-design";
import { arial } from "../fonts/arial";
import SignInOption from "../signInOption/SignInOption";

const LoginPage = () => {
  return (
    <>
      <div className={`flex ${arial.variable} font-arial`}>
        <div className="flex flex-row h-[832px]  w-[1280px] bg-[#FCF7E8] shadow-md">
          {/* left part */}
          <div className=" w-[640px]   ">
            <LoginSignInOtpLeftPartDesign />
          </div>
          {/* right part */}
          <div className=" w-[640px]  bg-white rounded-l-[46px] text-black grid place-items-center ">
            <div className="grid place-items-center">
              <LoginReg logreg="Log In" btntext="Sign In" />
              <SignInOption
                title="Or Signup with"
                icon1="/images/loginOptionIcon/google.svg"
                icon2="/images/loginOptionIcon/facebook_squre.svg"
                icon3="/images/loginOptionIcon/ig.svg"
                lowermessege1="Don't have any account? "
                lowermessege2="Create account."
              />
            </div>

            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
