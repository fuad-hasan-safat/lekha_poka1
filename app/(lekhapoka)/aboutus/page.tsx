import Image from "next/image";

export const metadata = {
  title: "আমাদের কথা",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <>
      <section>
        <section className="all__post__sec__wrap">
          <div>
            <Image
              src={'/images/pages-banner-svg/aboutus.svg'}
              height={380}
              width={1920}
              alt={"kobita banner"}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
          </div>
        </section>

        <section className="py-[54px]">
          <div className="container">
            <div >

              <p className=" text-center text-gray-700 [word-spacing:8px] text-[28px]">
                লেখার পোকা  হলো কবিতা, গান, প্রবন্ধ গল্প এবং জীবনী লেখা প্রকাশের একটি ওয়েব <br />
                সাইট। যেটা অভিব্যক্তির একটি সুন্দর রূপ যা ব্যক্তিদের তাদের চিন্তাভাবনা, আবেগ এবং <br />
                অভিজ্ঞতা সৃজনশীল এবং শৈল্পিক উপায়ে প্রকাশ করতে দেয়। </p>

            </div>
          </div>
        </section>

        <section className="pt-[175px]">
          <div className="container">
            <div className="flex flex-row">
              <div className="columns-6 w-1/2">
                <img
                  className=""
                  alt="mission side image"
                  src="/images/aboutuspage/missionSideImage.png"
                />
              </div>
              <div className="columns-6 flex flex-col text-[20px] w-1/2 text-justify space-y-[48px]">
                <div className="text-[#F9A106] text-[48px]">মিশন</div>
                <div>
                  <hr className={`my-2 w-[547px]  h-[0.5px] border-0 bg-[#F9A106]`} />
                </div>
                <div className="text-[#484848]  pt-1">
                  লেখার পোকার 'কবিতা গল্প জীবনী নিয়ে মিশন' হলো একটি আদর্শ,
                  একাংশিক বা পূর্ণসংখ্যানে কবিতা, গল্প, এবং জীবনী নিয়ে নির্ধারিত উদ্দেশ্য বা লক্ষ্য বা ধারণা।
                  এই মিশনের পেছনের উদ্দেশ্য মূলত কবিতা, গল্প, এবং জীবনীর মাধ্যমে নিম্নলিখিত
                  কিছু অংশে লক্ষ দেওয়া হয়:
                </div>

                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">সংস্কৃতি ও বৈচিত্র্য বিষয়ে চিন্তার অনুষ্ঠান:</span> কবিতা, গল্প, এবং জীবনী পড়ে সামাজিক এবং সাংস্কৃতিক সমস্যার উপর চিন্তা নিতে পারেন
                    এবং সমাধানের দিকে ভাবতে পারেন।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">ব্যক্তিগত বা সামাজিক পরিবর্তনে সাহায্য করা:</span> কবিতা, গল্প, এবং জীবনী ব্যক্তিগত ও সামাজিক পরিবর্তনে সাহায্য করতে পারে।।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">বিভিন্ন ভূমিকার সামনে আসা:</span>কবিতা, গল্প, এবং জীবনী মাধ্যমে বিভিন্ন ভূমিকার সামনে আসা যায়, যেমন পরিবার, সমাজ, রাষ্ট্র, সাংস্কৃতিক পরিবর্তন, সাহিত্য ইত্যাদি।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">উদ্দীপনা এবং প্রেরণা সৃষ্টি করা: </span>কবিতা, গল্প, এবং জীবনী মাধ্যমে অন্যের মধ্যে উদ্দীপনা এবং প্রেরণা সৃষ্টি করা যেতে পারে।।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">সাহিত্যিক উন্নতি: </span> কবিতা, গল্প, এবং জীবনী লেখার মাধ্যমে সাহিত্যিক উন্নতি করা যেতে পারে।।</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="pt-[175px]">
          <div className="container">
            <div className="flex flex-row">
             
              <div className="columns-6 flex flex-col text-[20px] w-1/2 text-justify space-y-[48px]">
                <div className="text-[#F9A106] text-[48px]">মিশন</div>
                <div>
                  <hr className={`my-2 w-[547px]  h-[0.5px] border-0 bg-[#F9A106]`} />
                </div>
                <div className="text-[#484848]  pt-1">
                  লেখার পোকার 'কবিতা গল্প জীবনী নিয়ে মিশন' হলো একটি আদর্শ,
                  একাংশিক বা পূর্ণসংখ্যানে কবিতা, গল্প, এবং জীবনী নিয়ে নির্ধারিত উদ্দেশ্য বা লক্ষ্য বা ধারণা।
                  এই মিশনের পেছনের উদ্দেশ্য মূলত কবিতা, গল্প, এবং জীবনীর মাধ্যমে নিম্নলিখিত
                  কিছু অংশে লক্ষ দেওয়া হয়:
                </div>

                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">সংস্কৃতি ও বৈচিত্র্য বিষয়ে চিন্তার অনুষ্ঠান:</span> কবিতা, গল্প, এবং জীবনী পড়ে সামাজিক এবং সাংস্কৃতিক সমস্যার উপর চিন্তা নিতে পারেন
                    এবং সমাধানের দিকে ভাবতে পারেন।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">ব্যক্তিগত বা সামাজিক পরিবর্তনে সাহায্য করা:</span> কবিতা, গল্প, এবং জীবনী ব্যক্তিগত ও সামাজিক পরিবর্তনে সাহায্য করতে পারে।।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">বিভিন্ন ভূমিকার সামনে আসা:</span>কবিতা, গল্প, এবং জীবনী মাধ্যমে বিভিন্ন ভূমিকার সামনে আসা যায়, যেমন পরিবার, সমাজ, রাষ্ট্র, সাংস্কৃতিক পরিবর্তন, সাহিত্য ইত্যাদি।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">উদ্দীপনা এবং প্রেরণা সৃষ্টি করা: </span>কবিতা, গল্প, এবং জীবনী মাধ্যমে অন্যের মধ্যে উদ্দীপনা এবং প্রেরণা সৃষ্টি করা যেতে পারে।।</p>
                </div>


                <div className="text-[#484848] text-[20px] pt-1">
                  <p><span className="text-[#F9A106]">সাহিত্যিক উন্নতি: </span> কবিতা, গল্প, এবং জীবনী লেখার মাধ্যমে সাহিত্যিক উন্নতি করা যেতে পারে।।</p>
                </div>

              </div>

              <div className="columns-6 w-1/2">
                <img
                  className=""
                  alt="mission side image"
                  src="/images/aboutuspage/missionSideImage.png"
                />
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
}
