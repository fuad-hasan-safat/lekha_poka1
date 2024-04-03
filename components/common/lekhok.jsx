import Star from "@/components/common/Star";
import Image from "next/image";
import { lekhokObj } from "@/interfaces/Interfaces";

const LekhokDetails = ({
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
                <div className="pl-4 text-[20px] text-gray-900">
                    <a className=" " href="#">
                        {writer}
                    </a>
                    <h1 className="text-[16px] text-gray-600">{lifeCycle}</h1>
                </div>
            </div>
            
        </>
    );
};

export default LekhokDetails;
