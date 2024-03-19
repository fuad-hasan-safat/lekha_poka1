import AudioPlayer from "@/components/musicbar/AudioPlayer";
import SobGolpo from "@/components/golpo/sobGolpo";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout showFooter={true} showNavbar={true}>
      <div className="pt-[125px] text-black">
        <SobGolpo />
      </div>
      <AudioPlayer />
    </Layout>
  );
}
