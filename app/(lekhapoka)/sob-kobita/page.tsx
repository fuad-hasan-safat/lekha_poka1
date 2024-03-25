import AudioPlayer from "@/components/musicbar/AudioPlayer";
import SobKobita from "@/components/kobita/sobKobita";
import Layout from "../(lekhapoka)/layout";

export default function Home() {
  return (
    // <Layout showNavbar={true} showFooter={true}>
      <div className="pt-[125px] text-black">
        <SobKobita />
      </div>
    // </Layout>
  );
}
