import LekhaPokaProfile from "@/components/common/lekhaProfile";

const Somosamoyik = () => {
  const somosamoyekPosts = [
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জিবনানন্দ দাস",
      star: 1,
    },
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জিবনানন্দ দাস",
      star: 3,
    },
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জিবনানন্দ দাস",
      star: 2,
    },
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জিবনানন্দ দাস",
      star: 4,
    },
    {
      id: "xyz",
      image: "/images/writerimage/Jibanananda_Das.jpg",
      title: "নাম তার বনলতা সেন",
      writer: "জিবনানন্দ দাস",
      star: 3.5,
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1 className="text-[20px] text-yellow-500">সমসাময়িক</h1>
        </div>
        <div className="pt-10 pb-6">
          {somosamoyekPosts.length &&
            somosamoyekPosts.map((item, index) => (
              <div className="pb-3">
                <LekhaPokaProfile
                  key={index}
                  image={item.image}
                  title={item.title}
                  writer={item.writer}
                  id={item.id}
                  star={item.star}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Somosamoyik;
