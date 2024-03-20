import SignInOption from "@/components/signInOption/SignInOption";

export default function Login() {
    return (
            <div>
                <div className="text-[20px] font-semibold text-yellow-500 h-[28px]  pt-5 mb-8">লগইন</div>
                <div className="mb-3 w-[298px] pt-4">

                    <input className="border rounded-2xl w-[297px] h-[43px] text-[14px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ইমেইল আইডি দিন " required />
                </div>
                <div className="">

                    <input className="border rounded-2xl w-[297px] h-[43px] text-[14px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="পাসওয়ার্ড দিন" required />

                </div>
                <a className="ml-[170px] mb-6 inline-block align-baseline font-bold text-xs text-gray-600 hover:text-black-800" href="#">
                    পাসওয়ার্ড ভুলে গেসেন?
                </a>
                <div className="">
                    <button className=" mb-8 w-[297px] h-[43px] text-[16px] bg-[#F9A106] hover:bg-yellow-700 text-white font-semibold  py-2 rounded focus:outline-none focus:shadow-outline" type="button">
                        লগইন করুন
                    </button>

                </div>

                <SignInOption
                    title="অথবা সাইন ইন করুন"
                    icon1="/images/loginOptionIcon/google.svg"
                    icon2="/images/loginOptionIcon/facebook_squre.svg"
                    icon3="/images/loginOptionIcon/apple.svg"
                    lowermessege1="একাউন্ট নেই? "
                    lowermessege2="একাউন্ট তৈরী করুন ।"
                    classProperty=" flex shadow-primary-1 w-[70px] h-[47px] items-center justify-center"
                />
            </div>
    );
}