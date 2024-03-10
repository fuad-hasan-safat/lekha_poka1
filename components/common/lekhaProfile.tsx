import Star from "@/components/common/Star";
import Image from "next/image";
import { lekhaPokaProfileObj } from "@/interfaces/Interfaces";

const LekhaPokaProfile: React.FC<lekhaPokaProfileObj> = ({
  image,
  id,
  title,
  writer,
  star,
}) => {
  return (
    <>
      <div className="flex ">
        <div className="iteam">
          <img src={image} height={100} width={100} alt="" />
        </div>
        <div className="pl-4 text-black">
          <a className="font-semibold " href="#">
            {title}
          </a>
          <h1>{writer}</h1>
          <div className="pt-2">
            <Star star={star} alt="" width={20} height={20} />
          </div>

        </div>

      </div>
      <div className="pt-2">
        <hr className={` w-96 h-0.5 border-t-0 bg-gray-300 dark:bg-white/10 `} />
      </div>
    </>
  );
};

export default LekhaPokaProfile;
