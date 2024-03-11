import Image from "next/image";
import LekhaPokaProfile from "../common/lekhaProfile";



const SongInfo = () => {
    return (
        <>

            <div className="flex flex-row pt-10 space-x-2">
                <div className="">
                    <Image
                        src={'/images/writerimage/nazrul.jpg'}
                        width={50}
                        height={50}
                        alt=" "
                        className="rounded-full m-1"
                    />
                </div>
                <div className="flex flex-col text-gray-600 space-y-2">
                    <div className="">
                        <h1 className="text-xl  font-bold">মোরা ঝর্ণার মতো চঞ্চল </h1>
                    </div>
                    <div>
                        <h1>কাজী নজরুল ইসলাম</h1>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SongInfo;