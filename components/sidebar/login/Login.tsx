import SignInOption from "@/components/signInOption/SignInOption";

export default function Login() {
    return (
        <div className="">

            <div>
                {/* <div className="w-[560px]"> */}

                    {/* <div className="bg-white shadow-md rounded pl-8"> */}
                        <div className="text-[20px] font-semibold text-yellow-500 h-[28px] w-[102.34px] pt-5 mb-8">লগইন</div>
                        <div className="mb-3 w-[298px] pt-4">
                            {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label> */}
                            <input className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ইমেইল আইডি দিন " required />
                        </div>
                        <div className="">
                            {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label> */}
                            <input className="border rounded  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="পাসওয়ার্ড দিন" required />

                        </div>
                        <a className="ml-[126px] mb-6 inline-block align-baseline font-bold text-xs text-black-300 hover:text-black-800" href="#">
                            পাসওয়ার্ড ভুলে গেসেন?
                        </a>
                        <div className="">
                            <button className="px-20 mb-8 bg-yellow-500 hover:bg-yellow-700 text-white font-bold  py-2 rounded focus:outline-none focus:shadow-outline" type="button">
                                লগইন করুন
                            </button>

                        </div>

                        <SignInOption/>
                       
                    {/* </div> */}

                {/* </div> */}
            </div>
        </div>
    );
}