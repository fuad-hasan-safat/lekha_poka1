import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SobKobitaLeftContent from "./sobKobitaLeftContent";


export default function SobKobita() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/kobita.svg'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-maincontainwidth">
                        <SobKobitaLeftContent />
                    </div>
                    <div className="w-sidebarwidth">
                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}