import Star from "@/components/common/Star";
import Image from "next/image";
import { lekhokObj } from "@/interfaces/Interfaces";

const LekhokDetails: React.FC<lekhokObj> = ({
    image,
    id,
    writer,
    lifeCycle,
}) => {
    return (
        <>
            <div className="flex w-[321]">
                <div className="lekhokIteam">
                    <img 
                    src={image}  
                    alt={`img ${id}`}
                   />
                </div>
                <div className="pl-4 text-black">
                    <a className="font-semibold " href="#">
                        {writer}
                    </a>
                    <h1>{lifeCycle}</h1>
                </div>
            </div>
           
            <div className="pt-2">
                {/* <hr className="my-12 h-0.5 border-t-0 bg-yellow-600 dark:bg-white/10 " /> */}
                <hr className={` w-96 h-0.5 border-t-0 bg-gray-300 dark:bg-white/10 `} />
            </div>

            
        </>
    );
};

export default LekhokDetails;
