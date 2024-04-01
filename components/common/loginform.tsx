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

  const [number, setnumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<LoogedInUser>({
    status: '',
    name: '',
    phone: '',
    uuid: '',
  });
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [userUuid, setUserUuid] = useState("");

  const handleNumberhange = (e: ChangeEvent<HTMLInputElement>) => {
    setnumber(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function submitLogin() {

    console.log("Calling submitLogin");
    console.log({ number, password, apiBasePath });
    try {
      const response = await axios.post(
        `http://192.168.88.248:3002/login`,
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

      //console.log({ response });

      if (response.status === 200) {
        const data = await response.data;

        console.log(data)
        setStatus(data.status);
        setUserUuid(data.uuid);
        setUser(data);
        localStorage.setItem("status", data.status);
        localStorage.setItem("name", data.name);
        localStorage.setItem("uuid", data.uuid);
        localStorage.setItem("phone", data.phone);
        //localStorage.setItem('user', data);


        setnumber('')
        setPassword('')
        router.push(`/`)
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
    setStatus(localStorage.getItem("status") || "");

  }, [status]);

  useEffect(() => {
    setUsername(localStorage.getItem('name')|| '');
    setUserUuid(localStorage.getItem('uuid')|| '')
  }, []);


  return (
    <>
      <div>
        <div className="text-[48px] mb-5  font-semibold text-yellow-500">
          {logreg}
        </div>
        <div className="  grid place-items-center">
          <div className="mb-4 ">
            <input
              onChange={handleNumberhange}
              value={number}
              className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="Enter Number"
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
