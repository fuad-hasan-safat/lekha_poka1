import AudioPlayer from "@/components/musicbar/AudioPlayer";
import Layout from "@/components/layout/layout";
import SobKobita from "@/components/kobita/sobKobita";

export default function Home(){
    return(
        <>
        <Layout>
        <div className="pt-[125px] text-black">
            <SobKobita/>
        </div>
        <AudioPlayer/>
        </Layout>
        </>
    )
}