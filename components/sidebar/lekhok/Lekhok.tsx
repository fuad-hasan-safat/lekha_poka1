import LekhaPokaProfile from "@/components/common/lekhaProfile";
import LekhokDetails from "@/components/common/lekhok";
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

    return (
        <>
            <div>
                <div>
                    <h1 className="text-[20px] text-yellow-500 font-semibold">লেখক</h1>
                </div>
                <div className="pt-10 pb-1">
                    {somosamoyekPosts.length &&
                        somosamoyekPosts.map((item, index) => (
                            <div className="pb-3">
                                <LekhokDetails
                                    key={index}
                                    image={item.image}
                                    writer={item.writer}
                                    id={item.id}
                                    lifeCycle={item.lifeCycle}
                                />
                            </div>
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
