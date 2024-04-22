import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import SobOnugolpoLeftContent from "./sobOnugolpoLeftContent";


export default function SobOnuGolpo() {
    return (
        <>
            <section className="all__post__sec__wrap">
                <div>
                    <Image
                        src={'/images/pages-banner-svg/onugolpo.png'}
                        height={380}
                        width={1920}
                        alt={"kobita banner"}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                        <div className="flex flex-col">

                            <div className="flex flex-row">
                                <div className="w-maincontainwidth">
                                    <SobOnugolpoLeftContent />
                                </div>
                                <div className="w-sidebarwidth">
                                    <Sidebar />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </section >


        </>
    );
}