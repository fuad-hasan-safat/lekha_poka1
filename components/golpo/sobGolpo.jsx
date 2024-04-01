import Image from "next/image";
import Sidebar from "../sidebar/Sidebar";
import SobGolpoLeftContent from "./sobGolpoLeftContent";



export default function SobGolpo() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/golpo.svg'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-maincontainwidth">
                        <SobGolpoLeftContent/>
                    </div>
                    <div className="w-sidebarwidth">
                        <Sidebar />
                    </div>
                </div>

            </div>

        </>
    );
}