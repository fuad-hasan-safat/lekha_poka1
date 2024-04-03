import LekhaPokaProfile from "@/components/common/lekhaProfile";
import SidebarPostDivider from "@/components/common/sidebarpostdivider";

const Somosamoyik = () => {
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
      star: 2.5,
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
          <div className="text-[20px] text-yellow-500 font-semibold">
            সমসাময়িক
          </div>
        </div>
        <div className="pt-[23px]">
          {somosamoyekPosts.length &&
            somosamoyekPosts.map((item, index) => (
              <>
                <div className="pb-1">
                  <LekhaPokaProfile
                    key={index}
                    image={item.image}
                    title={item.title}
                    writer={item.writer}
                    id={item.id}
                    star={item.star}
                  />
                </div>
                <div className="pb-3">
                  {index <= somosamoyekPosts.length - 2 ? (
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

export default Somosamoyik;
