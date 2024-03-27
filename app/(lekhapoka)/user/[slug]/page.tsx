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
  //  const [userId, setUserId] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState<LoogedInUser>({
    id: 0,
    name: "",
    email: "",
  });
  const [token, setToken] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, [token]);

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

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [token]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        {token && (
          <div className="pt-[110px] pb-36 text-black  flex flex-col">
            <div className="fixed flex flex-row  shadow-xl bg-yellow-100 w-full h-[60px] text-3xl place-content-center px-2 ">
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
              {data === null && <div></div>}
            </div>
          </div>
        )}
        {!token && router.push(`/unauthorizeduser`)}
      </>
    );
  }
}
