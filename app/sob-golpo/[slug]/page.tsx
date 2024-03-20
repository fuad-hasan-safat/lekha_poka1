import Layout from "@/app/layout";
import AudioPlayer from "@/components/musicbar/AudioPlayer";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";

export default function PostDetails() {
  return (
    <Layout showFooter={true} showNavbar={true}>
      <div className="flex flex-col pt-[115px]">
        <div>
          <Image
            src={'/images/pages-banner-svg/golpo.svg'}
            height={380}
            width={1920}
            alt={"kobita banner"}
          />
        </div>
        <div className="flex flex-row">
          <div className=" text-black w-maincontainwidth pt-24 pl-56 space-y-3">
            <div className="font-semibold text-[35px] text-[#FCD200]">বিদ্রোহী</div>
            <div className="text-[22px] text-[#595D5B] ">কাজী নজরুল ইসলাম</div>
            <div className="text-[20px] text-[#737373] ">
              বল বীর -<br />
              বল উন্নত মম শির!
              <br />
              শির নেহারি আমারি,
              <br />
              নতশির ঐ শিখর হিমাদ্রির !<br />
              বল বীর-
              <br />
              বল মহাবিশ্বের মহাকাশ ফাড়ি'
              <br />
              চন্দ্র সূর্য্য গ্রহ তারা ছাড়ি'
              <br />
              ভূলোক দ্যুলোক গোলক ভেদিয়া,
              <br />
              খোদার আসন 'আরশ' ছেদিয়া
              <br />
              উঠিয়াছে চির-বিস্ময় আমি বিশ্ব-বিধাত্রীর !<br />
              মম ললাটে রুদ্র-ভগবান জ্বলে রাজ-রাজটিকা দীপ্ত জয়শ্রীর!
              <br />
              বল বীর -<br />
              আমি চির-উন্নত শির !<br />
              আমি চিরদুর্দ্দম, দুর্বিনীত, নৃশংস,
              <br />
              মহা-প্রলয়ের আমি নটরাজ, আমি সাইক্লোন, আমি ধ্বংস,
              <br />
              আমি মহাভয়, আমি অভিশাপ পৃথ্বীর!
              <br />
              আমি দুর্ব্বার,
              <br />
              আমি ভেঙে করি সব চুরমার!
              <br />
              আমি অনিয়ম উচ্ছৃঙ্খল,
              <br />
              আমি দ'লে যাই যত বন্ধন, যত নিয়ম কানুন শৃঙ্খল!
              <br />
              আমি মানি নাকো কোন আইন,
              <br />
              আমি ভরা-তরী করি ভরা-ডুবি, আমি টর্পেডো, আমি ভীম,
              <br />
            </div>

          </div>
          <div className="w-sidebarwidth">
            <Sidebar />
          </div>
        </div>
      </div>
      <AudioPlayer />
    </Layout>
  );
}
