import LoginSignInOtpLeftPartDesign from "../common/login-signup-otp-left-design";
import { arial } from "../fonts/arial";
import SignInOption from "../signInOption/SignInOption";
import DropDown from "../common/dropDown";
import SigninForm from "../common/signinforn";

const SignUpPage = () => {
  return (
    <>
      <div className={`flex ${arial.variable} font-arial`}>
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
    </>
  );
};

export default SignUpPage;
