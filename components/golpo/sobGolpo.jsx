import Image from "next/image";
import Sidebar from "../sidebar/Sidebar";
import SobGolpoLeftContent from "./sobGolpoLeftContent";



export default function SobGolpo() {
    return (
        <><section className="all__post__sec__wrap">
            <div>
                <Image
                    src={'/images/pages-banner-svg/golpo.svg'}
                    height={380}
                    width={1920}
                    alt={"kobita banner"}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flex flex-col">

                            <div className="flex flex-row">
                                <div className="w-maincontainwidth">
                                    <SobGolpoLeftContent />
                                </div>
                                <div className="w-sidebarwidth">
                                    <Sidebar />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    );
}