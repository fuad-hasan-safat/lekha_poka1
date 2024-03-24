import Procchod from "@/components/procchod/Procchod";
import Carousel1 from "@/components/slider/Carousel1";
import AudioPlayer from "@/components/musicbar/AudioPlayer";
import { sliderPosts } from "@/public/demo-data/data";
import Layout from "./layout";
export default function Home() {
  return (
    <>
      {/* <Layout showNavbar={true} showFooter={true}> */}
        <Carousel1 sliderPosts={sliderPosts} />
       
        <Procchod />
      {/* </Layout> */}
    </>
  );
}
