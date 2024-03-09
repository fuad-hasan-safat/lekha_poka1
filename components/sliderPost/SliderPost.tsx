import { useState } from "react";

interface SliderPostProps {
  title: string;
  caption: string;
  discription: string;
  id: string;
}

const SliderPost: React.FC<SliderPostProps> = ({
  title,
  caption,
  discription,
  id,
}) => {
  //   const [html, setHTML] = useState({ __html: discription });
  return (
    <div className="mt-14 font-primary space-y-4">
      <div className="text-[52px] font-bold text-yellow-500">{title}</div>
      <div className="text-[28px] font-bold text-gray-700">{caption}</div>
      {/* <div className="text-[16px] text-black" dangerouslySetInnerHTML={html}/> */}
      <div className="text-[16px] text-black w-1/3 tracking-wider">
        {discription}
      </div>

      <button className="w-[176px] bg-yellow-400 px-2 py-1 h-[56px] rounded-md text-[19px] font-semibold text-white">
        বিস্তারিত
      </button>
    </div>
  );
};

export default SliderPost;
