'use client';

import Image from "next/image";

  type ImageButtonProps = {
    src: string;
    fnc: () => void;
    className?: string;
  };
  
  const ImageButton = ({ fnc, src, className }: ImageButtonProps) => {
    const buttonSize = 65;
    return (
      <button onClick={fnc}>
        <Image
          src={src}
          width={buttonSize}
          height={buttonSize}
          alt=" "
          className={`drop-shadow-lg ${className ?? ''}`}
        />
      </button>
    );
  };

  export default ImageButton;