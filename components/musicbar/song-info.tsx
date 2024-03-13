import Image from "next/image";
import LekhaPokaProfile from "../common/lekhaProfile";

type SongInfoProps = {
    title?: string;
    writer?: string;
    image?: string;
  };


const SongInfo =  ({ title, writer, image }: SongInfoProps) => {
    return (
        <>

            <div className="flex flex-row pt-10 space-x-2">
                <div className="">
                    <img
                        src={image}
                      
                        alt={title}
                        className="h-[70px] w-[70px] rounded-full"
                    />
                </div>
                <div className="flex flex-col text-gray-600 space-y-2 mt-1">
                    <div className="">
                        <h1 className="text-xl  font-bold">{title}</h1>
                    </div>
                    <div>
                        <h1>{writer}</h1>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SongInfo;