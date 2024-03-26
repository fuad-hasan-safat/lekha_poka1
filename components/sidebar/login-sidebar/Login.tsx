"use client";
import axios, { AxiosError } from "axios";
import SignInOption from "@/components/signInOption/SignInOption";
import { apiBasePath } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Divider from "@/components/common/sidebardivider";
import LogoutButton from "@/components/common/logoutButton";
import GoToProfile from "@/components/common/gotoprofilebutton";
import { LoogedInUser } from "@/interfaces/Interfaces";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<LoogedInUser>({
    id: 0,
    name:'',
    email:''
  });
  const [token, setToken] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function submitLogin() {
    
    console.log("Calling submitLogin");
    console.log({ email, password, apiBasePath });
    try {
      const response = await axios.post(
        `${apiBasePath}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //console.log({ response });

      if (response.status === 200) {
        const data = await response.data;

        //console.log({ data });

        // Store token in session storage
        setToken(data.token);
        // window.sessionStorage.setItem("token", data.token);
        // window.sessionStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirect to dashboard or another authenticated route
        // router.push("/dashboard");     

        setEmail('')
        setPassword('')
      } else {
        //console.log("error res", response);
        alert(response.data.message);
      }
    } catch (error: any) {
      //console.log("inside catch", error);
      alert(error.response.data.message);
    }
  }

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
   
  }, [token]);

   useEffect(() => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, [token]);

  return (
    <>
      {token ? (
        <>
          <div className="flex flex-col">
            <div className="text-black text-xl mb-4">
              Hey {user?.name} , welcom to LekharPoka
            </div>
            <div className="flex flex-row space-x-3 text-[18px]">
              <LogoutButton
                buttonText="Logout"
                buttonClass="text-white bg-[#F9A106] w-[100px] h-[30px]"
                setToken={setToken}
              />
              <GoToProfile
                buttonText="Your Profile"
                buttonClass="text-white bg-[#F9A106] w-[200px] h-[30px]  "
                id={user.id}              />
            </div>
            <Divider />
          </div>
        </>
      ) : (
        <div>
          <div>
            <div className="text-[20px] font-semibold text-yellow-500 h-[28px]  pt-5 mb-8">
              লগইন
            </div>
            <div className="mb-3 w-[298px] pt-4">
              <input
                className="border rounded-2xl w-[297px] h-[43px] text-[14px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="ইমেইল আইডি দিন "
                required
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="">
              <input
                className="border rounded-2xl w-[297px] h-[43px] text-[14px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="পাসওয়ার্ড দিন"
                required
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <a
              className="ml-[170px] mb-6 inline-block align-baseline font-bold text-xs text-gray-600 hover:text-black-800"
              href="#"
            >
              পাসওয়ার্ড ভুলে গেসেন?
            </a>
            <div className="">
              <button
                className=" mb-8 w-[297px] h-[43px] text-[16px] bg-[#F9A106] hover:bg-yellow-700 text-white font-semibold  py-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitLogin}
              >
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
              signLogLink="/signup"
              classProperty=" flex shadow-primary-1 w-[70px] h-[47px] items-center justify-center"
            />
          </div>
          <Divider />
        </div>
      )}
    </>
  );
}
