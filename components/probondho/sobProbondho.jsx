import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SobProbondhoLeftContent from "./sobProbondhoLeftContent";


export default function SobProbondho() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/probondho.png'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-maincontainwidth">
                        <SobProbondhoLeftContent />
                    </div>
                    <div className="w-sidebarwidth">
                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}