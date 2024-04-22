"use client";
import React, { useState, useEffect } from "react";
import LekhokDetails from "@/components/common/lekhok";
import SidebarPostDivider from "@/components/common/sidebarpostdivider";
import { apiBasePath } from "@/utils/constant";
import { useRouter } from "next/navigation";

const Lekhok = () => {
  const router = useRouter()  

  const [lekhokList, setLekhokList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiBasePath}/writers`)
      .then((response) => response.json())
      .then((data) => {
        setLekhokList(data);
        console.log("-----------", data);
        console.log("-----------", setLekhokList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  function allWriterHandler(){
    router.push(`/allwriter`)
  }

  return (
    <>
      <div>
        <div>
          <h1 className="text-[20px] text-yellow-500 font-semibold">লেখক</h1>
        </div>
        <div className="pt-[23px] ">
          {lekhokList.length &&
            lekhokList.map((item, index) => (
              <>
                <div className="pb-3">
                  <LekhokDetails
                    key={index}
                    image={`${apiBasePath}/${item.image}`}
                    writer={item.name}
                    id={item._id}
                    lifeCycle={`${item.birth_date} - ${item.expiry_date}`}
                  />
                </div>
                <div className="pb-3">
                  {index <= lekhokList.length - 2 ? <SidebarPostDivider /> : ""}
                </div>
              </>
            ))}
        </div>
        <div>
          <div className="w-[180px] pb-[60px] pt-[30px] flex ">
            <div>
              <button
              onClick={allWriterHandler}
               className="bg-yellow-500 w-[180px] h-[43px] text-white rounded-md mr-3">
                সব দেখুন
              </button>
            </div>

            <div className="flex space-x-3">
              <button className="pl-2 bg-white rounded-md border border-gray-300  w-[50px] h-[43px] ">
             
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16.2715L10 12.2715L14 8.27148"
                    stroke="#A3A3A3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="pl-4 bg-white rounded-md border border-gray-300 w-[50px] h-[43px] ">
              
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 8.24268L14 12.2427L10 16.2427"
                    stroke="#A3A3A3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lekhok;
