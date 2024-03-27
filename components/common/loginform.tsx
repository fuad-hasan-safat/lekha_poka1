"use client"
import { LoogedInUser } from "@/interfaces/Interfaces";
import { apiBasePath } from "@/utils/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import Loading from "./loading";

type logreg = {
  logreg: string;
  btntext: string;
};

export default function LoginForm({ logreg, btntext }: logreg) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<LoogedInUser>({
    id: 0,
    name: "",
    email: "",
  });
  const [token, setToken] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function submitLogin() {
    //console.log("Calling submitLogin");
    //console.log({ email, password, apiBasePath });
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
        // setUser(JSON.parse(data.user));
        router.push(`/user/${data.user.id}`);

        setEmail("");
        setPassword("");
      } else {
        //console.log("error res", response);
        alert(response.data.message);
      }
    } catch (error: any) {
      console.log("inside catch", error);
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
    
      <div>
        <div className="text-[48px] mb-5  font-semibold text-yellow-500">
          {logreg}
        </div>
        <div className="  grid place-items-center">
          <div className="mb-4 ">
            <input
              onChange={handleEmailChange}
              value={email}
              className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="">
            <input
              onChange={handlePasswordChange}
              value={password}
              className="w-[559px] h-[62px] p-4 bg-[#FCF7E8]  rounded-2xl   text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="button"
            onClick={submitLogin}
            className=" mt-8 px-5 bg-[#F9A106] rounded-full text-[35px] text-white w-[368px] h-[75px] "
          >
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
