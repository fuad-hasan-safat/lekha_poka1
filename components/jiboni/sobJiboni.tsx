import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SobKobitaLeftContent from "./sobJiboniLeftContent";
import SobJiboniLeftContent from "./sobJiboniLeftContent";


export default function SobJiboni() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/jiboni.png'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-maincontainwidth">
                        <SobJiboniLeftContent />
                    </div>
                    <div className="w-sidebarwidth">
                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}