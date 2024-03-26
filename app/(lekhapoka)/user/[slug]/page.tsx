"use client";
import AddPostButton from "@/components/common/addpostbutton";
import Loading from "@/components/common/loading";
import LogoutButton from "@/components/common/logoutButton";
import { LoogedInUser } from "@/interfaces/Interfaces";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  //  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState<LoogedInUser>({
    id: 0,
    name: "",
    email: "",
  });
  const [token, setToken] = useState("");

  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second delay
  },[]);

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [token]);

  useEffect(() => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
      //   setUserId(user.id)
    }
  }, [token]);

  
  if(isLoading){
    return(
        <Loading/>
    )
  }

  return (
    <>
      {token ? (
        <div className="pt-[110px] pb-36 text-black  flex flex-col">
          <div className="fixed flex flex-row z-[1000] shadow-xl bg-yellow-100 w-full h-[60px] text-3xl place-content-center px-2 ">
            <div className="w-3/4 place-content-center">
              <span className="text-[#F9A106] text-5xl ">{user?.name} </span>{" "}
              লেখার পোকায় আপনাকে স্বাগতম
            </div>
            <div className="w-1/4  flex flex-row text-[18px] place-content-center py-2 space-x-4">
              <LogoutButton
                buttonText="লগ আউট"
                buttonClass="bg-[#F9A106] w-[100px] rounded-3xl shadow-md "
                setToken={setToken}
              />
              <AddPostButton
                buttonText="পোস্ট করুন"
                buttonClass="bg-[#F9A106] w-[100px] rounded-3xl shadow-md"
                userId={user.id}
              />
            </div>
          </div>
          <div className="text-black pt-[90px] ">
            <div className="text-2xl pl-10">আপনার পোস্ট সমূহ </div>
          </div>
        </div>
      ) : (
        <>

          <div className="pt-[130px] pb-10 w-full place-content-center text-black">
            <div className="text-center text-7xl text-red-600">
              <div>you are not authorized to visit this page</div>
              <div className="text-4xl text-purple-900 underline hover:text-blue-500">
                <Link href="/login">Log in to get access</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
