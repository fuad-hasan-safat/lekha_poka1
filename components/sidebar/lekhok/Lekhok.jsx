'use client'
import React, {useState, useEffect} from "react";
import LekhaPokaProfile from "@/components/common/lekhaProfile";
import LekhokDetails from "@/components/common/lekhok";
import SidebarPostDivider from "@/components/common/sidebarpostdivider";
import Image from "next/image";

const Lekhok = () => {
    const somosamoyekPosts = [
        {
            id: "xyz",
            image: "/images/writerimage/Jibanananda_Das.jpg",
            writer: "জীবনানন্দ দাস",
            lifeCycle: '১৬ অক্টোবর ৫৬ - ২১ জুন ৯৯',
        },
        {
            id: "xyz",
            image: "/images/writerimage/RahmanShamsur.jpg",
            writer: "শামসুর রাহমান",
            lifeCycle: '১৬ অক্টোবর ৫৬ - ২১ জুন ৯৯',
        },
        {
            id: "xyz",
            image: "/images/writerimage/nazrul.jpg",
            writer: "কাজী নজরুল ইসলাম",
            lifeCycle: '২৪ মে ১৮৯৯ - ২৯ আগস্ট ১৯৭৬',
        },
        {
            id: "xyz",
            image: "/images/writerimage/robi.jpg",
            writer: "রবীন্দ্রনাথ ঠাকুর",
            lifeCycle: '১৬ অক্টোবর ৫৬ - ২১ জুন ৯৯',
        },
        {
            id: "xyz",
            image: "/images/writerimage/asaf.png",
            writer: "আসাফ উদ্‌-দৌলা ",
            lifeCycle: '১৬ অক্টোবর ৫৬ - ২১ জুন ৯৯',
        },
    ];

    const [lekhokList, setLekhokList] = useState([])
    const [error, setError] = useState(null);
  
  
  
  
    useEffect(() => {
      fetch("http://192.168.88.248:3002/writers")
        .then(response => response.json())
        .then(data => {
            setLekhokList(data);
          console.log('-----------', data)
          console.log('-----------', setLekhokList)
        })
        .catch(error => console.error("Error fetching data:", error));
  
    }, []);
  



    return (
        <>
            <div>
                <div>
                    <h1 className="text-[20px] text-yellow-500 font-semibold">লেখক</h1>
                </div>
                <div className="pt-10 pb-1">
                    {lekhokList.length &&
                        lekhokList.map((item, index) => (
                            <>
                                <div className="pb-3">
                                    <LekhokDetails
                                        key={index}
                                        image={`http://192.168.88.248:3002/${item.image}`}
                                        writer={item.name}
                                        id={item._id}
                                        lifeCycle={`${item.birth_date} - ${item.expiry_date}`}
                                    />
                                </div>
                                <div className="pb-3">
                                    {index <= lekhokList.length - 2 ? (
                                        <SidebarPostDivider />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </>

                        ))}
                </div>
                <div>
                    <div className="w-[180px] pb-8 flex space-x-16">
                        <div>
                            <button
                                className="bg-yellow-500 w-[180px] h-[43px] text-white rounded-md"

                            >
                                সব দেখুন
                            </button>
                        </div>

                        <div className="flex space-x-3">
                            <button
                                className="pl-2 bg-white rounded-md border border-gray-300  w-[50px] h-[43px] "

                            >
                                <Image
                                    src={'/images/svgs/previous.svg'}
                                    width={10}
                                    height={10}
                                    alt={'ff'}
                                    className="ml-[6px]"
                                />

                            </button>
                            <button
                                className="pl-4 bg-white rounded-md border border-gray-300 w-[50px] h-[43px] "

                            >
                                <Image
                                    src={'/images/svgs/next.svg'}
                                    width={10}
                                    height={10}
                                    alt={'ff'}
                                />

                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Lekhok;
