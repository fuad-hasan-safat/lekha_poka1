import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type gotoprofileProps = {
  buttonClass: string;
  buttonText: string;
  id: number;
};

export default function GoToProfile({
  buttonClass,
  buttonText,
  id,
}: gotoprofileProps) {
  const router = useRouter();

  function handleClick(userId: number) {
    router.push(`/user/${userId}`);
  }

  return (
    <>
      <div>
        <button onClick={()=>handleClick(id)} className={`${buttonClass}`}>
          {buttonText}
        </button>
      </div>
    </>
  );
}
