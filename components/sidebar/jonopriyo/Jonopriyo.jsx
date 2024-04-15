'use client'
import React, { useEffect, useState } from "react";

import { fetchData } from "@/app/api/api";
import LekhaPokaProfile from "@/components/common/lekhaProfile";
import SidebarPostDivider from "@/components/common/sidebarpostdivider";
import { apiBasePath } from "@/utils/constant";

const Jonopriyo = () => {

const [jonopriyoData, setJanapriyoData] = useState([])

  useEffect(() => {
    console.log("in side use effect");

    async function fetchDataAsync() {
      try {
        const result = await fetchData(
          `${apiBasePath}/popularpost`
        );
       // console.log("result         ->>>>>>>>>>>>>>>>", result.object);
        setJanapriyoData(result.posts);
      } catch (error) {
        alert(error)
      }
    }

    fetchDataAsync();
  }, []);


  const somosamoyekPosts = [
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জীবনানন্দ দাস",
      star: 4,
    },
    {
      id: "xyz",
      image: "/images/writerimage/RahmanShamsur.jpg",
      title: "তোমাকে দেখবো বলে হে স্বাধীনতা",
      writer: "শামসুর রাহমান",
      star: 3,
    },
    {
      id: "xyz",
      image: "/images/writerimage/nazrul.jpg",
      title: "আবার শ্রাবণ এলো ফিরে",
      writer: "কাজী নজরুল ইসলাম",
      star: 5,
    },
    {
      id: "xyz",
      image: "/images/writerimage/robi.jpg",
      title: "নৌকা ডুবি",
      writer: "রবীন্দ্রনাথ ঠাকুর",
      star: 4,
    },
    {
      id: "xyz",
      image: "/images/writerimage/asaf.png",
      title: "মেঘ এসে, ছুঁয়ে ছুঁয়ে যায়",
      writer: "আসাফ উদ্‌-দৌলা ",
      star: 3.5,
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1 className="text-[20px] text-yellow-500 font-semibold">জনপ্রিয়</h1>
        </div>
        <div className="pt-[23px]">
          {jonopriyoData.length &&
            jonopriyoData.map((item, index) => (
              <>

                <div className="pb-1">
                  <LekhaPokaProfile
                    key={index}
                    image={'/images/writerimage/robi.jpg'}
                    title={item.title}
                    writer={item.writer}
                    id={item._id}
                    star={item.rating}
                  />
                </div>
                <div className="pb-3">
                  {index <= jonopriyoData.length - 2 ? (
                    <SidebarPostDivider />
                  ) : (
                    ""
                  )}
                </div>
              </>


            ))}
        </div>
      </div>
    </>
  );
};

export default Jonopriyo;
