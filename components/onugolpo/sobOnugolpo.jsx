import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SobOnugolpoLeftContent from "./sobOnugolpoLeftContent";


export default function SobOnuGolpo() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/onugolpo.png'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-maincontainwidth">
                        <SobOnugolpoLeftContent />
                    </div>
                    <div className="w-sidebarwidth">
                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}