import LoginReg from "@/components/common/loginform";
import LoginSignInOtpLeftPartDesign from "../common/login-signup-otp-left-design";
import { arial } from "../fonts/arial";
import SignInOption from "../signInOption/SignInOption";
import DropDown from "../common/dropDown";

const OtpPage = () => {
    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className={`${arial.variable} font-arial`}>
                    <div className="login__form__wrap clearfix flex flex-row justify-center bg-[#FCF7E8] shadow-md">
                        {/* left part */}
                        <div className="login__form__left">
                            <LoginSignInOtpLeftPartDesign />
                        </div>
                        {/* right part */}
                        <div className="login__form__right relative bg-white rounded-l-[46px] text-black">
                            <div className="grid place-items-center">
                                <div className=" grid place-items-center lg:pt-28 md:pt-25 sm:pt-22 xs:pt-5">
                                    <h1 className="OTP__text text-black text-5xl lg:mb-[40px] md:mb-[30px] sm:mb-[20px] xs:mb-[20px]">OTP Verification</h1>
                                    <p className="text-gray-500">We Will send you a one time password on</p>
                                    <p className="text-gray-500"> on this <span className="font-semibold">Mobile Number</span></p>
                                    <p className="text-gray-500 font-semibold pt-4">+91 - 12989200823</p>
                                </div>
                                <div className="flex flex-row space-x-6 lg:mt-[70px] md:mt-[60px] sm:mt-[50px] xs:mt-[20px] lg:mb-[70px] md:mb-[60px] sm:mb-[50px] xs:mb-[20px] text-3xl font-semibold text-gray-700">
                                    <input
                                        type="text"
                                        className="w-[51px] h-[65px] border-solid  bg-gray-100 rounded-xl text-center"
                                    >
                                    </input>
                                    <input
                                        type="text"
                                        className="w-[51px] h-[65px] border-solid  bg-gray-100 rounded-xl text-center"
                                    >
                                    </input>
                                    <input
                                        type="text"
                                        className="w-[51px] h-[65px] border-solid  bg-gray-100 rounded-xl text-center"
                                    >
                                    </input>
                                    <input
                                        type="text"
                                        className="w-[51px] h-[65px] border-solid  bg-gray-100 rounded-xl text-center"
                                    >
                                    </input>
                                </div>
                                <div>
                                    <div className="verify__button flex flex-col">
                                        <button
                                            className="bg-[#F9A106] rounded-full text-[35px] text-white lg:w-[368px] md:w-[320px] sm:w-[280px] xs:w-[250px] lg:h-[70px] sm:h-[50px]"
                                        >
                                            Verify
                                        </button>
                                        <a className="pl-60 pt-2 text-gray-400 font-semibold text-sm" href='#'>Do not get OTP?</a>
                                    </div>
                                </div>
                                <div className="lg:pt-20 md:pt-28 sm:pt-25 xs:pt-5">
                                    <SignInOption

                                        lowermessege1="Already Have Account? "
                                        lowermessege2="Log In"
                                        signLogLink="\login"
                                    />
                                </div>

                            </div>
                            <div className="language__dropdown absolute top-7 right-0 pr-2">
                                <DropDown />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
        </>
    );
};

export default OtpPage;
