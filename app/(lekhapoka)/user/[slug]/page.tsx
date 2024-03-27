"use client";
import AddPostButton from "@/components/common/addpostbutton";
import Loading from "@/components/common/loading";
import LogoutButton from "@/components/common/logoutButton";
import { LoogedInUser } from "@/interfaces/Interfaces";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [userUuid, setUserUuid] = useState("");

  useEffect(() => {
    setStatus(localStorage.getItem("status") || "");

  }, [status]);

  useEffect(() => {
    setUsername(localStorage.getItem('name')|| '');
    setUserUuid(localStorage.getItem('uuid')|| '')
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get("your_backend_url");
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

 

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        {status && (
          <div className="pt-[110px] pb-36 text-black  flex flex-col">
            <div className="fixed flex flex-row  shadow-xl bg-yellow-100 w-full h-[60px] text-3xl place-content-center px-2 ">
              <div className="w-3/4 place-content-center">
                <span className="text-[#F9A106] text-5xl ">{username} </span>{" "}
                লেখার পোকায় আপনাকে স্বাগতম
              </div>
              <div className="w-1/4  flex flex-row text-[18px] place-content-center py-2 space-x-4">
                <LogoutButton
                  buttonText="লগ আউট"
                  buttonClass="bg-[#F9A106] w-[100px] rounded-3xl shadow-md "
                  setStatus={setStatus}
                />
                <AddPostButton
                  buttonText="পোস্ট করুন"
                  buttonClass="bg-[#F9A106] w-[100px] rounded-3xl shadow-md"
                  userId={userUuid}
                />
              </div>
            </div>
            <div className="text-black pt-[90px] ">
              <div className="text-2xl pl-10">আপনার পোস্ট সমূহ </div>
              {data === null && <div></div>}
            </div>
          </div>
        )}
        {!status && router.push(`/unauthorizeduser`)}
      </>
    );
  }
}
