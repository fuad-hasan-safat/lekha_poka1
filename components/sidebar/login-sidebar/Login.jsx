"use client";
import axios, { AxiosError } from "axios";
import SignInOption from "@/components/signInOption/SignInOption";
import { apiBasePath } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Divider from "@/components/common/sidebardivider";
import LogoutButton from "@/components/common/logoutButton";
import GoToProfile from "@/components/common/gotoprofilebutton";


export default function Login() {


  const router = useRouter();

  const [number, setnumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [userUuid, setUserUuid] = useState("");

  const handleNumberhange = (e) => {
    setnumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  async function submitLogin() {
    console.log("Calling submitLogin");
    console.log({ number, password, apiBasePath });
    try {
      const response = await axios.post(
        `${apiBasePath}/login`,
        {
          phone: number,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );



      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setStatus(data.status);
        setUserUuid(data.uuid);
        setUser(data);
        localStorage.setItem("status", data.status);
        localStorage.setItem("name", data.name);
        localStorage.setItem("uuid", data.uuid);
        localStorage.setItem("phone", data.phone);

        setnumber("");
        setPassword("");
      } else {
        console.log("error res--------------------", response.message);
        alert(response.message);
      }
    } catch (error) {
      console.log("inside catch ----------------", error);
      alert(error);
    }
  }

  useEffect(() => {
    setStatus(localStorage.getItem("status") || "");
  }, []);

  useEffect(() => {
    setStatus(localStorage.getItem("status") || "");
    setUsername(localStorage.getItem("name") || "");
    setUserUuid(localStorage.getItem("uuid") || "");
  }, [status]);

  return (
    <>
      {status === 'success' ? (
        <>
          <div className="flex flex-col">
            <div className="text-black text-xl mb-4">
              Hey {username} , welcom to LekharPoka
            </div>
            <div className="flex flex-row space-x-3 text-[18px]">
              <LogoutButton
                buttonText="Logout"
                buttonClass="text-white rounded-[6px] bg-[#F9A106] w-[120px] h-[40px]"
                setStatus={setStatus}
              />
              <GoToProfile
                buttonText="Your Profile"
                buttonClass="text-white rounded-[6px] bg-[#F9A106] w-[180px] h-[40px]  "
                id={userUuid}
              />
            </div>
            <Divider />
          </div>
        </>
      ) : (
        <div>
          <div>
            <div className="text-[20px] text-yellow-500 h-[28px]  pt-5 pb-[28px]">
              লগইন
            </div>
            <div className="mb-3  pt-4">
              <input
                className="border rounded-lg w-full h-[43px] text-[14px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phonenumber"
                type="number"
                placeholder="মোবাইল নাম্বার দিন"
                required
                onChange={handleNumberhange}
                value={number}
              />
            </div>
            <div className="">
              <input
                className="border rounded-lg w-full h-[43px] text-[14px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="পাসওয়ার্ড দিন"
                required
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <a
              className="pt-[12px] float-right mb-[15px] inline-block align-baseline font-bold text-xs text-gray-600 hover:text-black-800"
              href="#"
            >
              পাসওয়ার্ড ভুলে গেসেন?
            </a>
            <div className="">
              <button
                className=" mb-8 w-full h-[43px] text-[16px] bg-[#F9A106] hover:bg-yellow-700 text-white  py-2 rounded focus:outline-none focus:shadow-outline"
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
